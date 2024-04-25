import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import AddTask from './AddTask/AddTask'

// const bgStyle = {
//   width: '500px',
//   margin: 'auto',
//   padding: '16px',
//   borderRadius: '12px',
//   backgroundColor: '#384152',
//   boxSizing: 'border-box'
// };

const jsxElem = (
  <div className='app'>
    <Header></Header>
    <TaskList></TaskList>
    <AddTask></AddTask>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsxElem);
