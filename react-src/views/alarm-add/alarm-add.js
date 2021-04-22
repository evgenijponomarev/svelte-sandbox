import React, { Component } from "react";

import apiProvider from '../../services/api-provider';

import Alarms from '../alarms/alarms';

import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form';

export default class AlarmAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarm: {}
    };
  }

  onClose() {
    location.hash = '#/';
  }

  onChangeData = alarm => {
    this.setState({ alarm });
  }

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.alarm.time) return;

    this.addAlarm();
  }
  
  async addAlarm() {
    const { status } = await apiProvider.post('/alarms', this.state.alarm);
    status === 'ok' && this.onClose();
  }

  render() {
    return (
      <>
        <Alarms/>

        <DialogAlarmForm
          onClose={this.onClose}
          onSubmit={this.onSubmit}
          alarmData={this.state.alarm}
          onChangeData={this.onChangeData}
        />
      </>
    );
  }
}
