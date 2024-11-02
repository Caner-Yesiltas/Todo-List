import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onRemoveTodo}) => {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>

    {
      todos && todos.map((todo) => (
        <Todo key={todo.key} todo={todo} onRemoveTodo={onRemoveTodo} />

      ))
    }

    </div>
  );
};

export default TodoList;
