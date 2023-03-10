import 'src/styles/null.scss'
import 'src/styles/styles.scss'
import React from 'react'

import {createRoot} from 'react-dom/client'
import App from './ui/components/App'

const root = createRoot(document.querySelector('#app') as HTMLDivElement)
root.render(<App />)
