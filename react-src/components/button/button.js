import React, { Component } from "react";
require('./button.css');

export default class Button extends Component {
  render() {
    if (this.props.to) {
      return (
        <a href={this.props.to} className={['button', this.props.mix].join(' ')}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <button className={['button', this.props.mix].join(' ')} type={this.props.type} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }
}
