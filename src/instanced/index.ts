import { Renderer } from 'src/instanced/Renderer'
import { ThreeLightsLightScheme } from './ThreeLightLightSceme'
import * as THREE from 'three'
import { FiberSurface } from './FiberSurface'
import { ShapeType } from './ExtrudedMeshGenerator'

let renderer: Renderer

const preset1 = {
  surfaceColorMap: './texture_light.png',
  spiralTexture: true,

  curvature: 1.0,
  baseLength: 0.3,
  lengthVariance: 0.1,
  fiberWidth: 0.01,

  heightSegments: 8.0,
  widthSegments: 6.0,

  shapeType: ShapeType.Rect,
  width: 4,
  height: 4,
  cellSize: 0.02,
}

const preset2 = {
  surfaceColorMap: './texture_light.png',
  spiralTexture: true,

  curvature: 3.0,
  baseLength: 2.0,
  lengthVariance: 0.1,
  fiberWidth: 0.1,

  heightSegments: 8.0,
  widthSegments: 3.0,

  shapeType: ShapeType.Round,
  radius: 10,
  cellSize: 0.12,
}

const preset3 = {
  surfaceColorMap: './texture_light.png',
  spiralTexture: true,

  curvature: 3.0,
  baseLength: 2.2,
  lengthVariance: 0.1,
  fiberWidth: 0.12,

  heightSegments: 4.0,
  widthSegments: 3.0,

  shapeType: ShapeType.Round,
  radius: 10,
  cellSize: 0.12,
}

export const exec = () => {
  const div = document.createElement('div')
  div.style.width = window.innerWidth + 'px'
  div.style.height = window.innerHeight + 'px'
  document.body.appendChild(div)

  renderer = new Renderer(div)
  new ThreeLightsLightScheme(renderer)
  createObjects()

  const ah = new THREE.AxesHelper()
  renderer.scene.add(ah)

  renderer.animate()
}

function createObjects(): void {
  const carpetFactory = new FiberSurface(preset3)
  const mesh = carpetFactory.build()
  renderer.scene.add(mesh)
}
