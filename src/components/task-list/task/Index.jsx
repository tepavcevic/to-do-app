export default function Task({ task, onChange }) {
  return (
    <>
      <h2>Task {task.id + 1}</h2>
      {JSON.stringify(task)}
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(event) => {
            onChange({
              ...task,
              done: event.target.checked,
            });
          }}
        />
        {task.text}
      </label>
      <hr />
    </>
  );
}
