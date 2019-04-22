import { createStore } from "redux";
import React from 'react';

const INITIAL_ACTION = {
  type: "__INIT__USECONNECT__"
}

const INITIAL_STATE = {};

const useConnect = (state, dispatch, mapStateToProps, mapDispatchToProps, ownProps = {}) => {
  const stateProps = mapStateToProps(state, ownProps);
  const dispatchers = mapDispatchToProps(dispatch, ownProps);

  return {...stateProps, ...dispatchers};
}

const createUseConnect = (reducer, middlewares) => {
  const store = createStore(reducer, ...middlewares);
  const Context = React.createContext();
  const initialState = reducer(INITIAL_STATE, INITIAL_ACTION);

  const Provider = ({children}) => {
    const [state, setState] = React.useState(initialState);
    React.useEffect(() => {
      store.subscribe(() => setState(store.getState()));
    }, []);

    return <Context.Provider value={{state, dispatch: store.dispatch}}>{children}</Context.Provider>
  }

  const useConnect = ({mapStateToProps, mapDispatchToProps, ownProps = {}}) => {
    const {state, dispatch} = React.useContext()
    const stateProps = mapStateToProps(state, ownProps);
    const dispatchers = mapDispatchToProps(dispatch, ownProps);
    return {...ownProps, ...stateProps, ...dispatchers};
  }

  return [Provider, useConnect];
}

export default createUseConnect;