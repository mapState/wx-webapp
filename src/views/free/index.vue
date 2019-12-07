<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <div class="data">
        <div class="item">
          <div class="num">1136</div>消费过的商家
        </div>
        <div class="item">
          <div class="num">1136</div>消费次数
        </div>
        <div class="item">
          <div class="num">1136</div>总免单(元)
        </div>
        <div class="item">
          <div class="num">1136</div>待免单(元)
        </div>
      </div>
      <div class="tab">
        <div @click="chooseTab(1)" :class="{active:tab==1}">
          <div>待免单奖励</div> 
          <img src="@/assets/up.png" v-show="tab==1" />
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>已免单奖励</div>
          <img src="@/assets/up.png" v-show="tab==2" />
        </div>
      </div>
    </div>
    <div class="tabContent" v-show="tab==1">
      <div class="list">
        <div class="item">
          <img src="@/assets/cover.png" class="cover" />
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="labels">
            <div>1天前消费</div>
            <div>免单排名第8名</div>
          </div>
          <div class="instro out">商家当前累计抽奖池：625元</div>
          <div class="right upDown">
            <div class="money">80元</div>待奖励
          </div>
        </div>
        <div class="item">
          <img src="@/assets/cover.png" class="cover" />
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="labels">
            <div>1天前消费</div>
            <div>免单排名第8名</div>
          </div>
          <div class="instro out">商家当前累计抽奖池：625元</div>
          <div class="right upDown">
            <div class="money">80元</div>待奖励
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent2" v-show="tab==2">
      <div class="list">
        <div class="item">
          <img src="@/assets/cover.png" class="cover" />
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="instro out">商家当前累计抽奖池：625元</div>
          <div class="right upDown">
            <div class="money">80元</div>待奖励
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import tabbar from "../../../components/tabBar";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      show: false,
      over: true
    };
  },
  methods: {
    chooseTab(e) {
      this.tab = e;
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
</style>
<style scoped>
>>> .van-swipe {
  height: 30px;
}
>>> .van-count-down {
  font-size: 15px;
  font-weight: bold;
  color: #5a3504;
}
>>> .van-popup {
  background: transparent;
}
</style>