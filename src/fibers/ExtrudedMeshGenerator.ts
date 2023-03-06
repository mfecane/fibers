import {BufferGeometry, Vector2, Vector3} from 'three'
import * as THREE from 'three'
import {FiberCurve} from './CurveGenerator'
import {MeshPrototypeGenerator} from './MeshPrototypeGenerator'
import {ShapeFactory, ShapeFactoryOptions} from './ShapeFactory'

export type BufferChunk = {
	vertices: number[][]
	uvs: number[][]
	uvs2: number[][]
	normals: number[][]
	indices: number[][]
	offsets: number[]
}

export enum ShapeType {
	Round = 'round',
	Rect = 'rect',
}

export interface ExtrudedMeshGeneratorOptions extends ShapeFactoryOptions {
	widthSegments: number
	shapeType: ShapeType
}

export type MeshGeneratorShape = {origin: Vector3; uv: Vector2}

export class ExtrudedMeshGenerator {
	public bufferGeometry?: BufferGeometry
	private readonly meshPrototypeGenerator: MeshPrototypeGenerator
	private readonly shapeFactory: ShapeFactory

	public constructor(private readonly options: ExtrudedMeshGeneratorOptions) {
		this.meshPrototypeGenerator = new MeshPrototypeGenerator(options)
		this.shapeFactory = new ShapeFactory(options)
	}

	public setCurves(curves: FiberCurve[]): void {
		this.meshPrototypeGenerator.createFromCurves(curves)
	}

	public generateBufferGeometry(): BufferGeometry {
		const singleChunk: BufferChunk = {
			vertices: [],
			uvs: [],
			uvs2: [],
			normals: [],
			indices: [],
			offsets: [],
		}

		const origins = this.shapeFactory.generateShape(this.options.shapeType)

		origins.forEach((origin) => {
			const chunk = this.cloneRandomChunk()
			this.moveChunkToOrigin(chunk, origin)
			this.appendChunk(singleChunk, chunk)
		})

		return this.getBufferGeometry(singleChunk)
	}

	private cloneRandomChunk(): BufferChunk {
		const chunks = this.meshPrototypeGenerator.prototypes
		return this.cloneChunk(chunks[Math.floor(Math.random() * chunks.length)])
	}

	private moveChunkToOrigin(chunk: BufferChunk, origin: MeshGeneratorShape): void {
		const randomAngle = 2 * Math.PI * Math.random()
		chunk.vertices.forEach((vertex) => {
			const x = vertex[0]
			const z = vertex[2]
			vertex[0] = x * Math.sin(randomAngle) - z * Math.cos(randomAngle) + origin.origin.x
			vertex[2] = x * Math.cos(randomAngle) + z * Math.sin(randomAngle) + origin.origin.z
		})
		chunk.uvs2.forEach((vertex) => {
			vertex[0] = origin.uv.x
			vertex[1] = origin.uv.y
		})
	}

	private cloneChunk(chunk: BufferChunk): BufferChunk {
		// TODO check performance
		const result: BufferChunk = {
			vertices: chunk.vertices.map((element) => element.slice()),
			uvs: chunk.uvs.map((element) => element.slice()),
			uvs2: chunk.uvs2.map((element) => element.slice()),
			normals: chunk.normals.map((element) => element.slice()),
			indices: chunk.indices.map((element) => element.slice()),
			offsets: chunk.offsets.slice(),
		}
		return result
	}

	private appendChunk(target: BufferChunk, source: BufferChunk): void {
		const startIndex = target.vertices.length
		target.vertices.push(...source.vertices)
		target.uvs.push(...source.uvs)
		target.uvs2.push(...source.uvs2)
		target.normals.push(...source.normals)
		target.indices.push(...source.indices.map((layerIndices) => layerIndices.map((index) => startIndex + index)))
		target.offsets.push(...source.offsets)
	}

	public getBufferGeometry(chunk: BufferChunk): BufferGeometry {
		const bufferGeometry = new THREE.BufferGeometry()

		bufferGeometry.setIndex(chunk.indices.flat())
		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(chunk.vertices.flat(), 3))
		bufferGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(chunk.uvs.flat(), 2))
		bufferGeometry.setAttribute('uv2', new THREE.Float32BufferAttribute(chunk.uvs2.flat(), 2))
		bufferGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(chunk.normals.flat(), 3))
		bufferGeometry.setAttribute('offsets', new THREE.Float32BufferAttribute(chunk.offsets, 1))
		return bufferGeometry
	}
}
