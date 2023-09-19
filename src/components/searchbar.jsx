import React from 'react';

const Searchbar = ({taskName, handleInput, addTask, dueDate, handleDueDate}) => {
  return (
    <div>
     <div>
      <input type="text" placeholder='enter task...' value={taskName} onChange={handleInput} className='task-input'/>
       <br /> <br />
     <div className='date-input'>
      <label htmlFor="duedate" className='tracking-wide border-b border-blue-500 text-gray-200 text-[.9rem]'>select date:</label>
      <input
       type="date" 
       value={dueDate}
       onChange={handleDueDate} placeholder='dd/mm/yyyy'
       className='task-date'
        />
     </div>
     </div>
     <br />
      <button className='task-btn' onClick={addTask}>Add task</button>
    </div>
  );
}

export default Searchbar;
