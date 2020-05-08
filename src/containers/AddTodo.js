import React from 'react'
import { useConnect } from '../index';
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(addTodo(value))
})

const AddTodo = () => {
  let input
  const {addTodo} = useConnect({mapDispatchToProps});
  return (
    <div>
      <form id="addTodo" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
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
