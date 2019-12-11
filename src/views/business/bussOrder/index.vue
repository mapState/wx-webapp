<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="filter">
      <van-tabs v-model="active" title-active-color="#B8741A" title-inactive-color="#000" :swipe-threshold="5">
        <van-tab title="全部"></van-tab>
        <van-tab title="待自取"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="list">
      <div class="item">
        <div class="name">
          <img src="@/assets/market2.png" class="upDown" />华莱士
          <span>待自取</span>
        </div>
        <div class="goodsWrap">
          <div class="goods">
            <img src="@/assets/cover.png" class="upDown" />
            <div class="title">香辣鸡腿堡</div>
            <div class="size">规格:5分甜 总价:￥24</div>
            <div class="right">X1</div>
          </div>
          <div class="goods">
            <img src="@/assets/cover.png" class="upDown" />
            <div class="title">香辣鸡腿堡</div>
            <div class="size">规格:5分甜 总价:￥24</div>
            <div class="right">X1</div>
          </div>
        </div>
        <div class="total">下单时间：2019-10-21 19:30:56 <span>共3件商品，合计126元</span></div>
        <div class="btns">
          <div>查看单号</div>
          <div>确认收货</div>
        </div>
      </div>
      <div class="item">
        <div class="name">
          <img src="@/assets/market2.png" class="upDown" />华莱士
          <span>待自取</span>
        </div>
        <div class="goodsWrap">
          <div class="goods">
            <img src="@/assets/cover.png" class="upDown" />
            <div class="title">香辣鸡腿堡</div>
            <div class="size">规格:5分甜 总价:￥24</div>
            <div class="right">X1</div>
          </div>
          <div class="goods">
            <img src="@/assets/cover.png" class="upDown" />
            <div class="title">香辣鸡腿堡</div>
            <div class="size">规格:5分甜 总价:￥24</div>
            <div class="right">X1</div>
          </div>
        </div>
        <div class="total">下单时间：2019-10-21 19:30:56 <span>共3件商品，合计126元</span></div>
        <div class="btns">
          <div>查看单号</div>
          <div>确认收货</div>
        </div>
      </div>
    </div>
    <van-popup v-model="show">
      <div class="kuaidi">
        <div class="title">快递单号</div>
        <div class="name">快递公司：顺丰</div>
        <div class="num">快递单号：123456789000000000</div>
        <div class="btn" @click="coby">一键复制</div>
      </div>
    </van-popup>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import { coby } from "@/utils/utils";
import tabbar from "@/components/bussTabBar";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      show: false,
      active: 0 || this.$route.query.active
    };
  },
  methods: {
    toNext(msg,active) {
      this.$router.push({
        path: msg
      });
    },
    coby() {
      coby("11", this);
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
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-popup {
  background: transparent;
}
>>> .van-tab--active {
  font-weight: 600;
}
>>> .van-tabs__line{
  background-color: #B8741A;
}
</style>