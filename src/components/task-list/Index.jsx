import Task from './task/Index';

export default function TaskList({ tasks, onChangeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onChange={onChangeTask} />
      ))}
    </>
  );
}
