// calling use state from the react library
import { useState, useEffect } from 'react'
import React from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// this is function method creating header
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  
  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // setting use state
  const [count, setCount] = useState(4)

  function decrementCount(){
    setCount(preCount => preCount - 1)
  }

  function addCount(){
    setCount(preCount => preCount + 1)
  }

  //add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE',})

    // ------------------// get task - if task id is not = to id then delete (filter)
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={ showAddTask } />
      {showAddTask && <AddTask onAdd={ addTask } />}
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={addCount}>+</button>
      {tasks.length > 0 ? <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} /> : 'no tasks'}
    </div>
  )
}

export default App;