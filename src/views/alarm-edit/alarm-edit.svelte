<script>
  import { pop } from 'svelte-spa-router';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  export let params = {};

  function onCloseDialog() {
    pop();
  }

  const alarm = {
    id: params.id,
    time: '10:00',
    repeat: 'workdays',
  };
</script>

<Alarms/>

<DialogAlarmForm onCLose={onCloseDialog} {alarm}/>
