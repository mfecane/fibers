import * as THREE from 'three'
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
  public constructor(private readonly options: CurveGeneratorOptions, private three: any) {}

  public generateCurve(enthropy: number): FiberCurve {
    const length = this.options.baseLength * (1.0 + (Math.random() - 0.5) * this.options.lengthVariance)
    const points: FiberCurve = []
    const heightSegments = 3 + Math.floor(enthropy * (this.options.heightSegments - 3))

    const dir = new THREE.Vector3(0, 1, 0)
    const point = new THREE.Vector3(0, 0, 0)
    const change = new THREE.Euler()

    points.push({
      position: this.vector3ToTuple(new THREE.Vector3(0, 0, 0)),
      width: this.getWidth(0, heightSegments),
    })
    for (let i = 1; i < heightSegments - 1; ++i) {
      this.changeDir(dir, change, i === 1 ? 0.1 : 0.4)
      point.add(dir.clone().multiplyScalar(this.getStep(length, heightSegments)))
      const width = this.getWidth(i, heightSegments)
      const position = this.vector3ToTuple(point)
      position[1] = Math.max(position[1], width)
      points.push({ position, width })
    }
    const lastPoint = points[points.length - 1]
    points.push({
      position: lastPoint.position,
      width: 0,
    })

    return points
  }

  private changeDir(dir: Vector3, change: THREE.Euler, weight: number): void {
    const { curvature } = this.options
    {
      change.x = (1 - weight) * change.x + weight * curvature * (Math.random() - 0.5)
      change.y = (1 - weight) * change.y + weight * curvature * (Math.random() - 0.5)
      change.z = (1 - weight) * change.z + weight * curvature * (Math.random() - 0.5)
    }
    dir.applyEuler(change)
  }

  private getWidth(index: number, heightSegments: number): number {
    const parameter = index / heightSegments
    return this.mapclamp(parameter, 0.6, 1.0, this.options.fiberWidth, this.options.fiberWidth * 0.5)
  }

  private getStep(length: number, heightSegments: number): number {
    return length / heightSegments
  }

  private vector3ToTuple(vector3: Vector3): [number, number, number] {
    return [vector3.x, vector3.y, vector3.z]
  }

  private mapclamp(x: number, in_start: number, in_end: number, out_start: number, out_end: number): number {
    x = x === undefined ? in_end : x
    x = x > in_end ? in_end : x
    x = x < in_start ? in_start : x
    return this.map(x, in_start, in_end, out_start, out_end)
  }

  private map(x: number, in_start: number, in_end: number, out_start: number, out_end: number): number {
    return out_start + ((out_end - out_start) / (in_end - in_start)) * (x - in_start)
  }
}
