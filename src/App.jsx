import { useReducer, useState } from 'react'
import './App.css'
import Searchbar from './components/searchbar';

const defaultState = {
   tasks: [],
   emptyState: true, 
}

const reducer = (state, action) => {
   if(action.type === ADD_TASK) {
     return {...state, 
      tasks: [...state.tasks, action.payload],
      emptyState: false
     }
     
   }

   if(action.type === DELETE_TASK) {
    const newList = state.tasks.filter((task, id) => id !== action.payload)

     return {...state, 
              tasks: newList,
              emptyState: newList.length === 0
     }

   }
   
   return state;

}

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';



function App() {

 const [state, dispatch] = useReducer(reducer, defaultState);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    const newTask = {
      title: taskName,
      date: dueDate
    }
    dispatch({type: ADD_TASK, payload: newTask});
     setTaskName('');
     setDueDate('');
  }

  const deleteTask = (id) => {
    dispatch({type: DELETE_TASK, payload: id});
  }

  const handleInput = (event) => {
    setTaskName(event.target.value)
  }

  const handleDueDate = (event) => {
    setDueDate(event.target.value)
  }

  
  return (
    <>
    <Searchbar 
     taskName={taskName} 
     handleInput={handleInput}
     addTask={addTask} 
     dueDate={dueDate}
     handleDueDate={handleDueDate}
    />

    <div className='tasks'>
      <h1 className='header-title text-[1.4rem] mb-[1rem] text-gray-200'>List Of Tasks:</h1>
      <div className='flex lg:justify-center lg:gap-[6rem] justify-between mb-[1.5rem]'>
        <div className='border-b bg-blue-500 lg:w-[300px] w-[130px]'></div>
        <div className='border-b lg:w-[300px] w-[130px]'></div>
      </div>
 {state.emptyState 
  ? 
 (<h1 className='h1  text-[1.2rem] text-gray-200 '>No tasks yet!Add a task above.</h1> )
 :
  state.tasks.map((task, id) => {
      return (
        <div className='task flex justify-between text-left lg:justify-around align-center ' key={id}>
         <div className=''>
          <p className='task-name text-gray-200 text-[1rem]'>{task.title}</p>
          <span className='duedate text-gray-200 text-[.8rem]'>{task.date}</span>
         </div>
         <div>
         <button onClick={() => deleteTask(id)} className=' del-btn'>X</button>
         </div>
      </div>
      )
  })
 }

    </div>
  </>
  )
}

export default App
