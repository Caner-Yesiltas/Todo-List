import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {

const [todos, setTodos] = useState([]);

const createTodo = (newTodo) => {

  setTodos([...todos, newTodo]);
}



  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate   onCreateTodo={createTodo}    />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
