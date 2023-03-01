import { Vector3 } from 'three'
import * as THREE from 'three'
import {
  BufferChunk,
  ExtrudedMeshGeneratorOptions,
  FiberCurve,
} from './ExtrudedMeshGenerator'
import { map } from 'src/lib/lib'

export class MeshPrototypeGenerator {
  public prototypes: BufferChunk[] = []

  public constructor(private readonly options: ExtrudedMeshGeneratorOptions) {}

  public createFromCurves(curves: FiberCurve[]) {
    this.prototypes = curves.map((curve) => this.addCurve(curve))
  }

  public addCurve(path: FiberCurve): BufferChunk {
    const vertices: BufferChunk['vertices'] = []
    const uvs: BufferChunk['uvs'] = []
    const uvs2: BufferChunk['uvs2'] = []
    const normals: BufferChunk['normals'] = []
    const indices: BufferChunk['indices'] = []
    const offsets: BufferChunk['offsets'] = []
    const { widthSegments } = this.options

    const angleStep = (2 * Math.PI) / widthSegments
    const LENGTH_SEGMENTS = path.length

    const pathBase = path[0].position

    for (let j = 0; j < LENGTH_SEGMENTS; ++j) {
      let dir1: Vector3 = new THREE.Vector3()
      let dir2: Vector3 = new THREE.Vector3()
      let dir: Vector3 = new THREE.Vector3()
      let point = new THREE.Vector3(
        path[j].position[0],
        path[j].position[1],
        path[j].position[2]
      )
      let radius = path[j].width

      if (j > 0) {
        let prev = new THREE.Vector3(
          path[j - 1].position[0],
          path[j - 1].position[1],
          path[j - 1].position[2]
        )
        dir1 = new THREE.Vector3().subVectors(point, prev)
      }

      if (j < LENGTH_SEGMENTS - 1) {
        let next = new THREE.Vector3(
          path[j + 1].position[0],
          path[j + 1].position[1],
          path[j + 1].position[2]
        )
        dir2 = new THREE.Vector3().subVectors(next, point)
      }

      dir = dir1 || dir2
      if (dir1 && dir2) {
        dir = new THREE.Vector3().addVectors(dir1, dir2)
      }

      let v1 = new Vector3().crossVectors(dir, new Vector3(1, 0, 0)).normalize()
      let v2 = new Vector3().crossVectors(dir, v1).normalize()

      for (let i = 0; i < widthSegments + 1; ++i) {
        let normal = new Vector3().addVectors(
          v1.clone().multiplyScalar(Math.cos(angleStep * i)),
          v2.clone().multiplyScalar(Math.sin(angleStep * i))
        )

        let vert = normal.clone().multiplyScalar(radius).add(point)
        vertices.push([vert.x, vert.y, vert.z])

        const u = map(i / widthSegments, 0, 1, 0.01, 0.99)
        const v = map(j / (LENGTH_SEGMENTS - 1), 0, 1, 0.01, 0.99)
        uvs.push([u, v])

        uvs2.push([pathBase[0] / 6 + 0.5, pathBase[2] / 6 + 0.5])

        normals.push(normal.toArray())
        offsets.push(j / LENGTH_SEGMENTS)
      }
    }

    for (let j = 0; j < LENGTH_SEGMENTS - 1; ++j) {
      for (let i = 0; i < widthSegments; ++i) {
        indices.push(this.getIndiciForLayer(i, j, widthSegments + 1))
      }
    }

    return {
      vertices,
      uvs,
      uvs2,
      normals,
      indices,
      offsets,
    }
  }

  private getIndiciForLayer(
    index: number,
    layer: number,
    numPoints: number
  ): number[] {
    const arr: number[] = []
    let a, b, c

    // tri #1
    a = layer * numPoints + index
    b = layer * numPoints + index + 1
    c = (layer + 1) * numPoints + index

    arr.push(a, b, c)

    // tri #2
    a = layer * numPoints + index + 1
    b = (layer + 1) * numPoints + index + 1
    c = (layer + 1) * numPoints + index

    arr.push(a, b, c)

    return arr
  }
}
