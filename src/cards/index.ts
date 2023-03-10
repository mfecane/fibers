import * as THREE from 'three'
import {Renderer} from '../Renderer/Renderer'
import {Instanced} from 'src/Renderer/Instanced'

let renderer: Renderer
let instanced: Instanced

export const exec = () => {
	const div = document.createElement('div')
	div.style.width = window.innerWidth + 'px'
	div.style.height = window.innerHeight + 'px'
	document.body.appendChild(div)

	renderer = new Renderer(div)

	instanced = new Instanced(renderer)
	const mesh = instanced.build()

	const ah = new THREE.AxesHelper()
	renderer.scene.add(ah)

	// box for reference
	const box = new THREE.Mesh(
		new THREE.BoxGeometry(4.0, 0.1, 4.0),
		new THREE.MeshStandardMaterial({
			color: 0x111111,
		})
	)
	box.position.y = -0.1
	renderer.scene.add(box)

	animate()
}

function animate() {
	instanced.update()
	renderer.update()
	requestAnimationFrame(animate)
}
