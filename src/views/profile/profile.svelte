<script>
  import { push } from 'svelte-spa-router';

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

  let isErrorVisible = false;

  let profileData;

  function getOnChangeHandler(field) {
    return function(value) {
      profileData[field] = value;
    }
  }

  function onCLoseErrorDialog() {
    isErrorVisible = false;
  }

  async function onSubmit() {
    if (!profileData.age || !profileData.partnerAge
        || profileData.isConsentToWakeUp && (!profileData.wakeUpTimeStart || !profileData.wakeUpTimeStop)
      ) {
      isErrorVisible = true;
      return;
    }
    
    try {
      const { status } = await apiProvider.post('/profile', profileData);
      if (status === 'ok') {
        push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getProfile() {
    profileData = await apiProvider.get('/profile').profile;
  }

  const profilePromise = new Promise(resolve => {
    apiProvider.get('/profile').then(res => {
      console.log('then', res)
      profileData = res.profile;
      resolve(res.profile);
    });
  });
</script>

<Title>Профиль</Title>

<p>
  Укажите ваши данные и данные собеседника, чтобы мы знали кому поручить ваше пробуждение.
</p>

{#await profilePromise}
  waiting...
{:then profile}
  <Form {onSubmit}>
    <Form__Columns>
      <Form__Column>
        <FormField
          id="gender"
          name="gender"
          label="Пол"
          type="select"
          options={GENDER_OPTIONS}
          onChange={getOnChangeHandler('gender')}
          value={profile.gender}
        />
      </Form__Column>

      <Form__Column>
        <FormField
          id="age"
          name="age"
          label="Возраст"
          type="number"
          onChange={getOnChangeHandler('age')}
          value={profile.age}
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
          onChange={getOnChangeHandler('partnerGender')}
          value={profile.partnerGender}
        />
      </Form__Column>

      <Form__Column>
        <FormField
          id="partner-age"
          name="partner-age"
          label="Возраст собеседника"
          type="number"
          onChange={getOnChangeHandler('partnerAge')}
          value={profile.partnerAge}
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
          checked={profileData.isConsentToWakeUp}
          onChange={getOnChangeHandler('isConsentToWakeUp')}
        />
      </Form__Column>
    </Form__Columns>

    {#if profileData.isConsentToWakeUp}
      <Form__Columns>
        <Form__Column>
          <FormField
            id="wake-up-time-start"
            name="wake-up-time-start"
            label="С"
            type="time"
            onChange={getOnChangeHandler('wakeUpTimeStart')}
            value={profile.wakeUpTimeStart}
          />
        </Form__Column>

        <Form__Column>
          <FormField
            id="wake-up-time-stop"
            name="wake-up-time-stop"
            label="До"
            type="time"
            onChange={getOnChangeHandler('wakeUpTimeStop')}
            value={profile.wakeUpTimeStop}
          />
        </Form__Column>
      </Form__Columns>
    {/if}

    <ButtonGroup>
      <Button mix="button-group__item" type="submit">
        Сохранить
      </Button>

      <a class="button-group__item" href="#/">Назад</a>
    </ButtonGroup>
  </Form>
{/await}

{#if isErrorVisible}
  <DialogOverlay onClose={onCLoseErrorDialog}>
    <Dialog mix="dialog-alarm-form" onClose={onCLoseErrorDialog}>
      <span slot="title">
        Ошибка
      </span>

      <div slot="content">
        Заполните все поля, пожалуйста
      </div>
    </Dialog>
  </DialogOverlay>
{/if}
