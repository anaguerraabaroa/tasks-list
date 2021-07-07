import React, { useState } from "react";
import shortid from "shortid";

function App() {
  // state
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  // events
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setTask(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate if user has written a text in the input
    if (!task.trim()) {
      return;
    }

    // add tasks to the array
    // use shortid library to create a random id with generate() method
    setTasksList([...tasksList, { id: shortid.generate(), task: task }]);

    // clear input
    setTask("");
  };

  const handleClick = (id) => {
    const filterTasks = tasksList.filter((item) => item.id !== id);
    setTasksList(filterTasks);
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
      <button className="btn btn-warning btn-sm float-end">Edit</button>
    </li>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">{tasks}</ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add task"
              value={task}
              className="form-control mb-2"
              onChange={handleChange}
            />
            <button className="btn btn-dark btn-block col-12" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
