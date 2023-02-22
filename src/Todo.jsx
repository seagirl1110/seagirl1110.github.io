import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
  }

  handleChange = (evt) => {
    const currentValue = evt.target.value;
    this.setState({
      value: currentValue,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { value, items } = this.state;
    this.setState({
      value: '',
      items: [value, ...items],
    });
  };

  renderForm() {
    const { value } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input value={value} onChange={this.handleChange}></input>
      </form>
    );
  }

  renderList() {
    const { items } = this.state;
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        {this.renderForm()}
        {items.length > 0 && this.renderList()}
      </div>
    );
  }
}
