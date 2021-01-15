import { React } from "react";
import "./Button.css";

const Button = ({ button, value, handleSubmit }) => (
  <button type={button} onClick={handleSubmit}>
    {value}
  </button>
);

export default Button;
