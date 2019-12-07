<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="msg"></div>
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
        </div>
      </div>
      <div class="input">
        <span>支付余额:</span>
        <input placeholder="请输入支付余额" />
      </div>
      <div class="ways">
        <van-radio-group v-model="ways">
         
          <div class="item" @click="ways='1'">
            <img src="@/assets/way1.png" class="upDown" />余额支付
            <div class="upDown mid">
              剩余200
            </div>
            <div class="upDown right">
              <van-radio name="1"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='2'">
            <img src="@/assets/way2.png" class="upDown" />微信支付
            <div class="upDown right">
              <van-radio name="2"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='3'">
            <img src="@/assets/way3.png" class="upDown" />支付宝支付
            <div class="upDown right">
              <van-radio name="3"></van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
      <div class="sub">支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      ways:'1'
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