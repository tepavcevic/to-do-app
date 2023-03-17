import { useContext } from 'react';
import { useTasks } from '../../helpers/TasksContext';
import Task from './task/Index';

export default function TaskList() {
  const tasks = useTasks();

  return <>{tasks.length > 0 && tasks.map((task) => <Task key={task.id} task={task} />)}</>;
}
