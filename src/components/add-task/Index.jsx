import { useContext, useState } from 'react';
import { useTasksDispatch } from '../../helpers/TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" name="taskInput" id="taskInput" value={text} onChange={handleTextChange} />
      <button
        onClick={() => {
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
    </>
  );
}

let nextId = 0;
