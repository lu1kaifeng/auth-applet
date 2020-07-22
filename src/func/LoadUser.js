import AxiosInstance from '../client/AxiosInstance';

export default function () {
  if (wx.getStorageSync('token') !== '') AxiosInstance.defaults.headers.common['x-api-key'] = wx.getStorageSync('token');
}
