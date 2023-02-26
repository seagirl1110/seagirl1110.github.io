import React from "react";
import cn from "classnames";

export default class List extends React.Component {
  renderItem = (item, index) => {
    const { value, important, active } = item;
    const name = cn("list-item", {
      "list-item--important": important,
      "list-item--done": !active,
    });
    const { onRemove, onReady } = this.props;
    return (
      <li className={name} key={index}>
        <button
          onClick={() => {
            onReady(index);
          }}
        >
          *
        </button>
        <span>{value}</span>
        <button
          onClick={() => {
            onRemove(index);
          }}
        >
          -
        </button>
      </li>
    );
  };

  render() {
    const { items } = this.props;
    return <ul>{items.map((item, index) => this.renderItem(item, index))}</ul>;
  }
}
