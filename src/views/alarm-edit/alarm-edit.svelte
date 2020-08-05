<script>
  import { pop } from 'svelte-spa-router';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  export let params = {};

  const alarm = {
    id: params.id,
    time: '10:00',
    repeat: 'workdays',
  };

  function onCloseDialog() {
    pop();
  }

  function onDelete() {
    console.log(`Delete alarm with id ${alarm.id}`)
  }

  function onSubmit() {
    console.log(`Edit alarm with id ${alarm.id}`, alarm)
  }
</script>

<Alarms/>

<DialogAlarmForm
  onCLose={onCloseDialog}
  onDelete={onDelete}
  onSubmit={onSubmit}
  {alarm}
/>
