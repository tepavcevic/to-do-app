import { useState } from 'react';

export default function TaskInput() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" name="taskInput" id="taskInput" value={text} onChange={handleTextChange} />
      <button type="submit">Add Task</button>
    </>
  );
}
