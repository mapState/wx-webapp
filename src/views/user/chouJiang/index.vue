<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="total">累计抽奖获得：500元</div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">
          肉蟹煲(湖滨银泰店)
          <span>抽奖</span>
        </div>
        <div class="instro out">抽奖时间 2019-10-20 19:30:56</div>
        <div class="right upDown">
          <div class="money">80元</div>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">
          肉蟹煲(湖滨银泰店)
          <span>抽奖</span>
        </div>
        <div class="instro out">抽奖时间 2019-10-20 19:30:56</div>
        <div class="right upDown">
          <div class="money">80元</div>
        </div>
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