import React from "react";

export default class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
