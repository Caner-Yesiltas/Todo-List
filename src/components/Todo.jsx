import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };

    onUpdateTodo(request);
    setEditable(false);
  };

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
        <div>
          {editable ? (
            <input
              value={newTodo}
              style={{ width: '23.75rem' }}
              onChange={(e) => setNewTodo(e.target.value)}
              className='todo-input edit-input'
              type='text'
            />
          ) : (
            content
          )}
        </div>

        <div>
          <IoIosRemoveCircle
            className='todo-icons'
            style={{ color: 'red' }}
            onClick={() => onRemoveTodo(todo.id)}
          />

          {editable ? (
            <FaCheck className='todo-icons' onClick={updateTodo} />
          ) : (
            <FaEdit
              className='todo-icons'
              style={{ color: 'black' }}
              onClick={() => setEditable(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
