<script>
  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay';
  import Dialog from '../../components/dialog/dialog';
  import Form from '../../components/form/form';
  import FormColumns from '../../components/form/form__columns/form__columns';
  import FormColumn from '../../components/form/form__column/form__column';
  import FormField from '../../components/form-field/form-field';
  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';

  export let alarm = {};
  export let onCLose = () => {};

  const isEditForm = !!alarm.id;

  const ALARM_REPEAT_OPTIONS = [
    { value: 'once', text: 'Не повторять' },
    { value: 'every_day', text: 'Каждый день' },
    { value: 'workdays', text: 'По будням' },
    { value: 'weekends', text: 'По выходным' },
  ];

  let alarmTime = isEditForm ? alarm.time : '';
  let alarmRepeat = isEditForm ? alarm.repeat : ALARM_REPEAT_OPTIONS[0].value;

  function onSubmit() {
    console.log('onSubmit', alarmTime, alarmRepeat)
  }
</script>

<DialogOverlay onClose={onCLose}>
  <Dialog mix="dialog-alarm-add" onClose={onCLose}>
    <span slot="title">
      {#if isEditForm}
        Изменить будильник
      {:else}
        Новый будильник
      {/if}
    </span>

    <div slot="content">
      <Form onSubmit={onSubmit}>
        <FormColumns>
          <FormColumn>
            <FormField
              id="alarm-time"
              name="alarm-time"
              label="Время"
              type="time"
              bind:value={alarmTime}
            />
          </FormColumn>

          <FormColumn>
            <FormField
              id="alarm-repeat"
              name="alarm-repeat"
              label="Периодичность"
              type="select"
              options={ALARM_REPEAT_OPTIONS}
              bind:value={alarmRepeat}
            />
          </FormColumn>
        </FormColumns>

        <ButtonGroup>
          <Button type="submit">
            Сохранить
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  </Dialog>
</DialogOverlay>

<style>
  :global(.dialog-alarm-add) {
    width: 400px;
  }
</style>
