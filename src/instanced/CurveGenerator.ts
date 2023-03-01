import { mapclamp } from 'src/lib/lib'
import { vector3ToTuple } from 'src/lib/three-helpers'
import { Euler, Quaternion, Vector3 } from 'three'

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
    let point = new Vector3(0, 0, 0)
    let change = new Euler()

    points.push({ position: vector3ToTuple(point), width: this.getWidth(0) })
    for (let i = 1; i < this.options.heightSegments - 1; ++i) {
      point.add(dir.clone().multiplyScalar(this.getStep(length)))
      this.changeDir(dir, change)
      const width = i === this.options.heightSegments - 1 ? 0 : this.getWidth(i)
      const position = vector3ToTuple(point)
      position[1] = Math.max(position[1], width)
      points.push({ position, width })
    }
    points.push(points[points.length - 1])
    return points
  }

  private changeDir(dir: Vector3, change: THREE.Euler): void {
    const { curvature } = this.options
    const weight = 0.4
    // prettier-ignore
    {
      change.x = (1 - weight) * change.x + weight * curvature * (Math.random() - 0.5)
      change.y = (1 - weight) * change.y + weight * curvature * (Math.random() - 0.5)
      change.z = (1 - weight) * change.z + weight * curvature * (Math.random() - 0.5)
    }
    dir.applyEuler(change)
  }

  private getWidth(index: number): number {
    const parameter = index / this.options.heightSegments
    return mapclamp(parameter, 0.6, 1.0, this.options.fiberWidth, 0.01)
  }

  private getStep(length: number): number {
    const { heightSegments } = this.options
    return length / heightSegments
  }
}
