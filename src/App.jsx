import { useState } from 'react';
import './App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const INITIAL_TASKS = [
  {
    id: 1,
    name: 'Learn React',
    description: 'Complete the Ultimate React Course',
    status: 2
  },
  {
    id: 2,
    name: 'Learn NestJS',
    description: 'Complete the ultimate NestJs course',
    status: 3
  },
  {
    id: 3,
    name: 'Learn Next.js',
    description: 'Complete the ultimate NextJs course',
    status: 1
  }
];

const Task = ({ id, name, status, description, next, prev}) => {
  const handlePrev = () => { 
    prev(id)
  }

  const handleNext = () => { 
    next(id)
  }

  return (<div className='task' id={id}>
    <div className='task-header'>
      <h4> {name} </h4>
    </div>

    <div className='task-body'>
      <p> {description} </p>
    </div>

    <div className='task-footer'>
      { status > 1 ? <button onClick={handlePrev}> Prev </button> : ''}
      { status < 3 ? <button onClick={handleNext}> Next </button> : '' }
    </div>
  </div>)
}

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  const prev = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex( t => t.id == id)
    newTasks[index].status -= 1;
    setTasks(newTasks);
  }

  const next = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex( t =>  t.id == id )
    newTasks[index].status += 1;
    setTasks(newTasks)
  }

  const createTask = async () => {
   const result = await MySwal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-task-name" class="swal2-input">' +
        '<input id="swal-task-description" class="swal2-input">',
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'cancel',
      preConfirm: () => {
        return {
          name: document.getElementById('swal-task-name').value,
          description: document.getElementById('swal-task-description').value
        }
      }
    })
    if(result.isConfirmed) {
      setTasks([...tasks, { id: (tasks.length + 1), status: 1, ...result.value }])
    }
  
  }

  return (
    <>
      <h1> React Kanban </h1>
      <div className='main-section '>
  
      <div className='column'>
        <div className='column-header'>
            <h4> Pending Tasks </h4>
            <button onClick={createTask}> New Task </button>
        </div>
        
        {tasks.map(t => {
         return t.status == 1 ? (
            <Task
              key={t.id}
              id={t.id}
              name={t.name}
              description={t.description}
              status={t.status}
              next={next}
              prev={prev}
            ></Task>
          ) : ''
        })}

      </div>
      
      <div className='column'>
        <h4> In Progress Tasks </h4>
       
          {tasks.map(t => {
            return t.status == 2 ? (
              <Task
                key={t.id}
                id={t.id}
                name={t.name}
                description={t.description}
                status={t.status}
                next={next}
                prev={prev}
              ></Task>
            ) : ''
          })}

      </div>
      
      <div className='column'>
        <h4> Closed Tasks </h4>
        
          {tasks.map(t => {
            return t.status == 3 ? (
              <Task
                key={t.id}
                id={t.id}
                name={t.name}
                description={t.description}
                status={t.status}
                next={next}
                prev={prev}
              ></Task>
            ) : ''
          })}

      </div>

    </div>
    </>
  )
}

export default App

