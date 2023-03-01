import { mapclamp } from 'src/lib/lib'
import { vector3ToTuple } from 'src/lib/three-helpers'
import { Vector2, Vector3 } from 'three'

export type CurveGeneratorOptions = {
  curvature: number
  baseLength: number
  lengthVariance: number
  heightSegments: number
  fiberWidth: number
}

export type FiberPoint = {
  position: [x: number, y: number, z: number]
  width: number
}

export type FiberCurve = FiberPoint[]

export class CurveGenerator {
  constructor(private readonly options: CurveGeneratorOptions) {}

  public generateCurve(): FiberCurve {
    const length =
      this.options.baseLength *
      (1.0 + (Math.random() - 0.5) * this.options.lengthVariance)
    const points: FiberCurve = []

    let dir = new Vector3(0, 1, 0)
    let dirChange = new Vector2(0, 0)
    let point = new Vector3(0, 0, 0)
    let angle1 = 0
    let angle2 = 0

    points.push({ position: vector3ToTuple(point), width: this.getWidth(0) })
    for (let i = 1; i < this.options.heightSegments - 1; ++i) {
      point.add(dir.clone().multiplyScalar(this.getStep(length, i)))
      this.changeDir(dir, angle1, angle2)
      const width = i === this.options.heightSegments - 1 ? 0 : this.getWidth(i)
      const position = vector3ToTuple(point)
      position[1] = Math.max(position[1], width)
      points.push({ position, width })
    }
    points.push(points[points.length - 1])
    return points
  }

  private changeDir(dir: Vector3, angle1: number, angle2: number): void {
    const { curvature } = this.options
    angle1 += angle1 * 0.5 + curvature * (Math.random() - 0.5)
    angle2 += angle2 * 0.5 + curvature * (Math.random() - 0.5)
    const axis = new Vector3(Math.cos(angle1), 0, Math.sin(angle1))
    dir.applyAxisAngle(axis, angle2).normalize()
  }

  private getWidth(index: number): number {
    const parameter = index / this.options.heightSegments
    return mapclamp(parameter, 0.6, 1.0, this.options.fiberWidth, 0.01)
  }

  private getStep(length: number, index: number): number {
    const { heightSegments } = this.options
    return mapclamp(
      index,
      0,
      heightSegments,
      length / heightSegments,
      (length / heightSegments) * 0.7
    )
  }
}
