import {Mesh, PerspectiveCamera, RawShaderMaterial, TextureLoader} from 'three'
import * as THREE from 'three'
import {fragmentShaderSource, vertexShaderSource} from 'src/shaders/raymarcher'
import {Renderer} from './Renderer'

export class Raymarcher {
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: PerspectiveCamera

	public constructor(private readonly renderer: Renderer) {
		this.camera = renderer.camera
	}

	public build(): Mesh {
		const bufferGeometry = new THREE.BufferGeometry()
		// prettier-ignore
		bufferGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
			-1, -1,  0,
			 1, -1,  0,
			-1,  1,  0,
			 1,  1,  0,
		], 3))

		// prettier-ignore
		bufferGeometry.setIndex([
			0, 1, 2,
			2, 3, 1
		])

		const [width, height] = this.getDimensions()

		const texture = new TextureLoader().load('texture_5.jpg')
		texture.wrapS = THREE.RepeatWrapping
		texture.wrapT = THREE.RepeatWrapping

		this.material = new THREE.RawShaderMaterial({
			uniforms: {
				textureMap: {value: texture},
				resolution: {value: new THREE.Vector2(width, height)},
				theta: {
					value: this.renderer.controls.getPolarAngle(),
				},
				phi: {
					value: this.renderer.controls.getAzimuthalAngle(),
				},
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
		const mesh = new Mesh(bufferGeometry, this.material)
		return mesh
	}

	private getDimensions(): [width: number, height: number] {
		// FUCK THIS SHIT
		const width = this.renderer.width * window.devicePixelRatio
		const height = this.renderer.height * window.devicePixelRatio
		return [width, height]
	}

	update() {
		this.material.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld.clone()
		this.material.uniforms.cameraWorldMatrixInverse.value = this.camera.matrixWorldInverse.clone()
		this.material.uniforms.cameraProjectionMatrix.value = this.camera.projectionMatrix.clone()
		this.material.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		this.material.uniforms.cameraPosition.value = this.camera.position.clone()
	}
}
