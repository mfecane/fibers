import {Optional} from 'typescript-optional'
import {fragmentShaderSource, vertexShaderSource} from './shaders'
import {Renderer} from './Renderer'
import {mat4} from 'gl-matrix'
import {OrgitControlsRM} from './OrgitControlsRM'

export class Raymarch {
	private projectionLocation: WebGLUniformLocation
	private phiLocation: WebGLUniformLocation
	private thetaLocation: WebGLUniformLocation

	constructor(private renderer: Renderer, private orgitControlsRM: OrgitControlsRM) {
		const gl = this.renderer.context

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

		// BUFFERS
		{
			const vertexBuffer = gl.createBuffer()
			gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
			// prettier-ignore
			const positions = [
				0, 0,
				1, 0,
				0, 1,
				1, 1
			]
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

			const indexBuffer = gl.createBuffer()
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
			// prettier-ignore
			const indices = [
				0, 1, 3,
				2, 3, 0
			]
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

			const positionAttributeLocation = gl.getAttribLocation(program, 'aPosition')
			gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 8, 0)
			gl.enableVertexAttribArray(positionAttributeLocation)

			this.projectionLocation = Optional.ofNullable(gl.getUniformLocation(program, 'projectionMatrix')).orElseThrow(
				() => 'No location'
			)
			this.phiLocation = Optional.ofNullable(gl.getUniformLocation(program, 'phi')).orElseThrow(() => 'No location')
			this.thetaLocation = Optional.ofNullable(gl.getUniformLocation(program, 'theta')).orElseThrow(() => 'No location')

			const matrix = mat4.create()
			mat4.ortho(matrix, 0, 1, 0, this.renderer.height / this.renderer.width, 0, 1)
			gl.uniformMatrix4fv(this.projectionLocation, false, matrix)
		}
	}

	public update() {
		const gl = this.renderer.context
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
		gl.uniform1f(this.phiLocation, this.orgitControlsRM.phi)
		gl.uniform1f(this.thetaLocation, this.orgitControlsRM.theta)
	}
}
