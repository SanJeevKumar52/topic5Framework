import React, { useState } from 'react';
import './App.css';
function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
 const addTask = ()=>{
  if (newTask.trim() === '') return; // Prevent adding empty tasks 

  const task = {
    id: Date.now(), // Unique ID based on timestamp
    text: newTask,
  };
  setTasks([...tasks, task]); // Add the new task to the list
  setNewTask(''); // Clear the input field
 };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Add a new task"
        />
        <button onClick={addTask} >Add Task</button>
        <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;