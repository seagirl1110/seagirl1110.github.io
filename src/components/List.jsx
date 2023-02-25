import React from "react";
import cn from "classnames";

export default class List extends React.Component {
  renderItem = (item, index) => {
    const { value, important } = item;
    const name = cn("list-item", {
      "list-item--important": important,
    });
    return (
      <li className={name} key={index}>
        {value}
      </li>
    );
  };

  render() {
    const { items } = this.props;
    return <ul>{items.map((item, index) => this.renderItem(item, index))}</ul>;
  }
}
