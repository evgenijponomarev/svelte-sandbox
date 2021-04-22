import React, { Component } from "react";
require('./dialog-overlay.css');

export default class DialogOverlay extends Component {
  onClick(event) {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className="dialog-overlay" onClick={(event) => this.onClick(event)}>
        {this.props.children}
      </div>
    );
  }
}
