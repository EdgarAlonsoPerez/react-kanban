import './App.css'

function App() {

  return (
    <>
      <h1> React Kanban </h1>
      <div className='main-section '>
  
      <div className='column'>
        <h4> Pending Tasks </h4>
        
        <div className='task'>
            <div className='task-header'>
              <h4> Task 1 </h4>
            </div>

            <div className='task-body'>
              <p> description </p>
            </div>

            <div className='task-footer'>
              <button> Next </button>
            </div>
        </div>

          <div className='task'>
            <div className='task-header'>
              <h4> Task 4 </h4>
            </div>

            <div className='task-body'>
              <p> description </p>
            </div>

            <div className='task-footer'>
              <button> Next </button>
            </div>
            
          </div>

      </div>
      
      <div className='column'>
        <h4> In Progress Tasks </h4>
       
          <div className='task'>
            <div className='task-header'>
              <h4> Task 2 </h4>
            </div>

            <div className='task-body'>
              <p> description </p>
            </div>

            <div className='task-footer'>
              <button> Prev </button>
              <button> Next </button>
            </div>
          </div>

      </div>
      
      <div className='column'>
        <h4> Closed Tasks </h4>
        
          <div className='task'>
            <div className='task-header'>
              <h4> Task 3 </h4>
            </div>

            <div className='task-body'>
              <p> description </p>
            </div>

            <div className='task-footer'>
              <button> Prev </button>
            </div>

          </div>

      </div>

    </div>
    </>
  )
}

export default App
