<template>
  <van-row style="position: absolute;top: 30%;left:50%;width: 100%;transform: translate(-50%,-50%);">
    <van-col span="14" offset="5"><van-field
      placeholder="请输入用户名"
      :value="userName"
      @change="userName = $event.mp.detail"
    /></van-col>
  <van-col span="14" offset="5"><van-field
    placeholder="请输入密码"
    :value="password"
    @change="password = $event.mp.detail"
    type="password"
  /></van-col>
    <van-col/>
    <van-col span="14" offset="5">
      <van-button plain @click="onLogin" type="primary" :disabled="userName === '' || password === ''">登录</van-button>
    </van-col>
  </van-row>
</template>

<script>
  import Login from '../func/Login';

  export default {
    name: 'login',
    data: () => ({
      userName: '',
      password: '',
    }),
    watch: {
    },
    methods: {
      async onLogin() {
        await Login(this.userName, this.password);
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>

</style>
