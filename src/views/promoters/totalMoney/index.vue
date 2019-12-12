<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="top">
      区域总营业额(元)
      <div class="right">￥1511111</div>
    </div>
    <div class="title">店铺详情</div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="mid">
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="time">2018-10-05~至今</div>
          <div class="tip">总营业额(元)</div>
        </div>
        <div class="num upDown">￥15111</div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="mid">
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="time">2018-10-05~至今</div>
          <div class="tip">总营业额(元)</div>
        </div>
        <div class="num upDown">￥15111</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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