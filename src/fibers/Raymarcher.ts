import {Mesh, OrthographicCamera, PerspectiveCamera, PlaneGeometry, RawShaderMaterial} from 'three'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {fragmentShaderSource, vertexShaderSource} from 'src/shaders/raymarcher'
import {Renderer} from './Renderer'

export class Raymarcher {
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: PerspectiveCamera

	public constructor(private readonly renderer: Renderer) {
		this.camera = renderer.perspCamera
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
				resolution: {value: new THREE.Vector2(this.renderer.width, this.renderer.height)},
				theta: {
					value: this.renderer.controls.getPolarAngle(),
				},
				phi: {
					value: this.renderer.controls.getAzimuthalAngle(),
				},
				projectionMatrix: {value: this.camera.projectionMatrix.clone()},
				cameraWorldMatrix: {value: this.camera.matrixWorld.clone()},
				cameraWorldMatrixInverse: {value: this.camera.matrixWorldInverse.clone()},
				cameraProjectionMatrix: {value: this.camera.projectionMatrix.clone()},
				cameraProjectionMatrixInverse: {value: this.camera.projectionMatrixInverse.clone()},
				cameraPosition: {value: this.camera.position.clone()},
			},
			vertexShader: vertexShaderSource,
			fragmentShader: fragmentShaderSource,
			side: THREE.DoubleSide,
		})

		return new Mesh(bufferGeometry, this.material)
	}

	update() {
		this.material.uniforms.resolution.value = new THREE.Vector2(this.renderer.width, this.renderer.height)
		this.material.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld.clone()
		this.material.uniforms.cameraWorldMatrixInverse.value = this.camera.matrixWorldInverse.clone()
		this.material.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		this.material.uniforms.cameraPosition.value = this.camera.position.clone()
		this.material.uniforms.cameraProjectionMatrix.value = this.camera.projectionMatrix.clone()
	}
}
