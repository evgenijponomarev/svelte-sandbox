import React, { Component } from "react";
require('./form__columns.css');

export default class Form__Columns extends Component {
  render() {
    return (
      <div className="form__columns">
        {this.props.children}
      </div>
    );
  }
}
