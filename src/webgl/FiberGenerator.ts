export class FiberGenerator {
	public positions: number[][] = []
	public indices: number[][] = []

	public segments = 4
	private length = 3

	constructor() {
		const width = this.getWidth(0)
		this.positions = [
			[-width, 0, 0, 0],
			[width, 0, 1, 0],
		]
		for (let i = 1; i < this.segments; ++i) {
			this.addlayer(i)
		}
	}

	private addlayer(segment: number) {
		const start = this.positions.length
		const y = (this.length / this.segments) * segment
		const v = segment / this.segments
		const width = this.getWidth(segment)
		this.positions.push(
			...[
				[-width, y, 0, v],
				[width, y, 1, v],
			]
		)
		this.indices.push(
			...[
				[start - 2, start - 1, start],
				[start, start + 1, start - 1],
			]
		)
	}

	public getBuffer() {
		console.log('this.positions', this.positions)
		return {positions: this.positions.flat(), indices: this.indices.flat()}
	}

	private getWidth(segment: number) {
		return 0.12 - (segment / this.segments) * 0.06
	}
}
