import React, { Component } from "react";
require('./content-place.css');

export default class ContentPlace extends Component {
  render() {
    return (
      <div className={['content-place', this.props.mix].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}
