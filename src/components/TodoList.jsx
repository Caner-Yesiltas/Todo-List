import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onRemoveTodo, onUpdateTodo}) => {
  return (
    <div   className='todolist'  style={{ width: '100%', marginTop: '50px', }}>

    {
      todos && todos.map((todo) => (
        <Todo key={todo.key} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />

      ))
    }

    </div>
  );
};

export default TodoList;
