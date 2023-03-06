import {Renderer} from 'src/fibers/Renderer'
import {ThreeLightsLightScheme} from './ThreeLightLightSceme'
import * as THREE from 'three'
import {CarpetFactoryOptions, FiberSurface} from './FiberSurface'
import {ShapeType} from './ExtrudedMeshGenerator'

let renderer: Renderer

export const exec = () => {
	const div = document.createElement('div')
	div.style.width = window.innerWidth + 'px'
	div.style.height = window.innerHeight + 'px'
	document.body.appendChild(div)

	renderer = new Renderer(div)
	new ThreeLightsLightScheme(renderer)

	const preset: CarpetFactoryOptions = {
		surfaceColorMap: 'texture_5.jpg',
		spiralTexture: true,

		curvature: 5.0,
		baseLength: 0.04,
		lengthVariance: 0.1,
		fiberWidth: 0.0025,

		heightSegments: 4.0,
		widthSegments: 3.0,

		shapeType: ShapeType.Round,
		radius: 0.5,
		cellSize: 0.003,
		gamma: 1.3,
	}

	const carpetFactory = new FiberSurface(preset, renderer.perspCamera)
	const mesh = carpetFactory.build()
	renderer.scene.add(mesh)

	const ah = new THREE.AxesHelper()
	renderer.scene.add(ah)

	renderer.animate()
}
