import React, { Component } from "react";
require('./button-group.css');

export default class ButtonGroup extends Component {
  render() {
    return (
      <div className="button-group">
        {this.props.children}
      </div>
    );
  }
}
