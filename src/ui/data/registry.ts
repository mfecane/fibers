export enum Renderers {
	'Cards',
}

export type RendererListItem = {
	name: string
	id: Renderers
}

export const renderersList: RendererListItem[] = [{name: 'Cards', id: Renderers.Cards}]
