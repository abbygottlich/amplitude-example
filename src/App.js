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

  componentDidMount() {
    const eventProperties = {
      type: "Page Load",
      elementName: "Home Page",
      elementId: 1
    };

    window.amplitude.getInstance().logEvent("view homepage", eventProperties);
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onInputFocus = () => {
    const eventProperties = {
      type: "Element Change",
      elementName: "Input Field",
      elementId: 2
    };

    window.amplitude.getInstance().logEvent("add user input", eventProperties);
  };

  onAdd = () => {
    const eventProperties = {
      type: "Element Click",
      elementName: "Add Button",
      elementId: 3,
      userInput: this.state.inputValue
    };
    window.amplitude.getInstance().logEvent("click add btn", eventProperties);
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
    const ampVar = window.amplitude;
    // const setUserProp = window.setUserProp;
    // const logEvent = window.logEvent;
    // const completeBtn = document.getElementById("complete-btn");

    // const eventProperties = {
    //   type: "click complete btn"
    // };
    // ampVar.getInstance().logEvent(`click complete btn`, eventProperties);

    // const completeButton = new ampVar.Identify().set("complete button", "1");
    // ampVar.getInstance().setUserProp(completeButton);
    ampVar.getInstance().logEvent("click complete btn");

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
            onClick={this.onInputFocus}
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
