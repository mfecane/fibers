import { Renderer } from 'src/instanced/Renderer'
import { ThreeLightsLightScheme } from './ThreeLightLightSceme'
import * as THREE from 'three'
import { FiberSurfaceFactory } from './FiberSurfaceFactory'
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

  curvature: 2.0,
  baseLength: 2.0,
  fiberWidth: 0.1,

  heightSegments: 8.0,
  widthSegments: 3.0,

  shapeType: ShapeType.Round,
  radius: 0.5,
  cellSize: 0.2,
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
  const carpetFactory = new FiberSurfaceFactory(preset2)
  renderer.scene.add(carpetFactory.mesh!)
}
