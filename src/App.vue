<script>
import UserClient from './client/UserClient';

export default {
  async created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('', '');
    // eslint-disable-next-line
    console.log(await UserClient.login('admin','admin'));
  },
};
</script>

<style>
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
