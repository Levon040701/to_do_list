const Header = ({text, searchText, setSearchText}) => {
  return (
    <div className="header">
      <h1>{text}</h1>
      <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Filter tasks' value={searchText} />
    </div>
  );
};

export default Header;
  
  