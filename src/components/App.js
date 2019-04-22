import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Provider } from '../index'; 

const App = () => {
    return (
    <div>
      <Provider>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
