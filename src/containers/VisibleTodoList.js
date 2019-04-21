import React, {useContext} from 'react';
import {AppContext} from '../components/App'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

const ConnectedTodoList = () => {
  const {state, dispatch} = useContext(AppContext);
  const stateProps = mapStateToProps(state);
  const actionProps = mapDispatchToProps(dispatch);
  return <TodoList {...stateProps} {...actionProps} />
};

export default ConnectedTodoList;