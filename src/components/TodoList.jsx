import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>

    {
      todos && todos.map((todo) => (
        <Todo todo={todo} />

      ))
    }

    </div>
  );
};

export default TodoList;
