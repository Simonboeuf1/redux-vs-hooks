import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const loggerMiddleware = ({ getState }) => next => (action) => {
  console.log("current state", getState());
  console.log("dispatching action", action);
  const nextState = next(action);
  console.log("next state", nextState);
  return nextState;
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
