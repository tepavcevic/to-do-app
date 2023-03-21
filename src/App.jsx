import { TasksProvider } from './contexts/TasksContext';
import './App.css';
import AddTask from './components/add-task/Index';
import TaskList from './components/task-list/Index';

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <div className="taskInput">
          <AddTask />
        </div>
        <TaskList />
      </div>
    </TasksProvider>
  );
}

export default App;
