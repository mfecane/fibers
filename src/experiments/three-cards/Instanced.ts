import * as THREE from 'three'
import {fragmentShaderSource, vertexShaderSource} from 'src/shaders/instance'
import {Renderer} from '../../three/Renderer'
import {PerspectiveCamera, RawShaderMaterial} from 'three'
import {FiberGeometry} from './FiberGeometry'

export class Instanced {
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: PerspectiveCamera

	public constructor(private readonly renderer: Renderer) {
		this.camera = renderer.camera
	}

	public build() {
		const builder = new FiberGeometry()
		const geometry = builder.build()

		const [width, height] = this.getDimensions()
		this.material = new THREE.RawShaderMaterial({
			uniforms: {
				resolution: {value: new THREE.Vector2(width, height)},
				cameraWorldMatrix: {value: this.camera.matrixWorld.clone()},
				cameraWorldMatrixInverse: {value: this.camera.matrixWorldInverse.clone()},
				cameraProjectionMatrix: {value: this.camera.projectionMatrix.clone()},
				cameraProjectionMatrixInverse: {value: this.camera.projectionMatrixInverse.clone()},
				cameraPosition: {value: this.camera.position.clone()},
			},
			vertexShader: vertexShaderSource,
			fragmentShader: fragmentShaderSource,
			side: THREE.DoubleSide,
			transparent: true,
		})
		const mesh = new THREE.Mesh(geometry, this.material)

		this.renderer.scene.add(mesh)
	}

	private getDimensions(): [width: number, height: number] {
		// FUCK THIS SHIT
		const width = this.renderer.width * window.devicePixelRatio
		const height = this.renderer.height * window.devicePixelRatio
		return [width, height]
	}

	public update() {
		this.material.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld.clone()
		this.material.uniforms.cameraWorldMatrixInverse.value = this.camera.matrixWorldInverse.clone()
		this.material.uniforms.cameraProjectionMatrix.value = this.camera.projectionMatrix.clone()
		this.material.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		this.material.uniforms.cameraPosition.value = this.camera.position.clone()
	}
}
