import AxiosInstance from './AxiosInstance';

export default class VerClient {
  static async getAntiqueNeedVerification(pageNo, pageLen) {
    return (await AxiosInstance.get(`/antique/needVerification/page/${pageNo}/${pageLen}`)).data;
  }

  static async getAntiqueAtStage(stage, pageNo, pageLen) {
    return (await AxiosInstance.get(`/antique/atVerificationStage/${stage}/page/${pageNo}/${pageLen}`)).data;
  }

  static async verifyAntique(antiqueId, ver) {
    return AxiosInstance.post(`/verify/antique/${antiqueId}`, ver);
  }

  static async getVerification(antiqueId) {
    return (await AxiosInstance.get(`/antique/verification/${antiqueId}`)).data;
  }

  static async invalidate(antiqueId) {
    return (await AxiosInstance.delete(`/antique/verification/${antiqueId}`)).data;
  }
}
