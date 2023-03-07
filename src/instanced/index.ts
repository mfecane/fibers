import {Camera} from 'src/webgl/Camera'
import {Mesh} from 'src/webgl/Mesh'
import {OrgitControls} from 'src/webgl/OrbitControls'
import {Renderer} from 'src/webgl/Renderer'

let renderer: Renderer
let orbitControls: OrgitControls
let camera: Camera
let mesh: Mesh

export function start() {
	renderer = new Renderer()
	camera = new Camera(renderer)
	renderer.camera = camera
	orbitControls = new OrgitControls(renderer)
	mesh = new Mesh(renderer)

	animate()
}

function animate() {
	orbitControls.update()
	camera.update()
	renderer.draw()
	mesh.update()
	requestAnimationFrame(animate)
}
