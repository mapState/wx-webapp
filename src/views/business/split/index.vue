<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      免单总金额:
      <span>￥200</span>
    </div>
    <div class="item">
      拆分笔数
      <div class="step upDown">
        <van-stepper v-model="value" />
      </div>
    </div>
    <div class="item" style="border-bottom:10px solid #f2f2f2">
      每笔奖励
      <span class="num">￥100</span>
    </div>
    <div class="item">
      免单用户
      <div class="user">
        <img src="@/assets/cover.png" class="upDown" />
        玩大嘴爱
      </div>
    </div>
    <div class="item" style="font-weight:500;">
      订单编号
      <span class="time">1234567890000000</span>
    </div>
    <div class="item" style="font-weight:500;border:none">
      完成时间
      <span class="time">2019-10-08  18:30</span>
    </div>
    <div class="sub">确定拆分</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1
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
</style>