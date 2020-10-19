import React, { Component } from "react";
class Form extends Component {
  state = {
    inpValue: "",
  };

  handelChange = (e) => {
    this.setState({ inpValue: e.target.value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ inpValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          onChange={this.handelChange}
          value={this.state.inpValue}
          type="text"
          className="mb-2 mr-sm-2"
          id="inlineFormInputName2"
          required
        />
        <button type="submit" className="mb-2">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
