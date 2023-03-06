import {Camera} from './Camera'

export class OrgitControls {
	constructor(private camera: Camera) {}

	update() {
		this.camera.position = [Math.sin(Date.now() / 10000) * 5.0, 1.0, Math.cos(Date.now() / 10000) * 5.0]
	}
}
