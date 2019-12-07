<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" />
    </div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="tips">消费4次  免单4次</div>
        <div class="r1">
          <div class="num">-118</div>
          消费总额
        </div>
        <div class="r1 r2">
          <div class="num">-118</div>
          消费总额
        </div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="tips">消费4次  免单4次</div>
        <div class="r1">
          <div class="num">-118</div>
          消费总额
        </div>
        <div class="r1 r2">
          <div class="num">-118</div>
          消费总额
        </div>
      </div>
    </div>
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
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 346px;
  height: 36px;
  margin: 0 auto;
}
</style>