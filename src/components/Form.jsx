import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      important: true,
      active: true,
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
    const data = this.state;
    const { onSubmit } = this.props;
    onSubmit(data);
    this.setState({
      value: "",
    });
  };

  render() {
    const { value, important } = this.state;
    return (
      <form className="form" action="#" onSubmit={this.handleSubmit}>
        <input
          className="form__input"
          value={value}
          onChange={this.handleChange}
          ref={this.inputRef}
          placeholder="Add your new task"
          autoFocus
          required
        ></input>
        <label className="form__important">
          <input
            className="form__important--checkbox"
            type="checkbox"
            checked={important}
            onChange={this.handleChange}
          />
          important task
        </label>
        <button className="form__btn-add" type="submit">+</button>
      </form>
    );
  }
}
