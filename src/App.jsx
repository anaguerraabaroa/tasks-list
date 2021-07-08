import React, { useState } from "react";
import shortid from "shortid";

import TasksList from "./components/TasksList";
import Form from "./components/Form";

function App() {
  // state
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  // events
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setTask(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate if user has written a text in the input
    if (!task.trim()) {
      setError("Please, don't forget to add a task");
      return;
    }

    // add tasks to the array
    // use shortid library to create a random id with generate() method
    setTasksList([...tasksList, { id: shortid.generate(), task: task }]);

    // clear input and errors
    setTask("");
    setError(null);
  };

  const handleClick = (id) => {
    // create a new array filtering items that have been clicked
    const filterTasks = tasksList.filter((item) => item.id !== id);
    setTasksList(filterTasks);
    setError(null);
  };

  const handleEdit = (item) => {
    setEdit(true);
    setTask(item.task);
    setId(item.id);
    setError(null);
  };

  const editTask = (e) => {
    e.preventDefault();

    // validate if user has written a text in the input
    if (!task.trim()) {
      setError("Please, don't forget to add a task");
      return;
    }

    // edit and save clicked tasks
    const editedArray = tasksList.map((item) =>
      item.id === id ? { id: id, task: task } : item
    );
    setTasksList(editedArray);
    setEdit(false);
    setTask("");
    setId("");
    setError(null);
  };

  // render tasks list
  const tasks = tasksList.map((item) => (
    <li className="list-group-item" key={item.id}>
      <span className="lead">{item.task}</span>
      <button
        className="btn btn-danger btn-sm float-end mx-2"
        onClick={() => handleClick(item.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-warning btn-sm float-end"
        onClick={() => handleEdit(item)}
      >
        Edit
      </button>
    </li>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center">Tasks List</h1>
      <hr />
      <div className="row">
        <TasksList tasks={tasks} />
        <Form
          task={task}
          edit={edit}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          handleEdit={handleEdit}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
