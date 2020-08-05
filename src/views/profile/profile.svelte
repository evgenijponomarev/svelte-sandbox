<script>
  import Title from '../../components/title/title';
  import Form from '../../components/form/form';
  import Form__Columns from '../../components/form/form__columns/form__columns';
  import Form__Column from '../../components/form/form__column/form__column';
  import FormField from '../../components/form-field/form-field';
  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';

  const GENDER_OPTIONS = [
    { value: 'male', text: 'Мужской' },
    { value: 'female', text: 'Женский' },
  ];

  let gender;
  let age;
  let partnerGender;
  let partnerAge;
  let isConsentToWakeUp = false;
  let wakeUpTimeStart;
  let wakeUpTimeStop;
</script>

<Title>Профиль</Title>

<p>
  Укажите ваши данные и данные собеседника, чтобы мы знали кому поручить ваше пробуждение.
</p>

<Form>
  <Form__Columns>
    <Form__Column>
      <FormField
        id="gender"
        name="gender"
        label="Пол"
        type="select"
        options={GENDER_OPTIONS}
        bind:value={gender}
      />
    </Form__Column>

    <Form__Column>
      <FormField
        id="age"
        name="age"
        label="Возраст"
        type="number"
        bind:value={age}
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
        bind:value={partnerGender}
      />
    </Form__Column>

    <Form__Column>
      <FormField
        id="partner-age"
        name="partner-age"
        label="Возраст собеседника"
        type="number"
        bind:value={partnerAge}
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
        bind:checked={isConsentToWakeUp}
      />
    </Form__Column>
  </Form__Columns>

  {#if isConsentToWakeUp}
    <Form__Columns>
      <Form__Column>
        <FormField
          id="wake-up-time-start"
          name="wake-up-time-start"
          label="С"
          type="time"
          bind:value={wakeUpTimeStart}
        />
      </Form__Column>

      <Form__Column>
        <FormField
          id="wake-up-time-stop"
          name="wake-up-time-stop"
          label="До"
          type="time"
          bind:value={wakeUpTimeStop}
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
