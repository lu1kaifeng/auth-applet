import btoa from 'btoa';
import AxiosInstance from './AxiosInstance';

export default class AntiqueClient {
  static postAntique(antique) {
    return AxiosInstance.post('/antique', antique, {});
  }

  static postAntiqueCert(id, certB64) {
    return AxiosInstance.post(`/antique/cert/${id}`, certB64, {});
  }

  static async getAntique(pageNo, pageLen) {
    return (await AxiosInstance.get(`/antique/page/${pageNo}/${pageLen}`)).data;
  }
  static async getAntiquePic(id) {
    return AxiosInstance.get(`/antique/pic/${id}`, { responseType: 'arraybuffer' }).then((response) => {
      const image = btoa(new Uint8Array(response.data)
        .reduce((data, byte) => data + String.fromCharCode(byte), ''));
      return image;
    });
  }

  static async getAntiqueCert(id) {
    return AxiosInstance.get(`/antique/cert/${id}`, { responseType: 'text' });
  }

  static async getAntiqueDto(id) {
    return (await AxiosInstance.get(`/antique/${id}`)).data;
  }
  static async searchAntique(keyWord, pageNo, pageLen) {
    return (await AxiosInstance.get(`/antique/search/page/${pageNo}/${pageLen}?key=${keyWord}`)).data;
  }
  static postAntiqueWearAndTear(id, wearAndTear) {
    return AxiosInstance.post(`/antique/wearAndTear/${id}`, wearAndTear, {});
  }
}
