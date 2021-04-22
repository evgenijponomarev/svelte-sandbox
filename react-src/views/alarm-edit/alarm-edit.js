import React, { Component } from "react";

import apiProvider from '../../services/api-provider';

import Alarms from '../alarms/alarms';

import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form';

export default class AlarmEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alarm: {},
    };
  }

  onGetAlarms = alarms => {
    this.setState({
      alarm: alarms.find(a => +a.id === +location.hash.split('/')[2])
    });
  }

  onChangeData = alarm => {
    this.setState({ alarm });
  }

  onClose() {
    location.hash = '#/';
  }

  onDelete = async () => {
    const { status } = await apiProvider.del(`/alarms/${this.state.alarm.id}`);
    status === 'ok' && this.onClose();
  }

  onSubmit = event => {
    event.preventDefault();

    if (!this.state.alarm.time) return;
    
    this.alarmUpdate();
  }

  async alarmUpdate() {
    const { status } = await apiProvider.post(`/alarms/${this.state.alarm.id}`, {
      time: this.state.alarm.time,
      repeat: this.state.alarm.repeat,
    });
    status === 'ok' && this.onClose();
  }

  render() {
    return (
      <>
        <Alarms onGetAlarms={this.onGetAlarms}/>

        {this.state.alarm && (
          <DialogAlarmForm
            onClose={this.onClose}
            alarmData={this.state.alarm}
            onDelete={this.onDelete}
            onSubmit={this.onSubmit}
            onChangeData={this.onChangeData}
          />
        )}
      </>
    );
  }
}
