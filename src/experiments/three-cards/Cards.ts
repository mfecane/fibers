import {IRenderer} from 'src/ui/data/RendererFactory'
import * as THREE from 'three'
import {Instanced} from 'src/experiments/three-cards/Instanced'
import {Renderer} from 'src/three/Renderer'
import {TextureLoader} from 'three'
import {ThreeLightsLightScheme} from 'src/Renderer/ThreeLightLightSceme'

export class Cards implements IRenderer {
	animationId: number = -1
	instanced?: Instanced
	renderer?: Renderer

	public constructor() {
		this.animate = this.animate.bind(this)
	}

	create() {
		const div = document.createElement('div')
		div.style.width = window.innerWidth + 'px'
		div.style.height = window.innerHeight + 'px'
		document.body.appendChild(div)

		this.renderer = new Renderer(div)
		new ThreeLightsLightScheme(this.renderer)

		this.instanced = new Instanced(this.renderer)
		const mesh = this.instanced.build()

		const ah = new THREE.AxesHelper()
		this.renderer.scene.add(ah)

		// plane for reference
		const plane = new THREE.Mesh(
			new THREE.PlaneGeometry(4.0, 4.0),
			new THREE.MeshBasicMaterial({
				map: new TextureLoader().load('FurLeopard.jpg'),
			})
		)
		plane.rotateX(Math.PI / 2)
		plane.scale.z = -1
		this.renderer.scene.add(plane)

		this.animate()

		return div
	}

	animate() {
		this.instanced?.update()
		this.renderer?.update()
		this.animationId = requestAnimationFrame(this.animate)
	}

	destroy() {
		if (this.animationId !== -1) {
			cancelAnimationFrame(this.animationId)
		}
	}
}
