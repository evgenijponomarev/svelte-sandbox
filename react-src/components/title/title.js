import React, { Component } from "react";
require('./title.css');

export default class Title extends Component {
  render() {
    return (
      <h1 className={['title', this.props.mix].join(' ')}>
        {this.props.children}
      </h1>
    );
  }
}
