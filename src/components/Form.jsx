import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      important: true,
    };
    this.inputRef = React.createRef();
  }

  handleChange = ({ target }) => {
    if (target.type === "checkbox") {
      this.setState({
        important: target.checked,
      });
    } else {
      this.setState({
        value: target.value,
      });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.inputRef.current.focus();
    const { value, important } = this.state;
    const { onSubmit } = this.props;
    onSubmit([value, important]);
    this.setState({
      value: "",
    });
  };

  render() {
    const { value, important } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input
          value={value}
          onChange={this.handleChange}
          ref={this.inputRef}
          placeholder="Add your new task"
          autoFocus
          required
        ></input>
        <label>
          <input
            type="checkbox"
            checked={important}
            onChange={this.handleChange}
          />
          important task
        </label>
        <button type="submit">+</button>
      </form>
    );
  }
}
