import axios from 'axios';

import '../mocks';

async function request(method, url, data, heads = {}) {
  const params = {
    method,
    url,
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...heads,
    },
  };

  try {
    const response = await axios(params);
    if (response && response.data) {
      return response.data;
    } else {
      return { status: 'No data from mocks' };
    }
  } catch (error) {
    return error;
  }
}

async function get(url) {
  return await request('get', url);
}

async function post(url, data) {
  return await request('post', url, data);
}

async function del(url) {
  return await request('delete', url);
}

export default { get, post, del };
