import { cloneDeep } from 'lodash'
import * as THREE from 'three'
import { BufferGeometry, Vector3 } from 'three'
import { FiberCurve } from './CurveGenerator'
import { MeshPrototypeGenerator } from './MeshPrototypeGenerator'
import { ShapeFactory, ShapeFactoryOptions } from './ShapeFactory'

export type BufferChunk = {
  vertices: [number, number, number][]
  uvs: [number, number][]
  uvs2: [number, number][]
  normals: [number, number, number][]
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

export type MeshGeneratorShape = Vector3[]

export class ExtrudedMeshGenerator {
  public bufferGeometry?: BufferGeometry
  private readonly meshPrototypeGenerator: MeshPrototypeGenerator
  private readonly shapeFactory: ShapeFactory

  public constructor(private readonly options: ExtrudedMeshGeneratorOptions) {
    this.meshPrototypeGenerator = new MeshPrototypeGenerator(options)
    this.shapeFactory = new ShapeFactory(options)
  }

  public setCurves(curves: FiberCurve[]) {
    this.meshPrototypeGenerator.createFromCurves(curves)
  }

  public generateBufferGeometry(): THREE.BufferGeometry {
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

  private moveChunkToOrigin(chunk: BufferChunk, origin: Vector3): void {
    chunk.vertices.forEach((vertex) => {
      vertex[0] += origin.x
      vertex[1] += origin.y
      vertex[2] += origin.z
    })
  }

  private cloneChunk(chunk: BufferChunk): BufferChunk {
    return cloneDeep(chunk)
  }

  private appendChunk(target: BufferChunk, source: BufferChunk) {
    const startIndex = target.vertices.length
    target.vertices.push(...source.vertices)
    target.uvs.push(...source.uvs)
    target.uvs2.push(...source.uvs2)
    target.normals.push(...source.normals)
    target.indices.push(
      ...source.indices.map((layerIndices) =>
        layerIndices.map((index) => startIndex + index)
      )
    )
    target.offsets.push(...source.offsets)
  }

  public getBufferGeometry(chunk: BufferChunk) {
    const bufferGeometry = new THREE.BufferGeometry()

    bufferGeometry.setIndex(chunk.indices.flat())
    bufferGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(chunk.vertices.flat(), 3)
    )
    bufferGeometry.setAttribute(
      'uv',
      new THREE.Float32BufferAttribute(chunk.uvs.flat(), 2)
    )
    bufferGeometry.setAttribute(
      'uv2',
      new THREE.Float32BufferAttribute(chunk.uvs2.flat(), 2)
    )
    bufferGeometry.setAttribute(
      'normal',
      new THREE.Float32BufferAttribute(chunk.normals.flat(), 3)
    )
    bufferGeometry.setAttribute(
      'offsets',
      new THREE.Float32BufferAttribute(chunk.offsets, 1)
    )
    return bufferGeometry
  }
}
