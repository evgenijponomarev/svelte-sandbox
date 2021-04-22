import React, { Component } from "react";
require('./form__column.css');

export default class Form__Column extends Component {
  render() {
    return (
      <div
        className={`form__column${this.props.isWide ? ' form__column_wide' : ''}`}
      >
        {this.props.children}
      </div>
    );
  }
}
