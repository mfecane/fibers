import * as THREE from 'three'
import {fragmentShaderSource, vertexShaderSource} from 'src/shaders/instance'
import {Renderer} from '../../three/Renderer'
import {PerspectiveCamera, RawShaderMaterial} from 'three'
import {FiberGenerator} from './FiberGenerator'

export type OriginPoint = [x: number, y: number, angle: number]

export class Instanced {
	private count = 0
	private material: RawShaderMaterial = new RawShaderMaterial()
	private camera: PerspectiveCamera

	public constructor(private readonly renderer: Renderer) {
		this.camera = renderer.camera
	}

	private makePositions() {
		const minx = -2
		const maxx = 2
		const miny = -2
		const maxy = 2
		const step = 0.05

		const origins: OriginPoint[] = []
		for (let x = minx; x < maxx; x += step) {
			for (let y = miny; y < maxy; y += step) {
				origins.push([
					x + (Math.random() - 0.5) * step,
					y + (Math.random() - 0.5) * step,
					Math.random() * Math.PI * 2,
				])
			}
		}
		this.count = origins.length
		return origins
	}

	public build() {
		const matrix = new THREE.Matrix4()
		const origins = this.makePositions()
		const count = origins.length

		const builder = new FiberGenerator()
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
		const mesh = new THREE.InstancedMesh(geometry, this.material, count)
		for (let i = 0; i < count; i++) {
			const x = origins[i][0]
			const z = origins[i][1]
			const theta = origins[i][2]
			// prettier-ignore
			matrix.set(
				Math.cos(theta),   0,   Math.sin(theta),    -x,
				0,            	   1,   0,                   0,
				-Math.sin(theta),  0,   Math.cos(theta),    -z,
				0,                 0,   0,                   1
			)
			mesh.setMatrixAt(i, matrix)
		}
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
