import React from 'react'
import {StoreProvider} from '../hooks/useStore'
import Layout from './Layout'

const App: React.FC = () => {
	return (
		<StoreProvider>
			<Layout />
		</StoreProvider>
	)
}

export default App
