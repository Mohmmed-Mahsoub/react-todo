import React, { Component } from "react";
import Item from "./TodoListItem";
class List extends Component {
  checkAnyItems() {
    if (this.props.content.items.length === 0) {
      return <h2>Nothings To Do</h2>;
    }
    return (
      <ul>
        {this.props.content.items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              content={item.content}
              delete={this.props.delTodo}
              edit={this.props.editTodo}
            />
          );
        })}
      </ul>
    );
  }
  render() {
    return <div className="todo-list">{this.checkAnyItems()}</div>;
  }
}

export default List;
