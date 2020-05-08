import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import rootReducer from './reducers'
import loggerMiddleware from './loggerMiddleware'
import {createUseConnect} from "./useConnect";

export const {Provider, useConnect} = createUseConnect(rootReducer, [loggerMiddleware]);

render(
      <App />
,  document.getElementById('root')
)
