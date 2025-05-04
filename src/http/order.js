import axios from './helpers/axios';

export function create(token, body) {
  return axios.post(
    'account/save/techguide',
    body,
    { headers: { 'Authorization': 'Bearer ' + token } },
  );
}
