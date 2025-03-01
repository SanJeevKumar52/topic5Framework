import './App.css';
function App() {

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Add a new task"
        />
        <button >Add Task</button>
      </div>
    </div>
  );
}

export default App;