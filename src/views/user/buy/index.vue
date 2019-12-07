<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/left.png" class="upDown" />
      <van-search placeholder="商品名称" background="#fff" />
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">
        综合
      </div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        销量
        <img src="@/assets/uda.png" v-if="sort==2"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        价格
        <img src="@/assets/uda.png" v-if="sort==3"/>
        <img src="@/assets/ud.png" v-else/>
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">
        分类
      </div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png"/>
        <div class="name">大闸蟹 清蒸美味香甜的大闸蟹 清蒸美味香甜的</div>
        <div class="price">￥25<img src="@/assets/cart.png"/></div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div class="cart">
      <div>
        <img src="@/assets/mobile2.png"/>
        <div>联系商家</div>
      </div>
      <div>
        <img src="@/assets/cart.png" class="upDown"/>
        ￥50
        <div class="tip">支持自取，差5元免物流</div>
      </div>
      <div>支付</div>
    </div>
    <van-popup v-model="show" position="top">
      <div class="cates">
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
      </div>
      <div class="btn">取消 <span>确定</span></div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort:1,
      show:false
    };
  },
  methods: {
    chooseSort(e){
      this.sort=e
      this.show=true
    },
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
>>> .van-search__content {
  background-color: #fff;
}
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 307px;
  height: 36px;
  margin: 0 auto;
}
</style>