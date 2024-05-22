const Header = ({text, filter}) => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    filter(e.target.value);
  };

  return (
    <div className="header">
      <h1>{text}</h1>
      <input onChange={handleOnChange} type="text" placeholder='Filter tasks' />
    </div>
  );
};

export default Header;
  
  