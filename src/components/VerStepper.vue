<template>
  <van-steps :steps="steps" :active-icon="antique.invalid?'clear':'checked'"
             :active-color="antique.invalid?'#FF3333':'#07c160'" :active="antique.verificationProcesses - 1" />
</template>

<script>
  import VerClient from '../client/VerClient';

  export default {
    name: 'VerStepper',
    props: {
      antique: Object,
    },
    data: () => ({
      steps: [
        {
          text: '步骤一',
          desc: '',
        },
        {
          text: '步骤二',
          desc: '',
        },
        {
          text: '步骤三',
          desc: '',
        },
      ],
    }),
    async mounted() {
      const vers = await VerClient.getVerification(this.antique.id);
      console.log(this.antique.verificationProcesses);
      // eslint-disable-next-line no-unused-vars
      const model = this;
      vers.forEach((value, index) => {
        model.steps[index].desc = value.content;
      });
    },
  };
</script>

<style scoped>

</style>
