import React from 'react'
import "../styles/App.css"

const TodoCreate = () => {
  return (
    <div className='todo-create'>
      <input type="text" className='todo-input' placeholder="Enter your todo"   />
      <button className='todo-create-button'   > Create Todo  </button>
    </div>
  )
}

export default TodoCreate
