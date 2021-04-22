import React, { Component } from "react";
require('./dialog-alarm-form.css');

import DialogOverlay from '../../components/dialog-overlay/dialog-overlay';
import Dialog from '../../components/dialog/dialog';
import Form from '../../components/form/form';
import FormColumns from '../../components/form/form__columns/form__columns';
import FormColumn from '../../components/form/form__column/form__column';
import FormField from '../../components/form-field/form-field';
import ButtonGroup from '../../components/button-group/button-group';
import Button from '../../components/button/button';

import ALARM_REPEAT_OPTIONS from '../../constants/alarm-repeat-options';

export default class DialogAlarmForm extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.alarmData.id !== this.props.alarmData.id
      || nextProps.alarmData.time !== this.props.alarmData.time
      || nextProps.alarmData.repeat !== this.props.alarmData.repeat;
  }

  onChangeTime = value => {
    this.props.onChangeData({ ...this.props.alarmData, time: value });
  }
  
  onChangeRepeat = value => {
    this.props.onChangeData({ ...this.props.alarmData, repeat: value });
  }

  render() {
    return (
      <DialogOverlay onClose={this.props.onClose}>
        <Dialog
          mix="dialog-alarm-form"
          onClose={this.props.onClose}
          title={!!this.props.alarmData.id ? 'Изменить будильник' : 'Новый будильник'}
        >
          <Form onSubmit={this.props.onSubmit}>
            <FormColumns>
              <FormColumn>
                <FormField
                  id="alarm-time"
                  name="alarm-time"
                  label="Время"
                  type="time"
                  value={this.props.alarmData.time}
                  onChange={this.onChangeTime}
                />
              </FormColumn>

              <FormColumn>
                <FormField
                  id="alarm-repeat"
                  name="alarm-repeat"
                  label="Периодичность"
                  type="select"
                  options={ALARM_REPEAT_OPTIONS}
                  value={this.props.alarmData.repeat}
                  onChange={this.onChangeRepeat}
                />
              </FormColumn>
            </FormColumns>

            <ButtonGroup>
              <Button mix="button-group__item" type="submit">
                Сохранить
              </Button>

              {!!this.props.alarmData.id && (
                <Button mix="button-group__item" onClick={this.props.onDelete}>
                  Удалить
                </Button>
              )}
            </ButtonGroup>
          </Form>
        </Dialog>
      </DialogOverlay>
    );
  }
}

DialogAlarmForm.defaultProps = {
  alarmData: {},
};
