import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css'

import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import AddTask from './AddTask/AddTask';

const App = () => {
  const headerText = 'Task List';

  const [todoItems, setTodoItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [editText, setEditText] = useState('');
  const [isEditing, setEditing] = useState({});

  const handleEdit = (id, itemText) => {
    setEditText(itemText);
    isEditing[id] = true;
    setEditing({...isEditing})
  };

  const handleSave = (id) => {
    if (!' \n\t'.includes(editText)) {
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === id) {
          todoItems[i].itemText = editText;
          break;
        }
      }
    }
    isEditing[id] = false;
    setEditing({...isEditing});
  };

  const handleDelete = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const handleAdd = (text) => {
    todoItems.push({
      itemText: text,
      id: todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1
    });
    setTodoItems([...todoItems]);

    isEditing[todoItems.length ? todoItems[todoItems.length - 1].id : 1] = false;
    setEditing({...isEditing});
  };

  const filteredTasks = todoItems.filter((task) => 
    task.itemText.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='app'>
      <Header text={headerText} searchText={searchText} setSearchText={setSearchText}></Header>
      <TaskList items={filteredTasks} isEditing={isEditing} editText={editText} setEditText={setEditText} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete}></TaskList>
      <AddTask handleAdd={handleAdd}></AddTask>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
