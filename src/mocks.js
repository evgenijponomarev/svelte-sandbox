import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ALARMS from './mocks/alarms';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet('/alarms').reply(200, {
  status: 'ok',
  items: ALARMS,
});
