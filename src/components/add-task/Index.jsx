import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" name="taskInput" id="taskInput" value={text} onChange={handleTextChange} />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add Task
      </button>
    </>
  );
}
