import {Camera} from 'src/webgl/Camera'
import {Renderer} from 'src/webgl/Renderer'

let renderer: Renderer

export function start() {
	renderer = new Renderer()
	const camera = new Camera(renderer)
	renderer.camera = camera

	animate()
}

function animate() {
	renderer.draw()
	requestAnimationFrame(animate)
}
