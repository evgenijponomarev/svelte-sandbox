<script>
  import apiProvider from '../../services/api-provider';

  import Alarms from '../alarms/alarms.svelte';

  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form.svelte';

  let alarm;

  function closeDialog() {
    window.history.back();
  }

  function onChangeData(alarmData) {
    alarm = alarmData;
  }

  async function onSubmit() {
    if (!alarm.time) return;
    
    const { status } = await apiProvider.post('/alarms', alarm);
    status === 'ok' && closeDialog();
  }
</script>

<Alarms/>

<DialogAlarmForm
  onCLose={closeDialog}
  {onSubmit}
  alarmData={alarm}
  {onChangeData}
/>
