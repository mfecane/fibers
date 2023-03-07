import {Camera} from 'src/webgl/Camera'
import {Raymarch} from 'src/webgl/Raymarch'
import {Renderer} from 'src/webgl/Renderer'
import {OrgitControlsRM} from 'src/webgl/OrgitControlsRM'

let renderer: Renderer
let camera: Camera
let raymarch: Raymarch
let orbitControls: OrgitControlsRM

export function start() {
	renderer = new Renderer()
	orbitControls = new OrgitControlsRM(renderer)
	raymarch = new Raymarch(renderer, orbitControls)

	animate()
}

function animate() {
	renderer.draw()
	raymarch.update()
	requestAnimationFrame(animate)
}
