import AxiosInstance from './AxiosInstance';

export default class UserClient {
  static login(userName, password) {
    return AxiosInstance.get(`/login?userName=${userName}&password=${password}`);
  }
  static register(credential) {
    return AxiosInstance.post('/register', credential, {});
  }
  static updateVerificationAuth(userId, verifiable) {
    return AxiosInstance.put(`/user/verifiable/${userId}`, verifiable, {});
  }
  static async getAllUser(pageNo, pageLen) {
    return (await AxiosInstance.get(`/user/page/${pageNo}/${pageLen}`, {})).data;
  }
  static async getUser() {
    return (await AxiosInstance.get('/user', {})).data;
  }

  static updateUserType(userId, type) {
    return AxiosInstance.put(`/user/type/${userId}?type=${type}`);
  }

  static async searchUser(keyWord, pageNo, pageLen) {
    return (await AxiosInstance.get(`/user/search/page/${pageNo}/${pageLen}?key=${keyWord}`)).data;
  }

  static updateUserPassword(userId, password) {
    return AxiosInstance.put(`/user/password/${userId}?password=${password}`);
  }

  static delUser(userId) {
    return AxiosInstance.delete(`/user/${userId}`);
  }
}
