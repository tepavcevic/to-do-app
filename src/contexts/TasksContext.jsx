import { createContext, useContext, useReducer } from 'react';
import { TASK_ADDED, TASK_CHANGED, TASK_DELETED } from '../actions';

const TasksContext = createContext(null);
export const useTasks = () => useContext(TasksContext);

const TasksDispatchContext = createContext(null);
export const useTasksDispatch = () => useContext(TasksDispatchContext);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case TASK_ADDED: {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case TASK_CHANGED: {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case TASK_DELETED: {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}
