import axios from './helpers/axios';

export function all() {
  return axios.get('account/techguide/4');
}
