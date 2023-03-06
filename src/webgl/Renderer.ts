import {Optional} from 'typescript-optional'
import {fragmentShaderSource, vertexShaderSource} from './shaders'
import {mat4} from 'gl-matrix'

export class Renderer {
	private canvas: HTMLCanvasElement
	private context: WebGL2RenderingContext
	private width = 0
	private height = 0

	private projectionMatrix: mat4
	private cameraMatrix: mat4

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
		const positions = [
			-1, -1, 0,
			1, -1, 0,
			1, 1, 0,
			-1, 1, 0
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

		const position_attrib_location = gl.getAttribLocation(program, 'position')
		gl.enableVertexAttribArray(position_attrib_location)
		gl.vertexAttribPointer(position_attrib_location, 3, gl.FLOAT, false, 0, 0)

		const loc1 = gl.getUniformLocation(program, 'projectionMatrix')
		const loc2 = gl.getUniformLocation(program, 'cameraMatrix')

		this.width = window.innerWidth
		this.height = window.innerHeight

		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight

		gl.viewport(0, 0, this.width, this.height)

		this.projectionMatrix = mat4.create()
		this.cameraMatrix = mat4.create()
		this.updateMatrices()

		console.log('this.projectionMatrix', this.projectionMatrix)
		gl.uniformMatrix4fv(loc1, false, this.projectionMatrix)

		console.log('this.cameraMatrix', this.cameraMatrix)
		gl.uniformMatrix4fv(loc2, false, this.cameraMatrix)

		gl.clearColor(0.0, 0.0, 0.0, 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT)
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
	}

	updateMatrices() {
		const fieldOfView = (45 * Math.PI) / 180
		const aspectRatio = this.width / this.height
		const near = 0.1
		const far = 100
		mat4.perspective(this.projectionMatrix, fieldOfView, aspectRatio, near, far)

		const cameraPosition = new Float32Array([0, 0, 5])
		const center = new Float32Array([0, 0, 0])
		const cameraUp = new Float32Array([0, 1, 0])

		// Create a view matrix
		mat4.lookAt(this.cameraMatrix, cameraPosition, center, cameraUp)
	}
}
