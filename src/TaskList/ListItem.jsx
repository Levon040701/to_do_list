const ListItem = ({id, itemText, isEditing, editText, setEditText, handleEdit, handleSave, handleDelete}) => {
  return (
    <li className='list-item' id={'item-'+id}>
        <span className='item-text'>
          <span>#{id}. </span>
          {isEditing[id] ?
            (<input value={editText} onChange={(e) => setEditText(e.target.value)}></input> ) :
            (<span>{itemText}</span>)
          }
        </span>
        <span className='item-btns'>
          {isEditing[id] ?
            (<button className='item-btn save-btn' onClick={() => {handleSave(id)}}>save</button>) :
            (<button className='item-btn edit-btn' onClick={() => {handleEdit(id, itemText)}}>edit</button>)
          }
          <button className='item-btn' onClick={() => {handleDelete(id)}}>delete</button>
        </span>
    </li>
  );
};

export default ListItem;

