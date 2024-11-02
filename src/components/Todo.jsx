import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

const Todo = ({ todo, onRemoveTodo }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid lightgrey',
          padding: '.625rem',
          marginTop: '.575rem',
        }}
      >
        {todo.content}
        <div>
          <IoIosRemoveCircle
            className='todo-icons'
            style={{ color: 'red' }}
            onClick={() => onRemoveTodo(todo.id)}
          />
          <FaEdit className='todo-icons' style={{ color: 'darkcyan' }} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
