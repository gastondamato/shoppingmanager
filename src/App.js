import './App.css';
import TasksLogic from "./components/TasksLogic";

function App() {
  return (
    <div className="App">
      <div className='main-list'>
        <h1>Shopping list</h1>
        <TasksLogic />
      </div>
    </div>
  );
}

export default App;
