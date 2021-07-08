import React from "react";
import PropTypes from "prop-types";

const TasksList = (props) => {
  // render error or tasks list
  const list =
    props.tasks.length === 0 ? (
      <li className="list-group-item">There are no tasks</li>
    ) : (
      props.tasks
    );

  return (
    <div className="col-8">
      <h4 className="text-center">Tasks</h4>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

TasksList.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object),
};

export default TasksList;
