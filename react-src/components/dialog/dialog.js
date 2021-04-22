import React, { Component } from "react";
require('./dialog.css');

import Title from '../title/title';

export default class Dialog extends Component {
  render() {
    return (
      <div className={['dialog', this.props.mix].join(' ')}>
        <div className="dialog__close-button" onClick={this.props.onClose}/>

        <Title mix="dialog__title">
          {this.props.title}
        </Title>

        <div className="dialog__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
