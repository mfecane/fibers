import * as THREE from 'three'
import { Mesh } from 'three'
import { CurveGenerator, CurveGeneratorOptions } from './CurveGenerator'
import {
  ExtrudedMeshGenerator,
  ExtrudedMeshGeneratorOptions,
  ShapeType,
} from './ExtrudedMeshGenerator'

export interface CarpetFactoryOptions
  extends CurveGeneratorOptions,
    ExtrudedMeshGeneratorOptions {
  surfaceColorMap: string
  spiralTexture: boolean
}

export class FiberSurfaceFactory {
  private readonly options: CarpetFactoryOptions
  public mesh?: Mesh

  private static readonly defaults: CarpetFactoryOptions = {
    surfaceColorMap: '',

    shapeType: ShapeType.Round,
    cellSize: 0.08,

    curvature: 2.0,

    baseLength: 0.3,
    lengthVariance: 0.0,

    heightSegments: 3.0,
    widthSegments: 3.0,
    width: 0.01,
    spiralTexture: true,
    fiberWidth: 0.02,
  }

  private static readonly vertexShader = `
precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec3 position;
attribute vec4 color;
attribute float offsets;
attribute vec2 uv;
attribute vec2 uv2;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

void main()	{
    vUv = uv;
    vUv2 = uv2;
    vOffset = offsets;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`

  private static readonly fragmentShader = `
precision mediump float;
precision mediump int;

uniform sampler2D surfaceColor;
uniform float spiralRatio;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

float TAU = 6.2831853;

void main()	{
    vec4 texelColor = texture2D(surfaceColor, vUv2);

    #if defined(USE_SPIRAL_TEXTURE)

      vec2 scaledUv = fract(vUv * vec2(3.0, 3.0 * spiralRatio));
      float spiral = cos((scaledUv.x + scaledUv.y) * TAU) / 2.0 + 0.5;
      texelColor *= (0.8 + 0.2 * spiral) * (0.8 + 0.2 * smoothstep(0.0, 0.01, spiral));

    #endif

    texelColor *= (0.2 + vOffset * 0.8);
    gl_FragColor = vec4(texelColor.xyz * 1.5 , 1.0);
}
`

  public constructor(options: Partial<CarpetFactoryOptions>) {
    this.options = {
      ...FiberSurfaceFactory.defaults,
      ...options,
    }
    this.createObjects()
  }

  private createObjects(): void {
    const curveGenerator = new CurveGenerator(this.options)
    const curves = []
    for (let i = 0; i < 200; ++i) {
      curves.push(curveGenerator.generateCurve())
    }
    const extrudedMeshGenerator = new ExtrudedMeshGenerator(this.options)
    extrudedMeshGenerator.setCurves(curves)
    const bufferGeomertry = extrudedMeshGenerator.generateBufferGeometry()
    const surfaceColorMap = new THREE.TextureLoader().load(
      this.options.surfaceColorMap
    )
    const defines: any = {}
    if (this.options.spiralTexture) {
      defines.USE_SPIRAL_TEXTURE = true
    }
    const material = new THREE.RawShaderMaterial({
      defines,
      uniforms: {
        surfaceColor: { value: surfaceColorMap },
        spiralRatio: {
          value: this.options.baseLength / this.options.fiberWidth / 4.0,
        },
      },
      vertexShader: FiberSurfaceFactory.vertexShader,
      fragmentShader: FiberSurfaceFactory.fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
    })

    this.mesh = new THREE.Mesh(bufferGeomertry, material)
  }
}
