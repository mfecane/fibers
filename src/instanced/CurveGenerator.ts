import { mapclamp } from 'src/lib/lib'
import { vector3ToTuple } from 'src/lib/three-helpers'
import { Vector3 } from 'three'
import { FiberCurve } from './ExtrudedMeshGenerator'

export type CurveGeneratorOptions = {
  variance: number
  length: number
  heightSegments: number
  width: number
}

export class CurveGenerator {
  constructor(private readonly options: CurveGeneratorOptions) {}

  public generateCurve(): FiberCurve {
    const points: FiberCurve = []
    let dir = new Vector3(0, 1, 0)
    let point = new Vector3(0, 0, 0)
    points.push({ position: vector3ToTuple(point), width: this.getWidth(0) })
    for (let i = 1; i < this.options.heightSegments; ++i) {
      point.add(dir.clone().multiplyScalar(this.getStep(i)))
      this.changeDir(dir)
      const width = i === this.options.heightSegments - 1 ? 0 : this.getWidth(i)
      const position = vector3ToTuple(point)
      position[1] = Math.max(position[1], width)
      points.push({ position, width })
    }
    return points
  }

  private changeDir(dir: Vector3): void {
    const { variance } = this.options
    dir.normalize()
    dir.applyAxisAngle(new Vector3(1, 0, 0), variance * (Math.random() - 0.5))
    dir.applyAxisAngle(new Vector3(0, 0, 1), variance * (Math.random() - 0.5))
  }

  private getWidth(index: number): number {
    const parameter = index / this.options.heightSegments
    return mapclamp(parameter, 0.6, 1.0, this.options.width, 0.01)
  }

  private getStep(index: number): number {
    const { length, heightSegments } = this.options
    return mapclamp(
      index,
      0,
      heightSegments,
      length / heightSegments,
      length / heightSegments / 2
    )
  }
}
