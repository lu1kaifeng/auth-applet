<template>
  <div style="width:100%;height:100%">

    <div v-if="loaded">
    <van-image
      width="100%"
      height="10rem"
      fit="contain"
      :src="pic"
      @click="previewImage"
    />

    <van-cell-group title="详细信息">
      <van-cell title="名称" :value="antique.name" >
      </van-cell>
      <van-cell title="描述" :label="antique.desp" />
    </van-cell-group>
      <van-cell-group title="审核状态">
        <ver-stepper :antique="antique"/>
      </van-cell-group>
    </div>
    <div v-else>
      <div>
        <van-loading type="spinner"  style="position: absolute;top: 50%;left:50%;transform: translate(-50%,-50%);border-radius: 100%;" >
          加载中...
        </van-loading>
      </div>
    </div>
    </div>
</template>

<script>
  import AntiqueClient from '../client/AntiqueClient';
  import VerStepper from '../components/VerStepper';

  export default {
    name: 'viewer',
    components: { VerStepper },
    data: () => ({
      antique: null,
      loaded: false,
      pic: '',
    }),
    async mounted() {
      this.antique = await AntiqueClient.getAntiqueDto(this.$route.query.id);
      this.pic = `data:image/jpeg;base64, ${await AntiqueClient.getAntiquePic(this.antique.id)}`;
      this.loaded = true;
    },
    methods: {
      previewImage() {
        wx.previewImage({ current: this.pic, urls: [this.pic] });
      },
    },
  };
</script>

<style scoped>

</style>
