import React from 'react'
import {Renderers} from '../data/registry'
import {useStore} from '../hooks/useStore'
import './PlaygroundSelectorOption.scss'

type Props = {
	title: string
	id: Renderers
}

const PlaygroundSelectorOption: React.FC<Props> = ({title, id}) => {
	const {setRenderer} = useStore()

	return (
		<div className="playground-selector-option__item">
			<button
				className="btn playground-selector-option__button"
				onClick={() => {
					setRenderer(id)
				}}
			>
				{title}
			</button>
		</div>
	)
}

export default PlaygroundSelectorOption
