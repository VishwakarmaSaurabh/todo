import { React, Component } from "react";
import { FaPlusCircle, FaCheck, FaTrash } from "react-icons/fa";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            newTask: "",
            tasks: [],
        };
    }

    inputChangeHandler = (event) => {
        this.setState({
            newTask: event.target.value,
        });
    };

    clickHandler = (event) => {
        if (this.state.newTask !== "") {
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    {
                        id: Math.random() * 1000,
                        task: this.state.newTask,
                        completed: false,
                    },
                ],
                newTask: "",
            });
        }
    };

    enterKeyPressHandler = (event) => {
        if (event.charCode === 13) {
            this.clickHandler();
        }
    };

    deleteTodo = (id) => {
        let filteredList = this.state.tasks.filter((todo) => todo.id !== id);
        this.setState({
            tasks: filteredList,
        });
    };

    markCompleteHandler = (id) => {
        this.setState({
            tasks: this.state.tasks.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            }),
        });
    };

    componentDidMount = () => {
        let todos = localStorage.getItem("todos");
        if (todos !== null) {
            this.setState({ tasks: JSON.parse(todos) });
        }
    };

    componentDidUpdate = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.tasks));
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1 className="title">Sauvi's Todo</h1>
                    <div className="input-box-container">
                        <input
                            type="text"
                            placeholder="new task"
                            onChange={this.inputChangeHandler}
                            onKeyPress={this.enterKeyPressHandler}
                            value={this.state.newTask}
                            autoFocus
                        ></input>
                        <FaPlusCircle
                            className="fa-plus"
                            onClick={this.clickHandler}
                        />
                    </div>
                </header>
                <div className="todos">
                    {this.state.tasks.map((todo) => (
                        <div className="todo" key={todo.id}>
                            <p className={todo.completed ? "strikeout" : ""}>
                                {todo.task}
                            </p>
                            <div className="icons">
                                <FaCheck
                                    className="icon"
                                    onClick={() =>
                                        this.markCompleteHandler(todo.id)
                                    }
                                />
                                <FaTrash
                                    className="icon"
                                    onClick={() => this.deleteTodo(todo.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
