<script>
  import { pop } from 'svelte-spa-router';

  import apiProvider from '../../services/api-provider';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  const alarm = {
    time: '',
    repeat: 'once',
  };

  function closeDialog() {
    pop();
  }

  async function onSubmit() {
    if (!alarm.time) return;
    
    try {
      const { status } = await apiProvider.post('/alarms', alarm);
      if (status === 'ok') {
        closeDialog();
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Alarms/>

<DialogAlarmForm onCLose={closeDialog} {onSubmit} {alarm}/>
