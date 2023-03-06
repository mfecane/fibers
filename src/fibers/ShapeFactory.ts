import {Vector3} from 'three'
import * as THREE from 'three'
import {MeshGeneratorShape, ShapeType} from './ExtrudedMeshGenerator'

export type ShapeFactoryOptions = {
	width?: number
	height?: number
	radius?: number
	shapeType: ShapeType
	cellSize: number
}

export class ShapeFactory {
	public constructor(private readonly options: ShapeFactoryOptions) {}

	public generateShape(type: ShapeType): MeshGeneratorShape[] {
		switch (type) {
			case ShapeType.Round:
				return this.generateRoundShape()
			case ShapeType.Rect:
				return this.generateRectShape()
		}
	}

	private generateRectShape(): MeshGeneratorShape[] {
		const {width = 4, height = 3, cellSize = 0.02} = this.options
		const origins: MeshGeneratorShape[] = []
		for (let x = -width / 2; x < width / 2; x += cellSize) {
			for (let y = -height / 2; y < height / 2; y += cellSize) {
				const origin = this.randomShift(new THREE.Vector3(x, 0, y))
				const uv = new THREE.Vector2(x / width + 0.5, y / width + 0.5)
				origins.push({origin, uv})
			}
		}
		return origins
	}

	private generateRoundShape(): MeshGeneratorShape[] {
		const {radius = 1, cellSize = 0.02} = this.options
		const origins: MeshGeneratorShape[] = []
		// polar coordinates
		for (let r = 0; r <= radius; r += cellSize) {
			if (r === 0) {
				const x = r * 0
				const y = r * 0
				const origin = this.randomShift(new Vector3(x, 0, y))
				const uv = new THREE.Vector2(x / radius / 2 + 0.5, y / radius / 2 + 0.5)
				origins.push({origin, uv})
				continue
			}
			for (let a = 0; a <= Math.PI * 2 * r; a += cellSize) {
				const x = r * Math.cos(a / r)
				const y = r * Math.sin(a / r)
				const origin = this.randomShift(new Vector3(x, 0, y))
				const uv = new THREE.Vector2(x / radius / 2 + 0.5, y / radius / 2 + 0.5)
				origins.push({origin, uv})
			}
		}

		return origins
	}

	private randomShift(position: Vector3): Vector3 {
		const {cellSize = 0.02} = this.options
		position.x += cellSize * 0.8 * Math.random()
		position.z += cellSize * 0.8 * Math.random()
		return position
	}
}
