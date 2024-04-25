const ListItem = () => {
    // const liStyle = {
    //   marginBottom: '16px',
    //   padding: '16px 12px',
    //   border: 'none',
    //   borderRadius: '16px',
    //   backgroundColor: '#111828',
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   boxSizing: 'border-box'
    // };
    // const pStyle = {
    //   flex: '9',
    //   margin: '0',
    // };
    // const textStyle = {
    //   flex: '8',
    //   padding: '0 12px',
    //   boxSizing: 'border-box'
    // };
    // const btnsStyle = {
    //   flex: '2',
    //   display: 'flex',
    //   justifyContent: 'space-between',
    // };
    // const editBtnStyle = {
    //   border: 'none',
    //   backgroundColor: 'transparent',
    //   color: 'violet',
    //   fontWeight: '700',
    //   textTransform: 'uppercase',
    //   cursor: 'pointer'
    // };
    // const deleteBtnStyle = {
    //   border: 'none',
    //   backgroundColor: 'transparent',
    //   color: 'red',
    //   fontWeight: '700',
    //   textTransform: 'uppercase',
    //   cursor: 'pointer'
    // };
  
    return (
    <li className='list-item'>
        <span className='item-text'>Build a Task app in 2024</span>
        <span className='item-btns'>
          <button className='item-btn edit-btn'>edit</button>
          <button className='item-btn'>delete</button>
        </span>
    </li>
    );
};

export default ListItem;
  
  