import { React, Component } from "react";
import "./App.css";
import Header from "./component/header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      tasks: [],
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = (event) => {
    let task = {
      id: Math.random() * 10 + 1,
      task: this.state.newTask,
      completed: false,
    };
    if (this.state.newTask !== "") {
      this.setState(
        (prevState) => ({
          tasks: [...prevState.tasks, task],
        }),
        () => this.setState({ newTask: "" }, () => console.log(this.state))
      );
    }
  };

  handleKeypress = (event) => {
    if (event.charCode === 13) {
      this.handleSubmit();
    }
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="App">
        <h1 className="title">TODO APP</h1>
        <Header
          value={newTask}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleKeypress={this.handleKeypress}
        />
        <div className="todo-list-container">
          {tasks.map((task) => (
            <p key={task.id}>{task.task}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
