import {
  Object3D,
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  PlaneGeometry,
  Vector3,
  Vector2,
  BufferGeometry,
  Material,
  MeshLambertMaterialParameters,
  MeshBasicMaterialParameters,
  Matrix4,
  MeshPhysicalMaterial,
  MeshPhysicalMaterialParameters,
  Box3,
  Euler,
  Float32BufferAttribute,
  RawShaderMaterial,
  TextureLoader,
  ShaderMaterialParameters,
  ShaderMaterial,
} from 'three'
import { LineMaterialParameters } from 'three/examples/jsm/lines/LineMaterial'

export class ThreeJsOld {
  public readonly DoubleSide: any
  public readonly RepeatWrapping: number

  public constructor(private readonly three?: any) {
    this.RepeatWrapping = this.three.RepeatWrapping
    this.DoubleSide = this.three.DoubleSide
  }

  public Object3D(): Object3D {
    return new this.three.Object3D()
  }

  public Color(r: number, g?: number, b?: number): Color {
    if (r !== undefined && g === undefined && b === undefined) {
      return new this.three.Color(r)
    }
    return new this.three.Color(r, g, b)
  }

  public Vector3(x: number = 0, y: number = 0, z: number = 0): Vector3 {
    return new this.three.Vector3(x, y, z)
  }

  public Vector3fromTuple([x, y, z]: [number, number, number]): Vector3 {
    return new this.three.Vector3(x, y, z)
  }

  public Euler(x: number = 0, y: number = 0, z: number = 0): Euler {
    return new this.three.Euler(x, y, z)
  }

  public Vector2(x: number = 0, y: number = 0): Vector2 {
    return new this.three.Vector2(x, y)
  }

  public Mesh(geometry: BufferGeometry, material: Material): Mesh {
    return new this.three.Mesh(geometry, material)
  }

  public Line(geometry: BufferGeometry, material: Material): Mesh {
    return new this.three.Line(geometry, material)
  }

  public Matrix4(): Matrix4 {
    return new this.three.Matrix4()
  }

  public PlaneGeometry(
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ): PlaneGeometry {
    return new this.three.PlaneGeometry(width, height, widthSegments, heightSegments)
  }

  public MeshLambertMaterial(parameters?: MeshLambertMaterialParameters): MeshLambertMaterial {
    return new this.three.MeshLambertMaterial(parameters)
  }

  public MeshBasicMaterial(parameters?: MeshBasicMaterialParameters): MeshBasicMaterial {
    return new this.three.MeshBasicMaterial(parameters)
  }

  public LineBasicMaterial(parameters?: LineMaterialParameters): MeshBasicMaterial {
    return new this.three.LineBasicMaterial(parameters)
  }

  public MeshPhysicalMaterial(parameters?: MeshPhysicalMaterialParameters): MeshPhysicalMaterial {
    return new this.three.MeshPhysicalMaterial(parameters)
  }

  public RawShaderMaterial(parameters?: ShaderMaterialParameters): RawShaderMaterial {
    return new this.three.RawShaderMaterial(parameters)
  }

  public ShaderMaterial(parameters?: ShaderMaterialParameters): ShaderMaterial {
    return new this.three.ShaderMaterial(parameters)
  }

  public BoxGeometry(
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ): BoxGeometry {
    return new this.three.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
  }

  public BufferGeometry(): BufferGeometry {
    return new this.three.BufferGeometry()
  }

  public Box3(...args: [min?: Vector3, max?: Vector3]): Box3 {
    return new this.three.Box3(...args)
  }

  public Float32BufferAttribute(array: ArrayLike<number>, itemSize: number): Float32BufferAttribute {
    return new this.three.Float32BufferAttribute(array, itemSize)
  }

  public TextureLoader(): TextureLoader {
    return new this.three.TextureLoader()
  }
}
