<script>
  import { onMount } from 'svelte';

  import apiProvider from '../../services/api-provider';

  import ButtonGroup from '../../components/button-group/button-group';
  import Button from '../../components/button/button';
  import Title from '../../components/title/title';
  import AlarmList from '../../components/alarm-list/alarm-list';

  export let onGetAlarms = () => {};

  let alarms = [];

  onMount(async () => {
    const { items } = await apiProvider.get('/alarms');
    onGetAlarms(items);
    alarms = items;
  });
</script>

<Title>Будильники</Title>

<ButtonGroup>
  <Button mix="button-group__item" to="#/alarm-add">Добавить</Button>
</ButtonGroup>

{#if alarms.length === 0}
  <p>...waiting</p>
{:else}
  <AlarmList {alarms}/>
{/if}
