<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="msg">
      <div class="info">
        <van-swipe :autoplay="3000" vertical :show-indicators="false" :touchable="false">
          <van-swipe-item>
            <div class="wrap">
              <div class="item">
                <img src="@/assets/dui.png" />
                <span>张三张三3</span>
                <span>2小时前免单263元</span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="wrap">
              <div class="item">
                <img src="@/assets/dui.png" />
                <span>2333</span>
                <span>2小时前免单263元</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="content">
      <div class="contact">
        <div class="name">万州烤鱼（嘉里中心店）</div>
        <div class="labels">
          <span>美食</span>
          <span>美食</span>
        </div>
        <div class="position">
          <img src="@/assets/po2.png" class="im1" />
          <span class="out">杭州市西湖区定安路265号</span>
          <img src="@/assets/po3.png" class="im2" />
          <span class="shu"></span>
          <a href="tel:13512341234">
            <img src="@/assets/mobile.png" class="im3" />
          </a>

          <div class="instro out">公告:今日全场8折XXXXXX...</div>
        </div>
      </div>
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
          <div>免单排位</div>
          <img src="@/assets/up.png" v-show="tab==1" />
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>已免单榜</div>
          <img src="@/assets/up.png" v-show="tab==2" />
        </div>
        <div @click="chooseTab(3)" :class="{active:tab==3}">
          <div>抽奖池</div>
          <img src="@/assets/up.png" v-show="tab==3" />
        </div>
      </div>
    </div>
    <div class="tabContent" v-show="tab==1||tab==2">
      <div class="inner">
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown">
            <div class="money">80元</div>待奖励
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown">
            <div class="money">80元</div>待奖励
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown" :class="{rc:tab==2}">
            <div class="money">80元</div>待奖励
          </div>
        </div>
        <div class="last">点击加载更多</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent3" v-show="tab==3">
      <div class="inner">
        <div class="money">￥652</div>
        <div class="tip1">今日已累计奖金（元）</div>
        <div class="tip2">*每日抽奖时间为:18:00-19</div>
        <div class="tip3">*参与排队中拥有抽奖资格</div>
        <button type="primary" class="time" :disabled="true">
          <van-count-down :time="time" format="抽奖倒计时：HH:mm:ss" />
        </button>
      </div>
      <div class="line"></div>
    </div>
    <div class="bottom">
      <div>
        <img src="@/assets/return.png" class="leftRight" />
        <p>返回首页</p>
      </div>
      <div>
        <img src="@/assets/shou.png" class="leftRight" />
        <p>收藏店铺</p>
      </div>
      <div>购买商品</div>
      <div>支付买单</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000
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
  color: rgba(255, 59, 48, 1);
}
</style>