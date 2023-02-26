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

  addItem = (item) => {
    const { tasks } = this.state;
    const newTasks = [item, ...tasks];
    this.sortItem(newTasks);
    this.setState({
      tasks: newTasks,
    });
  };

  removeItem = (index) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter((item, idx) => idx !== index);
    this.setState({ tasks: newTasks });
  };

  doneItem = (index) => {
    const newTasks = [...this.state.tasks];
    const item = { ...this.state.tasks[index] };
    item.active = false;
    newTasks[index] = item;
    this.sortItem(newTasks);
    this.setState({
      tasks: newTasks,
    });
  };

  sortItem(coll) {
    coll.sort((a, b) => {
      if (a.important && !b.important) {
        return -1;
      } else if (!a.important && b.important) {
        return 1;
      }
      return 0;
    });
    coll.sort((a, b) => {
      if (a.active && !b.active) {
        return -1;
      } else if (!a.active && b.active) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    const { tasks } = this.state;
    localStorage.setItem("todo", JSON.stringify(tasks));
    return (
      <div>
        <h1>Todo List</h1>
        {<Form onSubmit={this.addItem} />}
        {tasks.length > 0 && (
          <List
            items={tasks}
            onRemove={this.removeItem}
            onReady={this.doneItem}
          />
        )}
      </div>
    );
  }
}
