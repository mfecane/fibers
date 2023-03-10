import React from 'react'
import './Layout.scss'
import PlaygroundSelector from './PlaygroundSelector'
import RenderTarget from './RenderTarget'

type Props = {}

const Layout: React.FC<Props> = () => {
	return (
		<div className="layout">
			<div className="layout__left">
				<PlaygroundSelector />
			</div>
			<div className="layout__canvas-container">
				<RenderTarget />
			</div>
		</div>
	)
}

export default Layout
