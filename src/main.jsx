import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css'

import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import AddTask from './AddTask/AddTask'

const App = () => {
  const headerText = 'Task List';

  const [todoItems, setTodoItems] = useState([]);
  const [added, setAdded] = useState([]);

  const handleEdit = (id) => {
    console.log(`Edit ${id}`);
  };

  const handleDelete = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const handleAdd = (text) => {
    added.push({
      itemText: text,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1
    });
    setAdded([...added]);
    setTodoItems([...added]);
  };

  const filter = (text) => {
    if (text) {
      const matches = [];
      added.forEach((task) => {
        if (task.itemText.includes(text)) {
          matches.push(task);
        }
      });
      setTodoItems(matches);
    } else {
      setTodoItems(added);
    }
  };

  return (
    <div className='app'>
      <Header text={headerText} filter={filter}></Header>
      <TaskList items={todoItems} handleEdit={handleEdit} handleDelete={handleDelete}></TaskList>
      <AddTask handleAdd={handleAdd}></AddTask>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
