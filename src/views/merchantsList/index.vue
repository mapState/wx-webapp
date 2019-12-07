<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" />
    </div>
    <div class="tabs">
      <van-tabs :swipe-threshold="5" title-inactive-color="#333" title-active-color="#000">
        <van-tab title="标签 1"></van-tab>
        <van-tab title="标签 2"></van-tab>
        <van-tab title="标签 3"></van-tab>
        <van-tab title="标签 4"></van-tab>
        <van-tab title="标签 4"></van-tab>
        <van-tab title="标签 4"></van-tab>
        <van-tab title="标签 4"></van-tab>
      </van-tabs>
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">
        推荐
        <img src="@/assets/uda.png" v-if="sort==1"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        距离
        <img src="@/assets/uda.png" v-if="sort==2"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        人气
        <img src="@/assets/uda.png" v-if="sort==3"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">
        优惠
        <img src="@/assets/uda.png" v-if="sort==4"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <img src="@/assets/tuijian.png" class="tuijian" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">600m</div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <img src="@/assets/tuijian.png" class="tuijian" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">600m</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort:1
    };
  },
  methods: {
    chooseSort(e){
      this.sort=e
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