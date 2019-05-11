import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { store, AppContext } from '../index';

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
