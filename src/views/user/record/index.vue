<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" />
    </div>
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="tips">消费4次 免单4次</div>
        <div class="right upDown">-118元</div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="tips">消费4次 免单4次</div>
        <div class="right upDown">-118元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      
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
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 346px;
  height: 36px;
  margin: 0 auto;
}
>>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
  border: none
}
>>> .van-dropdown-menu__title{
  padding-left: 0;
}
</style>