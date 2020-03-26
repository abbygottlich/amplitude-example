import React from "react";
import "./App.scss";
import ShowCompleted from "./components/Completed";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      inputValue: null,
      completed: false
    };

    this.list = [];
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onAdd = () => {
    if (this.state.inputValue) {
      this.list.push(this.state.inputValue);
      this.setState({
        todos: this.list,
        inputValue: null
      });
      document.getElementById("todo").value = null;
    }
  };

  onComplete = index => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos,
      completed: true
    });
    setTimeout(() => {
      this.setState({ completed: false });
    }, 2500);
  };

  showCompleted = () => {
    if (this.state.completed) {
      return <ShowCompleted />;
    }
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div className="input-add-wrapper">
          <input
            onChange={this.onChange}
            id="todo"
            placeholder="To do..."
          ></input>
          <button onClick={this.onAdd} id="add-btn">
            Add
          </button>
        </div>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <div key={index} className="list-item-wrapper">
                <button
                  id="complete-btn"
                  onClick={() => {
                    this.onComplete(index);
                  }}
                ></button>
                <li>{item}</li>
              </div>
            );
          })}
        </ul>
        {this.showCompleted()}
      </div>
    );
  }
}

export default App;
