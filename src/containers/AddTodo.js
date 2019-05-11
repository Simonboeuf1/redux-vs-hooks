import React from 'react'
import {useContext} from 'react';
import { AppContext } from '../index';
import { addTodo } from '../actions'

const AddTodo = () => {
  let input
  const {dispatch} = useContext(AppContext);
  return (
    <div>
      <form id="addTodo" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
