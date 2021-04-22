import React, { Component } from "react";

import apiProvider from '../../services/api-provider';

import Title from '../../components/title/title';
import Form from '../../components/form/form';
import Form__Columns from '../../components/form/form__columns/form__columns';
import Form__Column from '../../components/form/form__column/form__column';
import FormField from '../../components/form-field/form-field';
import ButtonGroup from '../../components/button-group/button-group';
import Button from '../../components/button/button';
import DialogOverlay from '../../components/dialog-overlay/dialog-overlay';
import Dialog from '../../components/dialog/dialog';

const GENDER_OPTIONS = [
  { value: 'male', text: 'Мужской' },
  { value: 'female', text: 'Женский' },
];

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
    };
  }

  async componentDidMount() {
    const response = await apiProvider.get('/profile');
    this.setState({ profile: response.profile })
  }

  onCLoseErrorDialog = () => {
    this.setState({ isErrorVisible: false })
  }

  onSubmit = event => {
    event.preventDefault();

    if (
      !this.state.profile.age
      || !this.state.profile.partnerAge
      || this.state.profile.isConsentToWakeUp && (!this.state.profile.wakeUpTimeStart || !this.state.profile.wakeUpTimeStop)
    ) {
      this.setState({ isErrorVisible: true })
      return;
    }
    
    this.updateProfile();
  }

  async updateProfile() {
    const { status } = await apiProvider.post('/profile', this.state.profile);
    if (status === 'ok') {
      location.hash = '#/';
    }
  }

  getOnChangeHandler(fieldName) {
    return value => {
      this.setState({
        profile: {
          ...this.state.profile,
          [fieldName]: value,
        },
      });
    };
  }

  render() {
    return (
      <>
        <Title>Профиль</Title>

        <p>
          Укажите ваши данные и данные собеседника, чтобы мы знали кому поручить ваше пробуждение.
        </p>

        {this.state.profile.age && (
          <Form onSubmit={this.onSubmit}>
            <Form__Columns>
              <Form__Column>
                <FormField
                  id="gender"
                  name="gender"
                  label="Пол"
                  type="select"
                  options={GENDER_OPTIONS}
                  value={this.state.profile.gender}
                  onChange={this.getOnChangeHandler('gender')}
                />
              </Form__Column>

              <Form__Column>
                <FormField
                  id="age"
                  name="age"
                  label="Возраст"
                  type="number"
                  value={this.state.profile.age}
                  onChange={this.getOnChangeHandler('age')}
                />
              </Form__Column>
            </Form__Columns>

            <Form__Columns>
              <Form__Column>
                <FormField
                  id="partner-gender"
                  name="partner-gender"
                  label="Пол собеседника"
                  type="select"
                  options={GENDER_OPTIONS}
                  value={this.state.profile.partnerGender}
                  onChange={this.getOnChangeHandler('partnerGender')}
                />
              </Form__Column>

              <Form__Column>
                <FormField
                  id="partner-age"
                  name="partner-age"
                  label="Возраст собеседника"
                  type="number"
                  value={this.state.profile.partnerAge}
                  onChange={this.getOnChangeHandler('partnerAge')}
                />
              </Form__Column>
            </Form__Columns>

            <Form__Columns>
              <Form__Column isWide={true}>
                <FormField
                  id="is-consent-to-wake-up"
                  name="is-consent-to-wake-up"
                  label="Хочу будить других пользователей"
                  type="checkbox"
                  checked={this.state.profile.isConsentToWakeUp}
                  onChange={this.getOnChangeHandler('isConsentToWakeUp')}
                />
              </Form__Column>
            </Form__Columns>

            {this.state.profile.isConsentToWakeUp && (
              <Form__Columns>
                <Form__Column>
                  <FormField
                    id="wake-up-time-start"
                    name="wake-up-time-start"
                    label="С"
                    type="time"
                    value={this.state.profile.wakeUpTimeStart}
                    onChange={this.getOnChangeHandler('wakeUpTimeStart')}
                  />
                </Form__Column>

                <Form__Column>
                  <FormField
                    id="wake-up-time-stop"
                    name="wake-up-time-stop"
                    label="До"
                    type="time"
                    value={this.state.profile.wakeUpTimeStop}
                    onChange={this.getOnChangeHandler('wakeUpTimeStop')}
                  />
                </Form__Column>
              </Form__Columns>
            )}

            <ButtonGroup>
              <Button mix="button-group__item" type="submit">
                Сохранить
              </Button>

              <a className="button-group__item" href="#/">Назад</a>
            </ButtonGroup>
          </Form>
        )}

        {this.state.isErrorVisible && (
          <DialogOverlay onClose={this.onCLoseErrorDialog}>
            <Dialog
              mix="dialog-alarm-form"
              onClose={this.onCLoseErrorDialog}
              title="Ошибка"
            >
              Заполните все поля, пожалуйста
            </Dialog>
          </DialogOverlay>
        )}
      </>
    );
  }
}
