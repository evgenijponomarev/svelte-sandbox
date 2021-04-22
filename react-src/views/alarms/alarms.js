import React, { Component } from "react";

import apiProvider from '../../services/api-provider';

import ButtonGroup from '../../components/button-group/button-group';
import Button from '../../components/button/button';
import Title from '../../components/title/title';
import AlarmList from '../../components/alarm-list/alarm-list';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const alarms = await this.getAlarms();
    this.setState({ alarms });
  }

  async getAlarms() {
    const { items } = await apiProvider.get('/alarms');
    this.props.onGetAlarms && this.props.onGetAlarms(items);
    return items;
  }

  render() {
    return (
      <>
        <Title>Будильники</Title>

        <ButtonGroup>
          <Button mix="button-group__item" to="#/alarm-add">Добавить</Button>
        </ButtonGroup>

        {(!this.state.alarms || this.state.alarms.length === 0) && <p>...waiting</p>}

        {this.state.alarms && this.state.alarms.length > 0 && <AlarmList alarms={this.state.alarms}/>}
      </>
    );
  }
}
