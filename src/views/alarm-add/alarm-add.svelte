<script>
  import { pop } from 'svelte-spa-router';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  const alarm = {
    time: '',
    repeat: 'once',
  };

  function onCloseDialog() {
    pop();
  }

  function onSubmit() {
    console.log('Add alarm', alarm)
  }
</script>

<Alarms/>

<DialogAlarmForm onCLose={onCloseDialog} onSubmit={onSubmit} {alarm}/>
