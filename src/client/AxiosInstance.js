import axios from 'axios';
import appletAdapter from 'axios-miniprogram-adapter';

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:8080',
});

Axios.defaults.adapter = appletAdapter;

export default Axios;
