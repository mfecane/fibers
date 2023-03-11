import * as THREE from 'three'
import {BufferGeometry} from 'three'

export type OriginPoint = [x: number, y: number, angle: number, u: number, v: number]

export class FiberGeometry {
	public positions: number[][] = []
	public indices: number[][] = []
	public uvs: number[][] = []

	private fiberSize = 0.05
	private fiberLength = 0.08

	public segments = 5

	constructor() {
		const width = this.getWidth(0)
		this.positions = [
			[-width / 2, 0, 0],
			[width / 2, 0, 0],
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
				[-width / 2, y, 0],
				[width / 2, y, 0],
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

	private getWidth(segment: number) {
		return this.fiberSize - ((segment / this.segments) * this.fiberSize) / 2
	}

	public build(): BufferGeometry {
		const bufferGeometry = new THREE.BufferGeometry()

		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions.flat(), 3))
		bufferGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs.flat(), 2))
		bufferGeometry.setIndex(this.indices.flat())

		return bufferGeometry
	}
}
