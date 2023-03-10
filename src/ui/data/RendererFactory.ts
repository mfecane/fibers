import {Cards} from 'src/cards/Cards'
import {Optional} from 'typescript-optional'
import {Renderers} from './registry'

export interface IRenderer {
	create(): HTMLElement
	destroy(): void
}

export class RendererFactory {
	private renderer?: IRenderer

	public constructor() {}

	public createRenderer(rendererId: Renderers) {
		this.removeRendererIfExists()
		switch (rendererId) {
			case Renderers.Cards:
				this.renderer = new Cards()
				break
		}
		const element = this.renderer?.create()
		this.getRoot().appendChild(element)
	}

	private removeRendererIfExists() {
		if (this.renderer) {
			this.renderer.destroy()
			this.getRoot().innerHTML = ''
		}
	}

	private getRoot(): HTMLDivElement {
		return Optional.ofNullable(document.querySelector<HTMLDivElement>('#render-target')).orElseThrow(
			() => 'no render target element'
		)
	}
}

export default new RendererFactory()
