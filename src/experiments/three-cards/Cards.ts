import {IRenderer} from 'src/ui/data/RendererFactory'
import * as THREE from 'three'
import {Instanced} from 'src/experiments/three-cards/Instanced'
import {Renderer} from 'src/three/Renderer'

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

		this.instanced = new Instanced(this.renderer)
		const mesh = this.instanced.build()

		const ah = new THREE.AxesHelper()
		this.renderer.scene.add(ah)

		// box for reference
		const box = new THREE.Mesh(
			new THREE.BoxGeometry(4.0, 0.02, 4.0),
			new THREE.MeshStandardMaterial({
				color: 0x111111,
			})
		)
		box.position.y = -0.01
		this.renderer.scene.add(box)

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
