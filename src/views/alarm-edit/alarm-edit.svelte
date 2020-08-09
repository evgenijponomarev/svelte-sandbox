<script>
  import { pop } from 'svelte-spa-router';

  import apiProvider from '../../services/api-provider';

  import Alarms from '../alarms/alarms';

  import DialogAlarmForm from '../../components/dialog-alarm-form/dialog-alarm-form';

  export let params;

  let alarm;

  function onGetAlarms(alarms) {
    alarm = alarms.find(a => +a.id === +params.id);
  }

  function onChangeData(alarmData) {
    alarm = alarmData;
  }

  function closeDialog() {
    pop();
  }

  async function onDelete() {
    const { status } = await apiProvider.del(`/alarms/${alarm.id}`);
    status === 'ok' && closeDialog();
  }

  async function onSubmit() {
    if (!alarm.time) return;
    
    const { status } = await apiProvider.post(`/alarms/${alarm.id}`, {
      time: alarm.time,
      repeat: alarm.repeat,
    });
    status === 'ok' && closeDialog();
  }
</script>

<Alarms {onGetAlarms}/>

{#if alarm}
  <DialogAlarmForm
    onCLose={closeDialog}
    alarmData={alarm}
    {onDelete}
    {onSubmit}
    {onChangeData}
  />
{/if}
