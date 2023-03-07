import {Mesh, OrthographicCamera, PerspectiveCamera, PlaneGeometry, RawShaderMaterial} from 'three'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {fragmentShaderSource, vertexShaderSource} from 'src/shaders/raymarcher'

export class Raymarcher {
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: OrthographicCamera

	public constructor(private orbitControls: OrbitControls) {
		this.camera = new THREE.OrthographicCamera(0, 1, 0, 1, 1, 1000)
	}

	public build(): Mesh {
		const bufferGeometry = new THREE.BufferGeometry()
		// prettier-ignore
		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
			-1, -1, 0,
			1, -1, 0,
			-1, 1, 0,
			1, 1, 0,
		], 3))

		// prettier-ignore
		bufferGeometry.setIndex([
			0, 1, 2,
			2, 3, 1
		])

		this.material = new THREE.RawShaderMaterial({
			uniforms: {
				theta: {
					value: this.orbitControls.getPolarAngle(),
				},
				phi: {
					value: this.orbitControls.getAzimuthalAngle(),
				},
				projectionMatrix: {value: this.camera.projectionMatrix.clone()},
			},
			vertexShader: vertexShaderSource,
			fragmentShader: fragmentShaderSource,
			side: THREE.DoubleSide,
		})

		return new Mesh(bufferGeometry, this.material)
	}

	update() {
		this.material.uniforms.projectionMatrix.value.copy(this.camera.projectionMatrix)
		this.material.uniforms.theta.value = this.orbitControls.getPolarAngle()
		this.material.uniforms.phi.value = this.orbitControls.getAzimuthalAngle()
	}
}
