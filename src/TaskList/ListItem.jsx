const ListItem = ({id, itemText, handleEdit, handleDelete}) => {
  return (
    <li className='list-item'>
        <span className='item-text'>
          #{id}. {itemText}
          </span>
        <span className='item-btns'>
          <button className='item-btn edit-btn' onClick={() => {handleEdit(id)}}>edit</button>
          <button className='item-btn' onClick={() => {handleDelete(id)}}>delete</button>
        </span>
    </li>
  );
};

export default ListItem;
  
  