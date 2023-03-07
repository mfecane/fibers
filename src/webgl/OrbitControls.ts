import {Camera} from './Camera'
import {Renderer} from './Renderer'

type MousePosition = [number, number]

export class OrgitControls {
	leftPressed = false

	lastPos: MousePosition = [0, 0]
	private distance = 20
	private clonePosition: number[] = [0, 0, this.distance]
	private camera

	private theta: number = Math.PI / 4
	private phi: number = 0

	private readonly EPSILON = 0.0005
	private minTheta = (2 * Math.PI) / 16
	private maxTheta = (7 * Math.PI) / 16

	public constructor(private renderer: Renderer) {
		this.camera = this.renderer.camera
		this.handleClick = this.handleClick.bind(this)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		this.handleMousUp = this.handleMousUp.bind(this)
		renderer.canvas.addEventListener('mousedown', this.handleClick)
		renderer.canvas.addEventListener('mousemove', this.handleMouseMove)
		renderer.canvas.addEventListener('mouseup', this.handleMousUp)
	}

	update() {
		if (!this.camera) {
			throw 'No camera'
		}
		this.clonePosition = [
			Math.sin(this.theta) * Math.sin(this.phi) * this.distance,
			Math.cos(this.theta) * this.distance,
			Math.sin(this.theta) * Math.cos(this.phi) * this.distance,
		]
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
			const mousePos: MousePosition = [e.x, e.y]
			const deltaX = this.lastPos[0] - mousePos[0]
			const deltaY = this.lastPos[1] - mousePos[1]
			this.phi += deltaX / 100
			this.theta += deltaY / 100
			if (this.theta < this.minTheta) {
				this.theta = this.minTheta
			} else if (this.theta > this.maxTheta) {
				this.theta = this.maxTheta
			}
			this.lastPos = mousePos
		}
	}

	handleMousUp() {
		this.leftPressed = false
	}
}
