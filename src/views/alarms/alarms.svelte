<script>
  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';
  import Title from '../../components/title/title';
  import AlarmList from '../../components/alarm-list/alarm-list';

  import ALARMS from '../../mocks/alarms';
</script>

<Title>Будильники</Title>

<ButtonGroup>
  <Button mix="button-group__item" to="#/alarm-add">Добавить</Button>
</ButtonGroup>

<AlarmList alarms={ALARMS}/>
