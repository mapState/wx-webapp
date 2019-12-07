<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" />
    </div>

    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">
          <img src="@/assets/shou.png" />
        </div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">
          <img src="@/assets/starA.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: 1
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
    },
    init() {}
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
@import "../home/style/index.scss";
</style>
<style scoped>
>>> .van-search__content {
  background-color: #fff;
}
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 346px;
  height: 36px;
  margin: 0 auto;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-tabs__line {
  display: none;
}
>>> .van-tab--active {
  font-weight: 600;
}
</style>