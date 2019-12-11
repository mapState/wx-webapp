<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="top">
      <div class="money">￥652</div>
      <div class="tip1">今日已累计奖金（元）</div>
      <div class="tip2">*抽奖资格：3次</div>
      <div class="tip3">*参与排队中拥有抽奖资格</div>
      <button type="primary" class="btn" :disabled="true">
        <van-count-down :time="time" format="抽奖倒计时：HH:mm:ss" />
      </button>
    </div>
    <div class="nav">
      <div class="title">昨日数据</div>
      <div class="data">
        <div class="item">
          <div class="num">1136</div>参与总人次
          <span></span>
        </div>
        <div class="item">
          <div class="num">1136</div>已免单人次
          <span></span>
        </div>
        <div class="item">
          <div class="num">1136</div>已免单总奖励
        </div>
      </div>
      <div class="tab">
        <div @click="chooseTab(1)" :class="{active:tab==1}">
          <div>昨日抽奖榜</div>
          <img src="@/assets/up.png" v-show="tab==1" />
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>累计抽奖榜</div>
          <img src="@/assets/up.png" v-show="tab==2" />
        </div>
      </div>
    </div>
    <div class="tabContent">
      <div class="inner">
        <!-- <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="right upDown">
            100元
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="right upDown">
            100元
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="right upDown">
            100元
          </div>
        </div>
        <div class="last">点击加载更多</div> -->
        <empty msg="暂无数据"/>
      </div>
      <div class="line"></div>
    </div>
    <van-popup v-model="show">
      <div class="red">
        <img src="@/assets/red.png" />
        <div class="up">
          <img src="@/assets/cha.png" @click="show=false"/>
          <div class="num">5000.00</div>
          <div class="tip">恭喜您抽中奖金(元)</div>
          <div class="sub">确定</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="over">
      <div class="over">
        抱歉您来晚了，奖金已抽完~
        <div class="btn" @click="over=false">确认</div>
      </div>
    </van-popup>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar";
import empty from "@/components/empty";
export default {
  components: {
    tabbar,
    empty
  },
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      show:false,
      over:false,
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
  color: #5A3504;
}
>>> .van-popup{
  background: transparent;
}
</style>