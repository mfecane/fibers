import {Camera} from './Camera'
import {Renderer} from './Renderer'

type MousePosition = [number, number]

export class OrgitControlsRM {
	leftPressed = false

	lastPos: MousePosition = [0, 0]
	private distance = 20

	public theta: number = Math.PI / 4
	public phi: number = 0

	private readonly EPSILON = 0.0005
	private minTheta = (2 * Math.PI) / 16
	private maxTheta = (14 * Math.PI) / 16

	public constructor(private renderer: Renderer) {
		this.handleClick = this.handleClick.bind(this)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		this.handleMousUp = this.handleMousUp.bind(this)
		this.handleWheel = this.handleWheel.bind(this)
		renderer.canvas.addEventListener('mousedown', this.handleClick)
		renderer.canvas.addEventListener('mousemove', this.handleMouseMove)
		renderer.canvas.addEventListener('mouseup', this.handleMousUp)
		renderer.canvas.addEventListener('wheel', this.handleWheel)
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

	handleWheel(e: WheelEvent) {
		e.preventDefault()
		const delta = e.deltaY
		if (delta > 0) {
			this.distance *= 1.02
		} else {
			this.distance *= 0.98
		}
	}
}
