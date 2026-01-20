import { useState } from "react";

function ArrayState() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (indexToRemove) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(indexToRemove, 1);
    setTasks(updatedTasks);
  };

    return (
    <>
      <h1>Task List</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} {"......"}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArrayState;
