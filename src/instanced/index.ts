import { Renderer } from 'src/instanced/Renderer'
import { ThreeLightsLightScheme } from './ThreeLightLightSceme'
import * as THREE from 'three'
import { FiberSurfaceFactory } from './FiberSurfaceFactory'

let renderer: Renderer

const preset1 = {
  surfaceColorMap: './texture_light.png',
  minx: -1,
  miny: -1,
  maxx: 1,
  maxy: 1,
  sizex: 0.02,
  sizey: 0.02,
  variance: 1.0,
  length: 0.08,
  heightSegments: 6.0,
  widthSegments: 5.0,
  width: 0.014,
  spiralTexture: false,
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
  const carpetFactory = new FiberSurfaceFactory(preset1)
  renderer.scene.add(carpetFactory.mesh!)
}
