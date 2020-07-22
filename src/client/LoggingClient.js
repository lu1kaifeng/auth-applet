import AxiosInstance from './AxiosInstance';

export default class LoggingClient {
  static async getLogPage(pageNo, pageLen) {
    return (await AxiosInstance.get(`/log/page/${pageNo}/${pageLen}`)).data;
  }
}
