import {Renderer} from 'src/fibers/Renderer'
import {ThreeLightsLightScheme} from './ThreeLightLightSceme'
import * as THREE from 'three'
import {Raymarcher} from './Raymarcher'

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

	animate()
}

function animate() {
	raymarcher.update()
	renderer.update()
	requestAnimationFrame(animate)
}
