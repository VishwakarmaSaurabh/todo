import { React } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./Task.css";

const Task = ({ task: { task } }) => (
  <div className="task-container">
    <p className="task">{task}</p>
    <div className="icons-container">
      <div className="icon">
        <FaCheck />
      </div>
      <div className="icon">
        <FaTrash />
      </div>
    </div>
  </div>
);

export default Task;
