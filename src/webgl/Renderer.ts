import {Optional} from 'typescript-optional'
import {fragmentShaderSource, vertexShaderSource} from './shaders'
import {mat4} from 'gl-matrix'
import {Camera} from './Camera'

export class Renderer {
	public canvas: HTMLCanvasElement
	private context: WebGL2RenderingContext
	public width = 0
	public height = 0

	public camera?: Camera

	private projectionLocation: WebGLUniformLocation
	private cameraLocation: WebGLUniformLocation

	constructor() {
		this.canvas = document.createElement(`canvas`)
		document.body.appendChild(this.canvas)
		this.canvas.id = 'canvas'
		this.context = Optional.ofNullable(this.canvas.getContext('webgl2')).orElseThrow(() => 'Failed to create context')
		const gl = this.context

		const vertShader = Optional.ofNullable(gl.createShader(gl.VERTEX_SHADER)).orElseThrow(
			() => 'Fail to create vertex shader'
		)
		const fragShader = Optional.ofNullable(gl.createShader(gl.FRAGMENT_SHADER)).orElseThrow(
			() => 'Fail to create fragment shader'
		)

		gl.shaderSource(vertShader, vertexShaderSource)
		gl.shaderSource(fragShader, fragmentShaderSource)

		gl.compileShader(vertShader)
		if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
			alert('Error compiling vertex shader')
			console.log(gl.getShaderInfoLog(vertShader))
		}

		gl.compileShader(fragShader)
		if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
			alert('Error compiling fragment shader')
			console.log(gl.getShaderInfoLog(fragShader))
		}

		const program = Optional.ofNullable(gl.createProgram()).orElseThrow(() => 'Fail to create program')
		gl.attachShader(program, vertShader)
		gl.attachShader(program, fragShader)
		gl.linkProgram(program)

		gl.validateProgram(program)
		if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
			const info = gl.getProgramInfoLog(program)
			throw 'Error validating program ' + info
		}

		gl.useProgram(program)

		const vertexBuffer = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
		// prettier-ignore

		// 20 bytes - 3x4 floats position 2x4 floats uvs

		const positions = [
			-1, -1, 0, 0, 0,
			 1, -1, 0, 1, 0,
			 1,  1, 0, 1, 1,
			-1,  1, 0, 0, 1
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

		const indexBuffer = gl.createBuffer()
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
		// prettier-ignore
		const indices = [
			0, 1, 2,
			2, 3, 0
		];
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

		const positionAttributeLocation = gl.getAttribLocation(program, 'aPosition')
		gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 20, 0)
		gl.enableVertexAttribArray(positionAttributeLocation)

		const uvAttributeLocation = gl.getAttribLocation(program, 'aTexCoord')
		gl.vertexAttribPointer(uvAttributeLocation, 2, gl.FLOAT, false, 20, 12)
		gl.enableVertexAttribArray(uvAttributeLocation)

		this.projectionLocation = Optional.ofNullable(gl.getUniformLocation(program, 'projectionMatrix')).orElseThrow(
			() => 'No location'
		)
		this.cameraLocation = Optional.ofNullable(gl.getUniformLocation(program, 'cameraMatrix')).orElseThrow(
			() => 'No location'
		)

		this.width = window.innerWidth
		this.height = window.innerHeight

		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		gl.viewport(0, 0, this.width, this.height)
	}

	public draw() {
		const gl = this.context
		if (!this.camera) {
			throw 'No camera'
		}
		gl.uniformMatrix4fv(this.projectionLocation, false, this.camera.projectionMatrix)
		gl.uniformMatrix4fv(this.cameraLocation, false, this.camera.cameraMatrix)
		gl.clearColor(0.0, 0.0, 0.0, 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT)
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
	}
}
