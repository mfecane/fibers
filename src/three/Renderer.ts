import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js'
import * as THREE from 'three'
import {Group, PerspectiveCamera, Scene, WebGLRenderer} from 'three'
import {LightScheme} from '../Renderer/LightScheme'

export class Renderer {
	public readonly scene: THREE.Scene
	public readonly camera: THREE.PerspectiveCamera
	public width = 10
	public height = 10
	public readonly controls: OrbitControls
	public readonly renderer: WebGLRenderer
	private readonly composer: EffectComposer
	private lightScheme?: LightScheme

	public constructor(private readonly root: HTMLElement) {
		this.updateSize = this.updateSize.bind(this)

		this.scene = new Scene()
		const group = new Group()
		this.scene.add(group)

		{
			this.renderer = new WebGLRenderer({antialias: true, alpha: false})
			this.renderer.setPixelRatio(window.devicePixelRatio)
			this.renderer.setSize(this.width, this.height)
			this.renderer.setClearColor(0x999999)
		}

		{
			this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 2000)
			this.camera.position.set(0.5, 0.5, 2)
			this.camera.lookAt(0, 0, 0)
		}

		this.updateSize()

		{
			this.composer = new EffectComposer(this.renderer)
			this.composer.setSize(this.width, this.height)
			this.composer.addPass(new RenderPass(this.scene, this.camera))
		}

		{
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.controls.minDistance = 0.5
			this.controls.maxDistance = 20
			// this.controls.maxPolarAngle = (7.5 * Math.PI) / 16
			this.controls.target.set(0, 0, 0)
			this.controls.enableDamping = true
			this.controls.zoomSpeed = 0.5
			// this.controls.enablePan = false
		}

		window.addEventListener('resize', this.updateSize)

		this.root.appendChild(this.renderer.domElement)
	}

	public addLightScheme(lightScheme: LightScheme) {
		this.lightScheme = lightScheme
	}

	private updateSize() {
		if (!this.root) {
			return
		}
		const rect = this.root.getBoundingClientRect()
		this.width = rect.width
		this.height = rect.height
		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
		this.renderer.setSize(this.width, this.height)
	}

	public update() {
		this.controls?.update()
		this.controls.update()
		this.composer.render()
		this.lightScheme?.update()
	}
}
