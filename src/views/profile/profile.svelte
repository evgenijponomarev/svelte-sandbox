<script>
  import { push } from 'svelte-spa-router';
  import { onMount } from 'svelte';

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

  let profile = {};

  function onCLoseErrorDialog() {
    isErrorVisible = false;
  }

  async function onSubmit() {
    if (
      !profile.age
      || !profile.partnerAge
      || profile.isConsentToWakeUp && (!profile.wakeUpTimeStart || !profile.wakeUpTimeStop)
    ) {
      isErrorVisible = true;
      return;
    }
    
    const { status } = await apiProvider.post('/profile', profile);
    if (status === 'ok') {
      push('/');
    }
  }

  onMount(async () => {
    const response = await apiProvider.get('/profile');
    profile = response.profile;
  });
</script>

<Title>Профиль</Title>

<p>
  Укажите ваши данные и данные собеседника, чтобы мы знали кому поручить ваше пробуждение.
</p>

{#if profile.age}
  <Form {onSubmit}>
    <Form__Columns>
      <Form__Column>
        <FormField
          id="gender"
          name="gender"
          label="Пол"
          type="select"
          options={GENDER_OPTIONS}
          bind:value={profile.gender}
        />
      </Form__Column>

      <Form__Column>
        <FormField
          id="age"
          name="age"
          label="Возраст"
          type="number"
          bind:value={profile.age}
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
          bind:value={profile.partnerGender}
        />
      </Form__Column>

      <Form__Column>
        <FormField
          id="partner-age"
          name="partner-age"
          label="Возраст собеседника"
          type="number"
          bind:value={profile.partnerAge}
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
          bind:checked={profile.isConsentToWakeUp}
        />
      </Form__Column>
    </Form__Columns>

    {#if profile.isConsentToWakeUp}
      <Form__Columns>
        <Form__Column>
          <FormField
            id="wake-up-time-start"
            name="wake-up-time-start"
            label="С"
            type="time"
            bind:value={profile.wakeUpTimeStart}
          />
        </Form__Column>

        <Form__Column>
          <FormField
            id="wake-up-time-stop"
            name="wake-up-time-stop"
            label="До"
            type="time"
            bind:value={profile.wakeUpTimeStop}
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
{/if}

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
