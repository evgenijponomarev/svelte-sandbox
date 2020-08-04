<script>
  import { pop } from 'svelte-spa-router';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  function onCloseDialog() {
    pop();
  }
</script>

<Alarms/>

<DialogAlarmForm onCLose={onCloseDialog}/>
