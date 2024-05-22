import { useState } from "react";

const AddTask = ({handleAdd}) => {
  const [taskText, setTaskText] = useState('');

  const handleOnChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleButtonClick = () => {
    if (taskText) {
      handleAdd(taskText);
      setTaskText('');
    }
  };

  const texts = {placeholder: 'What do you have planned? ', btn: 'Add task'};
  
  return (
    <div className='add-task-form'>
      <input onChange={handleOnChange} type="text" placeholder={texts.placeholder} value={taskText} />
      <button className='item-btn edit-btn' onClick={handleButtonClick}>{texts.btn}</button>
    </div>
  );
};

export default AddTask;
  
  