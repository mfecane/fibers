import {mat4} from 'gl-matrix'
import {Renderer} from './Renderer'

export class Camera {
	public position: number[] = [0, 0, 5]

	public cameraMatrix: mat4
	public projectionMatrix: mat4

	constructor(private renderer: Renderer) {
		this.cameraMatrix = mat4.create()
		this.projectionMatrix = mat4.create()
	}

	public update() {
		const fieldOfView = (45 * Math.PI) / 180
		const aspectRatio = this.renderer.width / this.renderer.height
		const near = 0.1
		const far = 100
		mat4.perspective(this.projectionMatrix, fieldOfView, aspectRatio, near, far)
		const cameraPosition = new Float32Array(this.position)
		const center = new Float32Array([0, 0, 0])
		const cameraUp = new Float32Array([0, 1, 0])
		mat4.lookAt(this.cameraMatrix, cameraPosition, center, cameraUp)
	}
}
