import {Camera} from './Camera'
import {Renderer} from './Renderer'

type MousePosition = [number, number]

export class OrgitControls {
	leftPressed = false

	lastPos: MousePosition = [0, 0]
	clonePosition: number[] = [0, 0, 5]

	constructor(private camera: Camera, private renderer: Renderer) {
		this.handleClick = this.handleClick.bind(this)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		this.handleMousUp = this.handleMousUp.bind(this)
		renderer.canvas.addEventListener('mousedown', this.handleClick)
		renderer.canvas.addEventListener('mousemove', this.handleMouseMove)
		renderer.canvas.addEventListener('mouseup', this.handleMousUp)
	}

	update() {
		this.camera.position = this.clonePosition
	}

	handleClick(e: MouseEvent) {
		if (e.button === 0) {
			this.leftPressed = true
			this.lastPos = [e.x, e.y]
		}
	}

	handleMouseMove(e: MouseEvent) {
		if (this.leftPressed) {
			const mousePos = [e.x, e.y]
			const diffX = this.lastPos[1] - mousePos[0]
			this.clonePosition = [Math.sin(diffX / 100) * 5.0, 1.0, Math.cos(diffX / 100) * 5.0]
			// this.lastPos = mousePos
		}
	}

	handleMousUp() {
		this.leftPressed = false
	}
}
