const AddTask = () => {
    // const formStyle = {
    //   display: 'flex',
    //   justifyContent: 'space-between'
    // }
    // const inputStyle = {
    //   flex: '10',
    //   padding: '16px 12px',
    //   border: 'none',
    //   borderRadius: '16px',
    //   backgroundColor: '#202938',
    //   color: '#6a7080',
    //   boxSizing: 'border-box'
    // };
    // const btnStyle = {
    //   flex: '1',
    //   border: 'none',
    //   backgroundColor: 'transparent',
    //   color: 'violet',
    //   fontWeight: '700',
    //   cursor: 'pointer'
    // };
    const texts = {placeholder: 'What do you have planned? ', btn: 'Add task'};
  
    return (
      <form action="" className='add-task-form'>
        <input type="text" placeholder={texts.placeholder} />
        <button className='item-btn edit-btn'>{texts.btn}</button>
      </form>
    );
};

export default AddTask;
  
  