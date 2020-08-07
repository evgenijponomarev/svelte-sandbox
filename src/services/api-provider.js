import axios from 'axios';

import '../mocks';

async function get(url) {
  try {
    const response = await axios.get(url);
    if (response && response.data && response.data.items)
    return (response && response.data) || { status: 'No data from mocks' };
  } catch (error) {
    return error;
  }
}

export default { get };
