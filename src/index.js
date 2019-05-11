import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import rootReducer from './reducers'
import loggerMiddleware from './loggerMiddleware'

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export const AppContext = React.createContext({state: store.getState(), dispatch: store.dispatch});

render(
      <App />
,  document.getElementById('root')
)
