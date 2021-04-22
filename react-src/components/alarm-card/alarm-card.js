import React, { Component } from "react";
require('./alarm-card.css');

import ALARM_REPEAT_OPTIONS from '../../constants/alarm-repeat-options';


export default class AlarmCard extends Component {
  render() {
    return (
      <a href={this.props.link} className="alarm-card">
        <div className="alarm-card__time">
          {this.props.time}
        </div>

        <div className="alarm-card__repeat">
          {ALARM_REPEAT_OPTIONS.find(a => a.value === this.props.repeat).text}
        </div>
      </a>
    );
  }
}
