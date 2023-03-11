import * as THREE from 'three'
import {Renderer} from '../../three/Renderer'
import {PerspectiveCamera, TextureLoader} from 'three'
import {FiberGeometry} from './FiberGeometry'

export type OriginPoint = [x: number, y: number, angle: number, u: number, v: number]

export class Instanced {
	private material: THREE.Material = new THREE.MeshStandardMaterial()
	private size = 3.95
	private fiberSize = 0.05
	private density = 5
	private count = 0

	public constructor(private readonly renderer: Renderer) {}

	private makeOrigins() {
		const minx = -this.size / 2
		const maxx = this.size / 2
		const miny = -this.size / 2
		const maxy = this.size / 2
		const step = this.fiberSize / this.density

		const origins: OriginPoint[] = []
		for (let x = minx; x < maxx; x += step) {
			for (let y = miny; y < maxy; y += step) {
				origins.push([
					x + (Math.random() - 0.5) * step,
					y + (Math.random() - 0.5) * step,
					Math.random() * Math.PI * 2,
					(x - minx) / (maxx - minx),
					(y - miny) / (maxy - miny),
				])
			}
		}
		this.count = origins.length
		return origins
	}

	public build() {
		const builder = new FiberGeometry()
		const geometry = builder.build()

		const textureLoader = new TextureLoader()
		const texture = textureLoader.load('FurFin.png')
		texture.premultiplyAlpha = true

		this.material = new THREE.MeshBasicMaterial({
			color: 0xff00ff,
			alphaMap: texture,
			side: THREE.DoubleSide,
			transparent: true,
			depthWrite: true,
			depthTest: false,
			alphaTest: 0.1,
		})

		this.material.onBeforeCompile = (shader) => {
			console.log('THREE.ShaderChunk', THREE.ShaderChunk)
			console.log('shader', shader.vertexShader)
			console.log('shader', shader.fragmentShader)
		}

		const origins = this.makeOrigins()
		// const geometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5)

		const mesh = new THREE.InstancedMesh(geometry, this.material, this.count)

		const matrix = new THREE.Matrix4()

		for (let i = 0; i < this.count; i++) {
			const x = origins[i][0]
			const z = origins[i][1]
			const theta = origins[i][2]
			const u = origins[i][3]
			const v = origins[i][4]

			const angle = theta
			matrix.makeRotationY(angle)

			const translation = new THREE.Vector3(x, 0, z)
			matrix.setPosition(translation)

			const scale = new THREE.Vector3(1, 1 + Math.random() * 0.5, 1)
			matrix.scale(scale)

			mesh.setMatrixAt(i, matrix)
			mesh.setColorAt(i, new THREE.Color(Math.random(), Math.random(), Math.random()))
		}

		this.renderer.scene.add(mesh)
	}

	public update() {}
}
