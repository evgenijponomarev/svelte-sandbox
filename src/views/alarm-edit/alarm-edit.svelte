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
    try {
      const { status } = await apiProvider.del(`/alarms/${alarm.id}`);
      status === 'ok' && closeDialog();
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
      status === 'ok' && closeDialog();
    } catch (error) {
      console.log(error);
    }
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
