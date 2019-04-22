
import {createStore, applyMiddleware} from 'redux';
import React, {createContext, useContext, useState, useEffect} from 'react';

const INITIAL_ACTION = {
  type: "__INIT__USECONNECT"
}

const INITIAL_STATE = {};

export const createUseConnect = (reducer, middlewares) => {
  const store = createStore(reducer, applyMiddleware(...middlewares));
  const initialState = reducer(INITIAL_STATE, INITIAL_ACTION);
  const dispatch = store.dispatch;
  const Context = createContext();

  const Provider = ({children}) => {
    const [state, setState] = useState(initialState);
    useEffect(() => {
      store.subscribe(() => setState(store.getState()));
    }, []);
   return (
      <Context.Provider value={{state, dispatch}}>
        {children}
      </Context.Provider>
    )
  }

  const useConnect = ({mapStateToProps = () => {}, mapDispatchToProps = () => {}, ownProps = {}}) => {
    const {state, dispatch} = useContext(Context);
    const stateProps = mapStateToProps(state, ownProps);
    const actionDispatchers = mapDispatchToProps(dispatch, ownProps);

    return {...stateProps, ...actionDispatchers};
  }

  return {Provider, useConnect};
};
