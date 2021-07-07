import React from "react";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task Name</span>
              <button className="btn btn-danger btn-sm float-end mx-2">
                Delete
              </button>
              <button className="btn btn-warning btn-sm float-end">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Add task"
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
