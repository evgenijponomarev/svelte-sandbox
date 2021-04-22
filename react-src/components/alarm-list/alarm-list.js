import React, { Component } from "react";

require('./alarm-list.css');

import AlarmCard from '../../components/alarm-card/alarm-card';


export default class AlarmList extends Component {
  render() {
    return (
      <div className="alarm-list">
        {this.props.alarms.map(alarm => {
          return (
            <div className="alarm-list__item" key={alarm.id}>
              <AlarmCard
                link={`#/alarms/${alarm.id}`}
                time={alarm.time}
                repeat={alarm.repeat}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
