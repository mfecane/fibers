import React from 'react'
import {useReducer, createContext, useContext, useEffect} from 'react'
import {renderersList, Renderers, RendererListItem} from '../data/registry'
import rendererFactory from '../data/RendererFactory'

interface IState {
	rendererId: Renderers
}

type IAction = {type: 'setRenderer'; payload: Renderers}

interface IContext extends IState {
	renderersList: RendererListItem[]
	setRenderer: (id: Renderers) => void
}

type TReducer = React.Reducer<IState, IAction>

const initialState: IState = {
	rendererId: Renderers.Cards,
}

const reducer: TReducer = (state, action) => {
	switch (action.type) {
		case 'setRenderer':
			return {...state, rendererId: action.payload}
	}
	throw 'unreachable'
}

const StoreContext = createContext<IContext | null>(null)

export const useStore = () => {
	const contextValue = useContext<IContext | null>(StoreContext)
	if (contextValue === null) {
		throw Error('Context has not been Provided!')
	}
	return contextValue
}

type IStoreProviderProps = {
	children: JSX.Element
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer<TReducer>(reducer, initialState)

	const context: IContext = {
		rendererId: state.rendererId,
		renderersList: renderersList,

		setRenderer: (id: Renderers) => {
			dispatch({type: 'setRenderer', payload: id})
		},
	}

	useEffect(() => {
		try {
			rendererFactory.createRenderer(state.rendererId)
		} catch (error) {
			console.error(error)
		}
	}, [state.rendererId])

	return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
}
