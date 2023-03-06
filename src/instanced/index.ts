import {Camera} from 'src/webgl/Camera'
import {OrgitControls} from 'src/webgl/OrbitControls'
import {Renderer} from 'src/webgl/Renderer'

let renderer: Renderer
let orbitControls: OrgitControls
let camera: Camera

export function start() {
	renderer = new Renderer()
	camera = new Camera(renderer)
	orbitControls = new OrgitControls(camera, renderer)
	renderer.camera = camera
	animate()
}

function animate() {
	orbitControls.update()
	camera.update()
	renderer.draw()
	requestAnimationFrame(animate)
}
