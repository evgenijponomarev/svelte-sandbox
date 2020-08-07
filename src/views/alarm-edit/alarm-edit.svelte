<script>
  import { pop } from 'svelte-spa-router';

  import apiProvider from '../../services/api-provider';

  import Alarms from '../alarms/alarms.svelte';

  import DialogOverlay from '../../components/dialog-overlay/dialog-overlay.svelte';
  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  export let params = {};

  const alarm = {
    id: params.id,
    time: '10:00',
    repeat: 'workdays',
  };

  function closeDialog() {
    pop();
  }

  async function onDelete() {
    try {
      const { status } = await apiProvider.del(`/alarms/${alarm.id}`);
      if (status === 'ok') {
        closeDialog();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit() {
    if (!alarm.time) return;
    
    try {
      const { status } = await apiProvider.post(`/alarms/${alarm.id}`, {
        time: alarm.time,
        repeat: alarm.repeat,
      });
      if (status === 'ok') {
        closeDialog();
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Alarms/>

<DialogAlarmForm
  onCLose={closeDialog}
  {onDelete}
  {onSubmit}
  {alarm}
/>
