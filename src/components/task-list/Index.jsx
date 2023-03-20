import './styles.css';
import { useTasks } from '../../helpers/TasksContext';
import Task from './components/Task';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <div className="taskList">
      {tasks.length > 0 && tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
}
