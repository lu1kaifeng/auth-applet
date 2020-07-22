import AxiosInstance from '../client/AxiosInstance';

export default function () {
  AxiosInstance.defaults.headers.common['x-api-key'] = wx.getStorageSync('token');
}
