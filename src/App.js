import { useState } from 'react';
import './App.css';

const Todo = ({ todo: { id, title }, removeTodo }) => {
  return (
    <div className='flex' key={id}>
      <input id={`todo_${id}`} name='todo' type='checkbox' />
      <label htmlFor={`todo_${id}`}>{title}</label>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <div className='flex'>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit' onClick={() => addTodo(todo)}>
        Ajouter
      </button>
    </div>
  );
};

function App() {
  const TODOLIST = [
    { id: 0, title: 'title' },
    { id: 1, title: 'title' },
  ];

  const [todoList, setTodo] = useState(TODOLIST);

  return (
    <div className='App'>
      <header className='App-header'>
        <div>My Tasks</div>
        <AddTodo
          addTodo={(title) =>
            setTodo([...todoList, { id: todoList.length, title }])
          }
        />
        {todoList.map((todo) => (
          <Todo
            todo={todo}
            removeTodo={(todoId) =>
              setTodo(todoList.filter(({ id }) => id !== todoId))
            }
          />
        ))}
      </header>
    </div>
  );
}

export default App;
