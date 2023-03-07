import {Optional} from 'typescript-optional'
import {fragmentShaderSource, vertexShaderSource} from './shaders'
import {Camera} from './Camera'

export class Renderer {
	public canvas: HTMLCanvasElement
	public context: WebGL2RenderingContext
	public width = 0
	public height = 0

	public camera?: Camera

	constructor() {
		this.canvas = document.createElement(`canvas`)
		document.body.appendChild(this.canvas)
		this.canvas.id = 'canvas'
		this.context = Optional.ofNullable(this.canvas.getContext('webgl2')).orElseThrow(() => 'Failed to create context')
		const gl = this.context
		gl.enable(gl.DEPTH_TEST)

		this.width = window.innerWidth
		this.height = window.innerHeight

		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		gl.viewport(0, 0, this.width, this.height)
	}

	public draw() {
		const gl = this.context
		gl.clearColor(0.0, 0.0, 0.0, 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT)
	}
}
