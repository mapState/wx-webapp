<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="filter">
      <van-tabs v-model="active" title-active-color="#B8741A" title-inactive-color="#000">
        <van-tab title="全部"></van-tab>
        <van-tab title="待自取"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="list">
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:1
    };
  },
  methods: {
    init() {}
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
>>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
  border: none
}
>>> .van-tab--active{
  font-weight: 600
}
</style>