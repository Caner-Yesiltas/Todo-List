import TodoCreate from './components/TodoCreate';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <div
        style={{
          width: '31.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TodoCreate />
      </div>
    </div>
  );
}

export default App;
