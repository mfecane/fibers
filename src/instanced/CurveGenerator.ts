import { mapclamp } from 'src/lib/lib'
import { vector3ToTuple } from 'src/lib/three-helpers'
import { Vector3 } from 'three'
import { FiberCurve } from './ExtrudedMeshGenerator'

export type CurveGeneratorOptions = {
  variance: number
  length: number
  segments: number
}

export class CurveGenerator {
  constructor(private readonly options: CurveGeneratorOptions) {}

  public generateCurve(): FiberCurve {
    const points: FiberCurve = []
    let dir = new Vector3(0, 1, 0)
    let point = new Vector3(0, 0, 0)
    for (let i = 0; i < this.options.segments; ++i) {
      points.push({
        position: vector3ToTuple(point),
        width: this.getWidth(i),
      })
      point.add(dir.clone().multiplyScalar(this.getStep(i)))
      this.changeDir(dir)
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
    const cureveParameter = index / this.options.segments
    const reduce = mapclamp(cureveParameter, 0.6, 1.0, 0, 0.008)
    return 0.01 - reduce
  }

  private getStep(idnex: number): number {
    const { length, segments } = this.options
    return mapclamp(
      idnex,
      0,
      segments,
      length / segments,
      length / segments / 2
    )
  }
}
