import React from "react";
import List from "./List";
import Form from "./Form";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

 submitForm = (value) => {
    const { items } = this.state;
    this.setState({
      items: [value, ...items],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        {<Form onSubmit={this.submitForm} />}
        {items.length > 0 && <List items={items} />}
      </div>
    );
  }
}
