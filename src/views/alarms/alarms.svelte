<script>
  import apiProvider from '../../services/api-provider';

  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';
  import Title from '../../components/title/title';
  import AlarmList from '../../components/alarm-list/alarm-list';

  export let onGetAlarms = () => {};

  async function getAlarms() {
    const { items } = await apiProvider.get('/alarms');
    onGetAlarms(items);
    return items;
  }
  
  let alarmsPromise = getAlarms();
</script>

<Title>Будильники</Title>

<ButtonGroup>
  <Button mix="button-group__item" to="#/alarm-add">Добавить</Button>
</ButtonGroup>

{#await alarmsPromise}
  <p>...waiting</p>
{:then alarms}
  <AlarmList {alarms}/>
{/await}
