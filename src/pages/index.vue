<template>

  <div style="width: 100%; height:100%">
    <div style="position: absolute;top: 30%;left:50%;transform: translate(-50%,-50%);background: linear-gradient(to right, #4bb0ff, #6149f6);border-radius: 100%;padding: 2em ">
        <van-icon @click="onScan" name="photograph" style="color: white" size="5em" />
    </div>

  </div>
</template>

<script>
import card from '@/components/card';
import QRScan from '../func/QRScan';
import LoadUser from '../func/LoadUser';

export default {
  mpType: 'page',

  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
    };
  },

  components: {
    card,
  },

  methods: {
    async onScan() {
      if (false) {
        const id = (await QRScan()).result;
        this.$router.push({
          path: '/pages/viewer',
          query: { id },
        });
      } else {
        this.$router.push({
          path: '/pages/viewer',
          query: { id: 4 },
        });
      }
    },
    bindViewTap() {
      const url = '/packageA/logs';
      this.$router.push(url);
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
    clickHandle(msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev);
    },
  },

  mounted() {
    LoadUser();
    // 调用应用实例的方法获取全局数据
    if (wx.getStorageSync('token') === '') {
      this.$router.push('/pages/login');
    }
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
