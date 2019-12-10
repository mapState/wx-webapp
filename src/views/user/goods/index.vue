<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav" @click="$router.go(-1)">
      <img src="@/assets/left.png" class="upDown left" />
      <div class="mid">
        <a href>
          <div>
            商品
            <img src="@/assets/up.png" class="leftRight" />
          </div>
        </a>
        <div>详情</div>
        <div>评价</div>
      </div>
      <div class="right">
        <img src="@/assets/cart2.png" />

        <div class="dot">11</div>
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://hiphotos.baidu.com/news/crop%3D0%2C94%2C745%2C500%3Bq%3D80%3B/sign=d0b0ac40f2faaf5190acdbffb164b8d7/b7003af33a87e9502b81f70a1f385343faf2b4c5.jpg"
            style="width:100%"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://t12.baidu.com/it/u=2023782626,2786298292&fm=173&app=49&f=JPEG?w=312&h=208&s=5684DF0D6F513AC004B4F5B503008080"
            style="width:100%"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="dots">1/3</div>
    </div>
    <div class="info">
      <div class="name">大闸蟹 清蒸美味香甜的XXXXXXXXXXX</div>
      <div class="money">
        <div style="color:#FF3B30">￥10~20</div>
        <div>销量：10</div>
        <div>快递包邮</div>
      </div>
    </div>
    <div class="ruler">
      购买排队免单
      <span>活动规则</span>
    </div>
    <div class="ruler" style="border:none" @click="show=true">
      选择规格
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="line"></div>
    <div class="ruler">
      评价（30）
      <span style="color:#FF3B30">查看全部</span>
    </div>
    <div class="ruler" style="border:none">图文详情</div>
    <div class="line"></div>
    <div class="bottom">
      <div>
        <img src="@/assets/return.png" class="leftRight" />
        <p>返回首页</p>
      </div>
      <div>
        <img src="@/assets/shou.png" class="leftRight" />
        <p>收藏店铺</p>
      </div>
      <div @click="show=true">加入购物车</div>
      <div @click="show=true">立即购买</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="detail">
        <div class="top">
          <img src="@/assets/cover.png" />
          <div class="num">￥10~20</div>已选XX规格
        </div>
        <div class="sizes">
          <div class="name">规格</div>
          <div class="item">XXXXXX</div>
          <div class="item">XXXXXX</div>
          <div class="item">XXXXXX</div>
          <div class="item">XXXXXX</div>
          <div class="item">XXXXXX</div>
          <div class="item">XXXXXX</div>
        </div>
        <div class="num">数量 <div class="right upDown"><van-stepper v-model="value" /></div></div>
        <div class="line2"></div>
        <div class="buy">
          <div>加入购物车</div>
          <div>确定购买</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      value:1
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
>>> .van-popup {
  background: transparent;
}
</style>