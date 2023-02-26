import React from "react";
import List from "./list";
import Form from "./form";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("todo")) || [],
    };
  }

  submitForm = (data) => {
    const [value, important] = data;
    const { tasks } = this.state;
    const newTasks = [{ value, important }, ...tasks];
    newTasks.sort((a, b) => {
      if (a.important && !b.important) {
        return -1;
      } else if (!a.important && b.important) {
        return 1;
      }
      return 0;
    });
    this.setState({
      tasks: newTasks,
    });
    localStorage.setItem("todo", JSON.stringify(newTasks));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        {<Form onSubmit={this.submitForm} />}
        {tasks.length > 0 && <List items={tasks} />}
      </div>
    );
  }
}
