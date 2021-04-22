import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}
