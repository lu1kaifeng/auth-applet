import UserClient from '../client/UserClient';
import AxiosInstance from '../client/AxiosInstance';

export default async function Login(userName, password) {
  wx.setStorageSync('token', (await UserClient.login(userName, password)).data);
  AxiosInstance.defaults.headers.common['x-api-key'] = (await UserClient.login(userName, password)).data;
}
