import React, { Component } from "react";

class Heart extends Component {
  style = {
    borderRadius: 20,
    backgroundColor: "pink",
  };
  render() {
    const { checked, onChange } = this.props;

    return (
      <button style={this.style} onClick={onChange}>
        {checked ? "💖" : "🤍"}
      </button>
    );
  }
}

export default Heart;
