import { DirectionalLight, Scene } from 'three'
import { LightScheme } from '../instanced/LightScheme'
import { Renderer } from './Renderer'

export class ThreeLightsLightScheme implements LightScheme {
  private directionalLight?: DirectionalLight

  public constructor(private readonly renderer: Renderer) {
    this.directionalLight = new DirectionalLight(0xffffff, 0.8)
    this.directionalLight.position.set(1, 2, 1)
    this.renderer.scene.add(this.directionalLight.target)
    this.directionalLight.target.position.set(0, 0, 0)
    this.renderer.scene.add(this.directionalLight)

    const directionalLight2 = new DirectionalLight(0xffffff, 0.6)
    directionalLight2.position.set(-1, 2, -0.5)
    this.renderer.scene.add(directionalLight2.target)
    directionalLight2.target.position.set(0, 0, 0)
    this.renderer.scene.add(directionalLight2)

    const directionalLight3 = new DirectionalLight(0xffffff, 0.6)
    directionalLight3.position.set(0.5, 2, -0.5)
    this.renderer.scene.add(directionalLight3.target)
    directionalLight3.target.position.set(0, 0, 0)
    this.renderer.scene.add(directionalLight3)
    this.renderer.addLightScheme(this)
  }

  public update() {}
}
