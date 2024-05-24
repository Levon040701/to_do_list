import ListItem from './ListItem'

const TaskList = ({items, isEditing, editText, setEditText, handleEdit, handleSave, handleDelete}) => {
  const jsxArray = items.map((obj) => (
    <ListItem itemText={obj.itemText} id={obj.id} key={obj.id} isEditing={isEditing} editText={editText} setEditText={setEditText} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete}></ListItem>
  ));

  return (
    <div className='task-list'>
      <h3>Tasks</h3>
      <ul>{jsxArray}</ul>
    </div>
  );
};

export default TaskList;
  
  