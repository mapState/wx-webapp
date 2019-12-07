<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <img src="@/assets/way1.png" class="top"/>
    <div class="num">2130.00</div>
    <div class="tip">余额（元）</div>
    <div class="recharge">充值</div>
    <div class="xian">提现</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    init() {

    }
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
</style>
<style scoped>

</style>