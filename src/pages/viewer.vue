<template>
  <div style="width:100%;height:100%">
    <div v-if="loaded">
    <van-image
      width="10rem"
      height="10rem"
      fit="contain"
      v-if="pic !== null"
      :src="pic"
    />
    <van-cell-group title="详细信息">
      <van-cell title="名称" :value="antique.name" >
      </van-cell>
      <van-cell title="描述" :label="antique.desp" />
    </van-cell-group>
    </div>
    </div>
</template>

<script>
  import AntiqueClient from '../client/AntiqueClient';

  export default {
    name: 'viewer',
    data: () => ({
      antique: null,
      loaded: false,
      pic: null,
    }),
    async mounted() {
      console.log(this.$route.query);
      this.antique = await AntiqueClient.getAntiqueDto(this.$route.query.id);
      console.log(this.antique);
      this.pic = `data:image/jpeg;base64, ${await AntiqueClient.getAntiquePic(this.antique.id)}`;
      console.log(this.pic);
      this.loaded = true;
    },
  };
</script>

<style scoped>

</style>
