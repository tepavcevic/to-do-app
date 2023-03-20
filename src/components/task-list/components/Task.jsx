import './styles.css';
import { useTasksDispatch } from '../../../helpers/TasksContext';
import { useState } from 'react';

export default function Task({ task }) {
  const dispatch = useTasksDispatch();

  const [isHoveringDelete, setIsHoveringDelete] = useState(false);

  return (
    <>
      <div className={`${isHoveringDelete ? 'hoveringDelete' : ''}  taskCard`}>
        <label className="taskGroup">
          {task.done ? (
            <>
              <svg
                id="checkIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
              >
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
            </>
          ) : (
            <>
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
            </>
          )}
        </label>
        {isHoveringDelete ? (
          <button
            className="taskDeleteButton"
            onMouseLeave={() => setIsHoveringDelete(false)}
            onClick={() => {
              dispatch({
                type: 'deleted',
                id: task.id,
              });
            }}
          >
            <svg
              id="deleteIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        ) : (
          <span
            className="deletePlaceholder"
            onMouseEnter={() => setIsHoveringDelete(true)}
            onMouseLeave={() => setIsHoveringDelete(false)}
          ></span>
        )}
      </div>
    </>
  );
}
