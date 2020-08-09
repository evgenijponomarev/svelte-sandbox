<script>
  import { pop } from 'svelte-spa-router';

  import apiProvider from '../../services/api-provider';

  import Alarms from '../alarms/alarms.svelte';

  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  let alarm;

  function closeDialog() {
    pop();
  }

  function onChangeData(alarmData) {
    alarm = alarmData;
  }

  async function onSubmit() {
    if (!alarm.time) return;
    
    try {
      const { status } = await apiProvider.post('/alarms', alarm);
      status === 'ok' && closeDialog();
    } catch (error) {
      console.log(error);
    }
  }
</script>

<Alarms/>

<DialogAlarmForm
  onCLose={closeDialog}
  {onSubmit}
  alarmData={alarm}
  {onChangeData}
/>
