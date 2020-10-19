import React, { Component } from "react";
import "./App.css";
import Form from "./Components/TodoForm";
import List from "./Components/TodoList";
class App extends Component {
  state = {
    items: [], //{id:'1', content:'item'}, {id:'2', content:'item2'}
    message: "",
    className: "",
  };

  handelAddTodo = (val) => {
    //clone && edit
    let newTodo = { content: val.inpValue, id: Math.random() };
    //set
    this.setState({
      items: [...this.state.items, newTodo],
      message: "task has been added",
      className: "success-add",
    });
    setTimeout(() => {
      this.setState({ message: " ", className: " " });
    }, 2000);
  };

  handelDelTodo = (id) => {
    //clone && edit
    const newState = this.state.items.filter((i) => i.id !== id);
    //set
    this.setState({
      items: newState,
      message: "task has been deleted",
      className: "success-del",
    });
    setTimeout(() => {
      this.setState({ message: " ", className: " " });
    }, 2000);
  };

  handelEditTodo = (newVal, id) => {
    this.state.items.map(function (item) {
      console.log(item);
      if (item.id === id) {
        item.content = newVal;
      }
    });
    this.setState(this.state.items);
  };

  handelMessge = () => {
    if (this.state.message !== "") {
      return (
        <div className={`message ${this.state.className}`}>
          {this.state.message}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="todo">
          <div className="container">
            <Form addTodo={this.handelAddTodo} />
            <h1>To do list</h1>
            {this.handelMessge()}
            <List
              delTodo={this.handelDelTodo}
              editTodo={this.handelEditTodo}
              content={this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
