import React, { Component } from "react";
import Heart from "./heart";

class Counter extends Component {
  styles = {
    label: {
      padding: 10,
      fontSize: 14,
      backgroundColor: "cyan",
      margin: 10,
      borderRadius: 5,
      fontWeight: 700,
      width: 50,
    },
    counter: {
      margin: 10,
    },
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div style={this.styles.counter}>
        <span style={{ ...this.styles.label, ...this.colorCount() }}>
          {this.formatCount()}
        </span>
        <button
          className="btn m-2 btn-primary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        {this.props.counter.value > 0 && (
          <button
            className="btn btn-primary"
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
        )}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <Heart
          checked={this.props.counter.checked}
          onChange={() => this.props.onChange(this.props.counter)}
          id={this.props.counter.id}
        />
      </div>
    );
  }

  colorCount() {
    return {
      backgroundColor: this.props.counter.value === 0 ? "yellow" : "cyan",
    };
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
