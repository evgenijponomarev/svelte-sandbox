<script>
  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay';
  import Dialog from '../../components/dialog/dialog';
  import Form from '../../components/form/form';
  import FormColumns from '../../components/form/form__columns/form__columns';
  import FormColumn from '../../components/form/form__column/form__column';
  import FormField from '../../components/form-field/form-field';
  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';

  import ALARM_REPEAT_OPTIONS from '../../constants/alarm-repeat-options';

  export let alarm = {};
  export let onCLose = () => {};
  export let onDelete = () => {};
  export let onSubmit = () => {};

  const isEditForm = !!alarm.id;
</script>

<DialogOverlay onClose={onCLose}>
  <Dialog mix="dialog-alarm-form" onClose={onCLose}>
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
              bind:value={alarm.time}
            />
          </FormColumn>

          <FormColumn>
            <FormField
              id="alarm-repeat"
              name="alarm-repeat"
              label="Периодичность"
              type="select"
              options={ALARM_REPEAT_OPTIONS}
              bind:value={alarm.repeat}
            />
          </FormColumn>
        </FormColumns>

        <ButtonGroup>
          <Button mix="button-group__item" type="submit">
            Сохранить
          </Button>

          {#if isEditForm}
            <Button mix="button-group__item" onClick={onDelete}>
              Удалить
            </Button>
          {/if}
        </ButtonGroup>
      </Form>
    </div>
  </Dialog>
</DialogOverlay>

<style>
  :global(.dialog-alarm-form) {
    width: 400px;
  }
</style>
