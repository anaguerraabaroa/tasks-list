import React from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  const error = props.error ? (
    <span className="text-danger">{props.error}</span>
  ) : null;

  const button = props.edit ? (
    <button className="btn btn-warning btn-block col-12" type="submit">
      Edit
    </button>
  ) : (
    <button className="btn btn-dark btn-block col-12" type="submit">
      Add
    </button>
  );

  return (
    <div className="col-4">
      <h4 className="text-center">{props.edit ? "Edit Task" : "Add Task"}</h4>
      <form onSubmit={props.edit ? props.editTask : props.handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={props.task}
          className="form-control mb-2"
          onChange={props.handleChange}
        />
        {error}
        {button}
      </form>
    </div>
  );
};

Form.propTypes = {
  task: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Form;
