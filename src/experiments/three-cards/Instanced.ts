import * as THREE from 'three'
import {fragmentShaderSource, vertexShaderSource} from './shaders/instance'
import {Renderer} from '../../three/Renderer'
import {PerspectiveCamera, RawShaderMaterial, TextureLoader} from 'three'
import {FiberGeometry} from './FiberGeometry'

export class Instanced {
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: PerspectiveCamera
	private builder?: FiberGeometry

	public constructor(private readonly renderer: Renderer) {
		this.camera = renderer.camera
	}

	public build() {
		this.builder = new FiberGeometry(this.camera)
		const geometry = this.builder.build()

		const [width, height] = this.getDimensions()

		const textureLoader = new TextureLoader()
		const texture = textureLoader.load('fibers.png')
		texture.premultiplyAlpha = true
		texture.magFilter = THREE.LinearFilter
		texture.minFilter = THREE.LinearFilter
		const texture2 = textureLoader.load('texture_5.jpg')
		const texture3 = textureLoader.load('fibers2.png')

		this.material = new THREE.RawShaderMaterial({
			uniforms: {
				textureMap: {value: texture},
				textureMap2: {value: texture2},
				textureMap3: {value: texture3},
				resolution: {value: new THREE.Vector2(width, height)},
				cameraWorldMatrix: {value: this.camera.matrixWorld.clone()},
				cameraWorldMatrixInverse: {value: this.camera.matrixWorldInverse.clone()},
				cameraProjectionMatrix: {value: this.camera.projectionMatrix.clone()},
				cameraProjectionMatrixInverse: {value: this.camera.projectionMatrixInverse.clone()},
				cameraPosition: {value: this.camera.position.clone()},
				logDepthBufFC: {value: 0},
			},
			vertexShader: vertexShaderSource,
			fragmentShader: fragmentShaderSource,
			side: THREE.DoubleSide,
			transparent: true,
			alphaTest: 0.95,
			blendEquation: THREE.AddEquation,
			depthWrite: false,
			depthTest: true,
		})

		// TODO seems like something is wrong with sorting
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
		this.builder!.update()

		this.material.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld.clone()
		this.material.uniforms.cameraWorldMatrixInverse.value = this.camera.matrixWorldInverse.clone()
		this.material.uniforms.cameraProjectionMatrix.value = this.camera.projectionMatrix.clone()
		this.material.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		this.material.uniforms.cameraPosition.value = this.camera.position.clone()
		this.material.uniforms.logDepthBufFC.value = 2.0 / (Math.log(this.camera.far + 1.0) / Math.LN2)
	}
}
