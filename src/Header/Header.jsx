const Header = () => {
  // const inputStyle = {
  //   width: '100%',
  //   padding: '16px 12px',
  //   border: 'none',
  //   borderRadius: '16px',
  //   backgroundColor: '#202938',
  //   color: '#6a7080', 
  //   boxSizing: 'border-box'
  // };

  return (
    <div className="header">
      <h1>Task List</h1>
      <input type="text" placeholder='Filter tasks' />
    </div>
  );
};

export default Header;
  
  