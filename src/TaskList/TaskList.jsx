import ListItem from './ListItem'

const TaskList = ({items, handleEdit, handleDelete}) => {
  const jsxArray = items.map((obj) => (
    <ListItem itemText={obj.itemText} id={obj.id} key={obj.id} handleEdit={handleEdit} handleDelete={handleDelete}></ListItem>
  ));

  return (
    <div className='task-list'>
      <h3>Tasks</h3>
      <ul>{jsxArray}</ul>
    </div>
  );
};

export default TaskList;
  
  