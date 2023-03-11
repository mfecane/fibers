export enum Renderers {
	'Cards',
	'StandardCards',
}

export type RendererListItem = {
	name: string
	id: Renderers
}

export const renderersList: RendererListItem[] = [
	{name: 'cards', id: Renderers.Cards},
	{name: 'standard material cards', id: Renderers.StandardCards},
]
