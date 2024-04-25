import ListItem from './ListItem'

const TaskList = () => {
  // const listStyle = {
  //   marginBottom: '48px',
  // };
  // const headingStyle = {
  //   color: '#6a7080'
  // };
  // const ulStyle = {
  //   padding: '0',
  //   listStyle: 'none'
  // };

  return (
    <div className='task-list'>
      <h3>Tasks</h3>
      <ul>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    </div>
  );
};

export default TaskList;
  
  