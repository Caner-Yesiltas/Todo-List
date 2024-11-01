import React, { useState } from 'react'
import "../styles/App.css"

const TodoCreate = ({onCreateTodo}) => {

    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {

        if(!newTodo) return;
        const request ={
            id:Math.floor(Math.random()*99999999),
            content: newTodo
        }
        onCreateTodo(request);
    }

        


  


  return (
    <div className='todo-create'>
      <input 
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
      type="text" className='todo-input' placeholder="Enter your todo"   />

      <button onClick={createTodo}  className='todo-create-button'   > Create Todo  </button>
    </div>
  )
}

export default TodoCreate
