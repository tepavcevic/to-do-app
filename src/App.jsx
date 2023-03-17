import { useReducer } from 'react';
import './App.css';
import AddTask from './components/add-task/Index';
import TaskList from './components/task-list/Index';

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

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
    <div className="App">
      <AddTask onAddTask={handleAddTask} />

      <TaskList tasks={tasks} onChangeTask={handleChangeTask} />
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    default: {
      return tasks;
    }
  }
}

let nextId = 0;

export default App;
