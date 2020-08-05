<script>
  import Button from '../../components/button/button';
  import Title from '../../components/title/title';
  import AlarmList from '../../components/alarm-list/alarm-list';

  import ALARMS from '../../mocks/alarms';
</script>

<Title>Будильники</Title>

<Button to="#/alarm-add">Добавить</Button>

<AlarmList alarms={ALARMS}/>
