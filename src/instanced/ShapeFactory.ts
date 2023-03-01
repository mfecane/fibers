import * as THREE from 'three'
import { Vector3 } from 'three'
import { MeshGeneratorShape, ShapeType } from './ExtrudedMeshGenerator'

export type ShapeFactoryOptions = {
  width?: number
  height?: number
  radius?: number
  shapeType: ShapeType
  cellSize: number
}

export class ShapeFactory {
  public constructor(private readonly options: ShapeFactoryOptions) {}

  public generateShape(type: ShapeType) {
    switch (type) {
      case ShapeType.Round:
        return this.generateRoundShape()
      case ShapeType.Rect:
        return this.generateRectShape()
    }
  }

  private generateRectShape(): MeshGeneratorShape {
    const { width = 4, height = 3, cellSize = 0.02 } = this.options
    const origins: THREE.Vector3[] = []
    for (let x = -width / 2; x < width / 2; x += cellSize) {
      for (let y = -height / 2; y < height / 2; y += cellSize) {
        origins.push(this.randomShift(new THREE.Vector3(x, 0, y)))
      }
    }
    return origins
  }

  private generateRoundShape(): MeshGeneratorShape {
    const { radius = 1, cellSize = 0.02 } = this.options
    const origins: THREE.Vector3[] = []
    // polar coordinates
    for (let r = 0; r <= radius; r += cellSize) {
      for (let a = 0; a <= Math.PI * 2 * r; a += cellSize) {
        origins.push(
          this.randomShift(
            new Vector3(r * Math.cos(a / r), 0, r * Math.sin(a / r))
          )
        )
      }
    }

    return origins
  }

  private randomShift(position: Vector3) {
    const { cellSize = 0.02 } = this.options
    position.x += cellSize * 0.8 * Math.random()
    position.z += cellSize * 0.8 * Math.random()
    return position
  }
}
