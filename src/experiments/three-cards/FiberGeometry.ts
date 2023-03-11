import * as THREE from 'three'
import {BufferGeometry} from 'three'

export type OriginPoint = [x: number, y: number, angle: number]

export class FiberGeometry {
	private count = 0
	public positions: number[][] = []
	public indices: number[][] = []
	public uvs: number[][] = []
	private width = 0.12
	private length = 0.24

	public segments = 4

	constructor() {
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

	private makeOrigins() {
		const minx = -2
		const maxx = 2
		const miny = -2
		const maxy = 2
		const step = 0.05

		const origins: OriginPoint[] = []
		for (let x = minx; x < maxx; x += step) {
			for (let y = miny; y < maxy; y += step) {
				origins.push([
					x + (Math.random() - 0.5) * step,
					y + (Math.random() - 0.5) * step,
					Math.random() * Math.PI * 2,
				])
			}
		}
		this.count = origins.length
		return origins
	}

	public build(): BufferGeometry {
		const origins = this.makeOrigins()

		const bufferGeometry = new THREE.InstancedBufferGeometry()

		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions.flat(), 2))
		bufferGeometry.setAttribute('texCoords', new THREE.Float32BufferAttribute(this.uvs.flat(), 2))

		bufferGeometry.setIndex(this.indices.flat())

		const matrixArray = new Float32Array(16 * this.count)
		const instanceMatrix = new THREE.InstancedBufferAttribute(matrixArray, 16, false, 1)
		bufferGeometry.setAttribute('instanceMatrix', instanceMatrix)

		const matrix = new THREE.Matrix4()
		for (let i = 0; i < this.count; i++) {
			const x = origins[i][0]
			const z = origins[i][1]
			const theta = origins[i][2]
			// prettier-ignore
			matrix.set(
				Math.cos(theta),   0,   Math.sin(theta),    -x,
				0,            	   1,   0,                   0,
				-Math.sin(theta),  0,   Math.cos(theta),    -z,
				0,                 0,   0,                   1
			)
			matrix.toArray(matrixArray, i * 16)
		}

		// TODO  check nan values

		console.log('bufferGeometry', bufferGeometry)

		// ? i can generate array of positions and submit index as instanced attribute this selecting positions with index?

		return bufferGeometry
	}

	private addlayer(segment: number) {
		const start = this.positions.length
		const y = (this.length / this.segments) * segment
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
				[start, start + 1, start - 1],
			]
		)
	}

	public getBuffer() {
		return {positions: this.positions.flat(), indices: this.indices.flat()}
	}

	private getWidth(segment: number) {
		return this.width - ((segment / this.segments) * this.width) / 2
	}
}
