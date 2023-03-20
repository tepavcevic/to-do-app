import './styles.css';
import { useState } from 'react';
import { useTasksDispatch } from '../../helpers/TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form className="inputGroup">
        <input
          type="text"
          name="taskInput"
          id="taskInput"
          placeholder="New Task..."
          value={text}
          onChange={handleTextChange}
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setText('');
            dispatch({
              type: 'added',
              id: nextId++,
              text: text,
            });
          }}
        >
          Add Task
        </button>
      </form>
    </>
  );
}

let nextId = 0;
