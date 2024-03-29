import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ALARMS from './mocks/alarms';
import PROFILE from './mocks/profile';

const mock = new MockAdapter(axios, { delayResponse: 200 });

function log(request, response) {
  console.log('')
  console.log(`Request ${request.method.toUpperCase()} ${request.url}`);
  if (request.data) {
    console.log('with body:');
    console.log(request.data);
  }
  console.log('Response:');
  console.log(response);
}

function reply(data) {
  return function(config) {
    log(config, data);
    
    return [200, data];
  }
}

function replyOk(data) {
  return reply({ status: 'ok', ...data });
}

mock.onGet('/alarms').reply(replyOk({ items: ALARMS }));
mock.onGet('/profile').reply(replyOk({ profile: PROFILE }));

mock.onPost('/alarms').reply(replyOk());

mock.onPost(/\/alarms\/\d+/).reply(replyOk());
mock.onPost('/profile').reply(replyOk());

mock.onDelete(/\/alarms\/\d+/).reply(replyOk());
