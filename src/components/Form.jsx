import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
    const { value } = this.state;
    if (value === "") {
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(value);
    this.setState({
      value: "",
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input value={value} onChange={this.handleChange}></input>
      </form>
    );
  }
}
