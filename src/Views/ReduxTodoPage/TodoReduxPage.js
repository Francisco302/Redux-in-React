import React from 'react'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'
import VisibilityFilters from './Components/VisibilityFilters'

function TodoReduxPage() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  )
}

export default TodoReduxPage