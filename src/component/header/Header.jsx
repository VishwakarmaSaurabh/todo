import { React } from "react";
import Button from "../button/button";
import InputField from "../input/InputField";
import "./Header.css";

const Header = ({ handleChange, handleSubmit, handleKeypress, value }) => (
  <div className="header">
    <InputField
      type="text"
      placeholder="new task"
      value={value}
      handleChange={handleChange}
      handleKeypress={handleKeypress}
    />
    <Button type="button" value="add" handleSubmit={handleSubmit} />
  </div>
);

export default Header;
