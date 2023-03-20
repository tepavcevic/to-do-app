import { TasksProvider } from './helpers/TasksContext';
import './App.css';
import AddTask from './components/add-task/Index';
import TaskList from './components/task-list/Index';

function App() {
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }
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
