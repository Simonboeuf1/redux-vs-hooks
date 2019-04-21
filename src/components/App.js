import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { createStore } from 'redux'
import rootReducer from '../reducers'

export const store = createStore(rootReducer);

export const AppContext = React.createContext({state: store.getState(), dispatch: store.dispatch});

const App = () => {
  const [state, setState] = useState(() => store.getState());
  
  useEffect(() => {
    store.subscribe(() => setState(store.getState()));
  }, []);

  return (
    <div>
      <AppContext.Provider value={{state, dispatch: store.dispatch}}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default App
