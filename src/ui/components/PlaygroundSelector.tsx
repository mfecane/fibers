import React from 'react'
import {useStore} from '../hooks/useStore'
import './PlaygroundSelector.scss'
import PlaygroundSelectorOption from './PlaygroundSelectorOption'

type Props = {}

const PlaygroundSelector: React.FC<Props> = () => {
	const {renderersList} = useStore()

	const elements = renderersList.map((item) => (
		<PlaygroundSelectorOption title={item.name} id={item.id} key={item.id}></PlaygroundSelectorOption>
	))

	return <div className="playground_selector">{elements}</div>
}

export default PlaygroundSelector
