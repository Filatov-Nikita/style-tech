import axios from './helpers/axios';

export function sendCode(body) {
  return axios.post('account/send-token', body);
}

export function checkCode(body) {
  return axios.post('account/check-token', body);
}
