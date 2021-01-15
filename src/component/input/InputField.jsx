import { React } from "react";
import "./InputField.css";

const InputField = ({
  type,
  placeholder,
  handleChange,
  handleKeypress,
  value,
}) => (
  <div className="input">
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      required
      onChange={handleChange}
      onKeyPress={handleKeypress}
      value={value}
    />
  </div>
);

export default InputField;
