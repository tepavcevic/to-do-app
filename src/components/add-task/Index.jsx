import './styles.css';
import { useState } from 'react';
import { useTasksDispatch } from '../../contexts/TasksContext';
import { v4 as uuidv4 } from 'uuid';
import { TASK_ADDED } from '../../actions';

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
          maxLength={40}
          value={text}
          onChange={handleTextChange}
        />
        <button
          className="inputButton"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setText('');
            if (text.length) {
              dispatch({
                type: TASK_ADDED,
                id: uuidv4(),
                text: text,
              });
            } else alert('Please enter a task');
          }}
        >
          Add Task
        </button>
      </form>
    </>
  );
}
