import { useContext } from 'react';
import { useTasksDispatch } from '../../../helpers/TasksContext';

export default function Task({ task }) {
  const dispatch = useTasksDispatch();

  return (
    <>
      <h2>Task {task.id + 1}</h2>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(event) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: event.target.checked,
              },
            });
          }}
        />
        {task.text}
      </label>
      <hr />
    </>
  );
}
