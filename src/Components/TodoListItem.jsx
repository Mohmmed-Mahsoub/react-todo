import React, { Component } from "react";
class Item extends Component {
  state = {
    edit: false,
    itemValue: this.props.content,
  };
  onEdit = () => {
    //change edit state
    this.setState({ edit: true });
  };
  cancel = () => {
    //change edit state
    this.setState({ edit: false, itemValue: this.props.content });
  };
  onChange = (e) => {
    this.setState({ itemValue: e.target.value });
  };
  onSave = () => {
    //change edit state
    this.setState({ edit: false });
  };
  render() {
    let { content, id } = this.props;
    if (this.state.edit) {
      return (
        <li className="todo-item">
          <input
            onChange={this.onChange}
            type="text"
            value={this.state.itemValue}
          />
          <div className="icons">
            <i
              onClick={() => {
                this.props.edit(this.state.itemValue, id);
                this.onSave();
              }}
              className="fas fa-save"
            ></i>
            <i onClick={this.cancel} className="fas fa-times"></i>
          </div>
        </li>
      );
    } else {
      return (
        <li className="todo-item">
          {content}
          <div className="icons">
            <i onClick={this.onEdit} className="fas fa-pen"></i>
            <i
              onClick={() => this.props.delete(id)}
              className="fas fa-trash"
            ></i>
          </div>
        </li>
      );
    }
  }
}

export default Item;
