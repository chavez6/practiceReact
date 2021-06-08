import {useState} from 'react'
import React from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'

// this is function method creating header
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'doctors app',
        day: 'octobe 23',
        renminder: true,
    },
    {
        id: 2,
        text: 'meeting at school',
        day: 'feb 28',
        reminder: false,
    },
  ])

  const [count, setCount] = useState(4)

  function decrementCount(){
    setCount(preCount => preCount - 1)
  }

  // delete task
  const deleteTask = (id) =>{
    // ------------------// get task - if task id is not = to id then delete (filter)
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'no tasks'}
    </div>
  )
}

export default App;