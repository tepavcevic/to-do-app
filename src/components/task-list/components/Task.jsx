import './styles.css';
import { useTasksDispatch } from '../../../contexts/TasksContext';
import { useState } from 'react';
import { TASK_CHANGED, TASK_DELETED } from '../../../actions';
import checkIcon from '../../../assets/checkIcon.svg';
import deleteIcon from '../../../assets/deleteIcon.svg';

export default function Task({ task }) {
  const dispatch = useTasksDispatch();

  const [isHoveringDelete, setIsHoveringDelete] = useState(false);

  return (
    <>
      <div className={`${isHoveringDelete ? 'hoveringDelete' : ''}  taskCard`}>
        <label className="taskGroup">
          {task.done ? (
            <>
              <img src={checkIcon} id="checkIcon" alt="Checked icon" />
              <input
                id="checkbox"
                type="checkbox"
                checked={task.done}
                onChange={(event) => {
                  dispatch({
                    type: TASK_CHANGED,
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
                    type: TASK_CHANGED,
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
                type: TASK_DELETED,
                id: task.id,
              });
            }}
          >
            <img src={deleteIcon} id="deleteIcon" alt="Delete icon" />
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
