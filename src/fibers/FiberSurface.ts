import {Mesh, PerspectiveCamera} from 'three'
import * as THREE from 'three'
import {CurveGenerator, CurveGeneratorOptions} from './CurveGenerator'
import {ExtrudedMeshGenerator, ExtrudedMeshGeneratorOptions, ShapeType} from './ExtrudedMeshGenerator'

export interface CarpetFactoryOptions extends CurveGeneratorOptions, ExtrudedMeshGeneratorOptions {
	surfaceColorMap: string
	spiralTexture: boolean
	gamma: number
}

export class FiberSurface {
	private readonly options: CarpetFactoryOptions
	private static readonly CURVES_TO_GENERATE = 300

	private static readonly defaults: CarpetFactoryOptions = {
		surfaceColorMap: '',
		spiralTexture: true,
		gamma: 1.0,

		shapeType: ShapeType.Round,
		cellSize: 0.08,

		curvature: 2.0,

		baseLength: 0.3,
		lengthVariance: 0.0,

		heightSegments: 3.0,
		widthSegments: 3.0,
		width: 0.01,
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

uniform float logDepthBufFC;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

#define EPSILON 1e-6

void main()	{
    vUv = uv;
    vUv2 = uv2;
    vOffset = offsets;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	// depth buffer
	gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
	gl_Position.z *= gl_Position.w;
}
`

	private static readonly fragmentShader = `
precision mediump float;
precision mediump int;

uniform sampler2D surfaceColor;
uniform float spiralRatio;
uniform float gamma;

varying vec2 vUv;
varying vec2 vUv2;
varying float vOffset;

float TAU = 6.2831853;

void main()	{
    vec4 texelColor = texture2D(surfaceColor, vUv2);

	texelColor.rgb = pow(texelColor.rgb, vec3(1.0 / gamma));

    #if defined(USE_SPIRAL_TEXTURE)

      vec2 scaledUv = fract(vUv * vec2(3.0, 3.0 * spiralRatio));
      float spiral = cos((scaledUv.x + scaledUv.y) * TAU) / 2.0 + 0.5;
      texelColor *= (0.8 + 0.2 * spiral) * (0.8 + 0.2 * smoothstep(0.0, 0.01, spiral));

    #endif

    texelColor *= (0.2 + vOffset * 0.8);
    gl_FragColor = vec4(texelColor.xyz, 1.0);

}
`

	public constructor(options: Partial<CarpetFactoryOptions>, private camera: PerspectiveCamera) {
		this.options = {
			...FiberSurface.defaults,
			...options,
		}
	}

	public build(): Mesh {
		console.log('generate')

		const curveGenerator = new CurveGenerator(this.options)
		const curves = []
		for (let i = 0; i < FiberSurface.CURVES_TO_GENERATE; ++i) {
			curves.push(curveGenerator.generateCurve())
		}
		const extrudedMeshGenerator = new ExtrudedMeshGenerator(this.options)
		extrudedMeshGenerator.setCurves(curves)
		const bufferGeomertry = extrudedMeshGenerator.generateBufferGeometry()
		const surfaceColorMap = new THREE.TextureLoader().load(this.options.surfaceColorMap)
		const defines: any = {}
		if (this.options.spiralTexture) {
			defines.USE_SPIRAL_TEXTURE = true
		}

		const material = new THREE.RawShaderMaterial({
			defines,
			uniforms: {
				surfaceColor: {value: surfaceColorMap},
				spiralRatio: {
					value: this.options.baseLength / this.options.fiberWidth / 4.0,
				},
				gamma: {
					value: this.options.gamma,
				},
				logDepthBufFC: {
					value: 2.0 / (Math.log(this.camera.far + 1.0) / Math.LN2),
				},
			},
			vertexShader: FiberSurface.vertexShader,
			fragmentShader: FiberSurface.fragmentShader,
			side: THREE.DoubleSide,
		})

		return new Mesh(bufferGeomertry, material)
	}
}
