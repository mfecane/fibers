import * as THREE from 'three'
import {BufferGeometry, PerspectiveCamera} from 'three'
import {MeshInstanceDataProvider} from './MeshInstanceDataProvider'

export class FiberGeometry {
	public positions: number[][] = []
	public indices: number[][] = []
	public uvs: number[][] = []

	private fiberSize = 0.08
	private fiberLength = 0.06

	public segments = 8

	meshInstanceDataProvider: MeshInstanceDataProvider
	bufferGeometry?: THREE.InstancedBufferGeometry

	constructor(private camera: PerspectiveCamera) {
		this.meshInstanceDataProvider = new MeshInstanceDataProvider()

		const width = this.getWidth(0)
		this.positions = [
			[-width / 2, 0],
			[width / 2, 0],
		]
		this.uvs = [
			[0, 0],
			[1, 0],
		]
		for (let i = 1; i < this.segments; ++i) {
			this.addlayer(i)
		}
	}

	private addlayer(segment: number) {
		const start = this.positions.length
		const y = (this.fiberLength / this.segments) * segment
		const v = segment / (this.segments - 1)
		const width = this.getWidth(segment)
		this.positions.push(
			...[
				[-width / 2, y],
				[width / 2, y],
			]
		)
		this.uvs.push(
			...[
				[0, v],
				[1, v],
			]
		)
		this.indices.push(
			...[
				[start - 2, start - 1, start],
				[start, start - 1, start + 1],
			]
		)
	}

	public build(): BufferGeometry {
		this.bufferGeometry = new THREE.InstancedBufferGeometry()

		this.bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions.flat(), 2))
		this.bufferGeometry.setAttribute('texCoords', new THREE.Float32BufferAttribute(this.uvs.flat(), 2))

		this.bufferGeometry.setIndex(this.indices.flat())

		this.meshInstanceDataProvider.createOrigins()
		const count = this.meshInstanceDataProvider.origins.length

		const matrixArray = new Float32Array(16 * count)
		const instanceMatrix = new THREE.InstancedBufferAttribute(matrixArray, 16, false, 1)
		this.bufferGeometry.setAttribute('instanceMatrix', instanceMatrix)

		const bendArray = new Float32Array(1 * count)
		const bend = new THREE.InstancedBufferAttribute(bendArray, 1, false, 1)
		this.bufferGeometry.setAttribute('bend', bend)

		const uvArray = new Float32Array(2 * count)
		const uv2 = new THREE.InstancedBufferAttribute(uvArray, 2, false, 1)
		this.bufferGeometry.setAttribute('texCoords2', uv2)

		// TODO  check nan values
		// ? i can generate array of positions and submit index as instanced attribute this selecting positions with index?

		return this.bufferGeometry
	}

	public getBuffer() {
		return {positions: this.positions.flat(), indices: this.indices.flat()}
	}

	private getWidth(segment: number) {
		// return this.fiberSize - ((segment / this.segments) * this.fiberSize) / 2
		return this.fiberSize
	}

	public update() {
		this.meshInstanceDataProvider
			.sort(this.camera.position)
			.then(() => {
				const instanceMatrix = new THREE.InstancedBufferAttribute(
					this.meshInstanceDataProvider.matrixArray!,
					16,
					false,
					1
				)
				this.bufferGeometry!.setAttribute('instanceMatrix', instanceMatrix) // please fuck off, ts!
				const bend = new THREE.InstancedBufferAttribute(this.meshInstanceDataProvider.bendArray!, 1, false, 1)
				this.bufferGeometry!.setAttribute('bend', bend)
				const uv2 = new THREE.InstancedBufferAttribute(this.meshInstanceDataProvider.uvArray!, 2, false, 1)
				this.bufferGeometry!.setAttribute('texCoords2', uv2)
			})
			.catch(() => {
				console.log('ignored')
			})
	}
}
