import './styles.css';
import { useTasksDispatch } from '../../../helpers/TasksContext';

export default function Task({ task }) {
  const dispatch = useTasksDispatch();

  return (
    <>
      {' '}
      {task.done ? (
        <label className="taskCard">
          <div className="taskGroup">
            <svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green">
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>

            <input
              id="checkbox"
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
            <span className="taskText taskDone">{task.text}</span>
          </div>
        </label>
      ) : (
        <label className="taskCard">
          <div className="taskGroup">
            <input
              id="checkbox"
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
            <span className="taskText">{task.text}</span>
          </div>
        </label>
      )}
    </>
  );
}
