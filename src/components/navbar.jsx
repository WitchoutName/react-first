import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.google.com">
            Total: {this.props.counters}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
