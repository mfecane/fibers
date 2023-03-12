import * as THREE from 'three'
import {Vector3} from 'three'

export type OriginPoint = [x: number, y: number, angle: number, scale: number, u: number, v: number, bend: number]

export class MeshInstanceDataProvider {
	private fiberSize = 0.08
	private size = 3.98
	private density = 6
	private curvature = 0.05

	public origins: OriginPoint[] = []

	public matrixArray?: Float32Array
	public uvArray?: Float32Array
	public bendArray?: Float32Array

	private isSorting = false

	public constructor() {}

	public createOrigins() {
		const minx = -this.size / 2
		const maxx = this.size / 2
		const miny = -this.size / 2
		const maxy = this.size / 2
		const step = this.fiberSize / this.density
		this.origins = []
		for (let x = minx; x < maxx; x += step) {
			for (let y = miny; y < maxy; y += step) {
				this.origins.push([
					x + (Math.random() - 0.5) * step,
					y + (Math.random() - 0.5) * step,
					Math.random() * Math.PI * 2,
					1 + Math.random() * 0.5,
					(x - minx) / (maxx - minx),
					(y - miny) / (maxy - miny),
					(Math.random() - 0.5) * this.curvature,
				])
			}
		}
	}

	public sort(cameraPosition: THREE.Vector3) {
		return new Promise<void>((resolve, reject) => {
			if (this.isSorting) {
				reject()
			}
			this.isSorting = true
			this.matrixArray = new Float32Array(16 * this.origins.length)
			this.uvArray = new Float32Array(2 * this.origins.length)
			this.bendArray = new Float32Array(1 * this.origins.length)
			this.origins.sort((a, b) => this.sortFunc(cameraPosition, a, b))
			for (let i = 0; i < this.origins.length; i++) {
				const x = this.origins[i][0]
				const z = this.origins[i][1]
				const theta = this.origins[i][2]
				const scaleY = this.origins[i][3]

				const matrix = new THREE.Matrix4()
				matrix.makeRotationY(theta)
				const translation = new THREE.Vector3(x, 0, z)
				matrix.setPosition(translation)
				const scale = new THREE.Vector3(1, scaleY, 1)
				matrix.scale(scale)
				matrix.toArray(this.matrixArray, i * 16)

				const u = this.origins[i][4]
				const v = this.origins[i][5]

				this.uvArray[2 * i] = u
				this.uvArray[2 * i + 1] = v

				this.bendArray[i] = this.origins[i][6]
			}

			setTimeout(() => {
				this.isSorting = false
			}, 1000)

			resolve()
		})
	}

	private sortFunc(cameraPosition: Vector3, a: OriginPoint, b: OriginPoint): number {
		const dist1 = cameraPosition.distanceTo(new Vector3(a[0], 0, a[1]))
		const dist2 = cameraPosition.distanceTo(new Vector3(b[0], 0, b[1]))
		return dist2 - dist1
	}
}
