import * as THREE from 'three'
import { Vector3 } from 'three'
import { MeshGeneratorShape, ShapeType } from './ExtrudedMeshGenerator'

export type ShapeFactoryOptions = {
  minx?: number
  miny?: number
  maxx?: number
  maxy?: number
  sizex?: number
  sizey?: number
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
    const {
      minx = -1,
      miny = -1,
      maxx = 1,
      maxy = 1,
      sizex = 0.02,
      sizey = 0.02,
    } = this.options
    const origins: THREE.Vector3[] = []
    for (let x = minx; x < maxx; x += sizex) {
      for (let y = miny; y < maxy; y += sizey) {
        let pointx = x + (Math.random() - 0.5) * sizex * 0.5
        let pointy = y + (Math.random() - 0.5) * sizey * 0.5
        pointx = pointx < minx ? minx : pointx > maxx ? maxx : pointx
        pointy = pointy < miny ? miny : pointy > maxy ? maxy : pointy
        origins.push(new THREE.Vector3(pointx, 0, pointy))
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
