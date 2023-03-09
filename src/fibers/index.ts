import {Renderer} from '../Renderer/Renderer'
import {ThreeLightsLightScheme} from '../Renderer/ThreeLightLightSceme'
import * as THREE from 'three'
import {Raymarcher} from '../Renderer/Raymarcher'

let renderer: Renderer
let raymarcher: Raymarcher

export const exec = () => {
	const div = document.createElement('div')
	div.style.width = window.innerWidth + 'px'
	div.style.height = window.innerHeight + 'px'
	document.body.appendChild(div)

	renderer = new Renderer(div)
	new ThreeLightsLightScheme(renderer)

	raymarcher = new Raymarcher(renderer)
	const mesh = raymarcher.build()
	renderer.scene.add(mesh)

	const ah = new THREE.AxesHelper()
	renderer.scene.add(ah)

	// box for reference
	const box = new THREE.Mesh(
		new THREE.BoxGeometry(2.0, 0.2, 4.0),
		new THREE.MeshStandardMaterial({
			color: 0x333333,
		})
	)
	box.position.y = -0.3
	renderer.scene.add(box)

	animate()
}

function animate() {
	raymarcher.update()
	renderer.update()
	requestAnimationFrame(animate)
}
