import React, { Component } from "react";
require('./page.css');

export default class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}
