import * as THREE from 'three'
import {BufferGeometry} from 'three'

export class FiberGenerator {
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

	public build(): BufferGeometry {
		const bufferGeometry = new THREE.BufferGeometry()

		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions.flat(), 2))
		bufferGeometry.setAttribute('texCoords', new THREE.Float32BufferAttribute(this.uvs.flat(), 2))

		bufferGeometry.setIndex(this.indices.flat())

		console.log(this)

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
