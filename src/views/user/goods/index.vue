<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown left" @click="$router.go(-1)" />
      <div class="mid">
        <div @click="chooseNav(1)" :class="{active:nav==1}">
          商品
          <img src="@/assets/up.png" class="leftRight" v-show="nav==1" />
        </div>
        <div @click="chooseNav(2)" :class="{active:nav==2}">
          详情
          <img src="@/assets/up.png" class="leftRight" v-show="nav==2" />
        </div>
        <div @click="chooseNav(3)" :class="{active:nav==3}">
          评价
          <img src="@/assets/up.png" class="leftRight" v-show="nav==3" />
        </div>
      </div>
      <div class="right" @click.stop="toNext('/carts',$route.query.busiUserId)">
        <img src="@/assets/cart2.png" />

        <div class="dot">{{cartDetail.count}}</div>
      </div>
    </div>
    <div class="banner" id="nav1">
      <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item v-for="(item,i) in goodDetail.image" :key="i">
          <img :src="url+goodDetail.image" style="width:100%" />
        </van-swipe-item>
      </van-swipe>
      <div class="dots">{{current}}/{{goodDetail.image.length}}</div>
    </div>
    <div class="info">
      <div class="name">{{goodDetail.good_title}}</div>
      <div class="money">
        <div style="color:#FF3B30">￥{{goodDetail.minMoney/100}}~{{goodDetail.maxMoney/100}}</div>
        <div>销量：{{goodDetail.sales}}</div>
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
    <div class="ruler" id="nav3">
      评价（{{goodDetail.evaluateCount}}）
      <span style="color:#FF3B30" @click="toNext('/words',$route.query.id)">查看全部</span>
    </div>
    <div class="ruler" style="border:none" id="nav2">图文详情</div>
    <div class="imgDetail">
      <img :src="url+goodDetail.image" style="width:100%" />
    </div>
    <div class="line" style="height:150px"></div>
    <div class="bottom">
      <div @click="$router.push({path: '/home'});">
        <img src="@/assets/return.png" class="leftRight" />
        <p>返回首页</p>
      </div>
      <div @click="collect">
        <img src="@/assets/shou.png" class="leftRight" v-if="status==0" />
        <img src="@/assets/starA.png" class="leftRight" v-else />
        <p>{{status==0?'收藏店铺':'取消收藏'}}</p>
      </div>
      <div @click="show=true">加入购物车</div>
      <div @click="show=true">立即购买</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="detail">
        <div class="top">
          <img :src="url+size.image" />
          <div class="nums">￥{{size.money/100}}</div>
          已选{{size.name}}规格
        </div>
        <div class="sizes">
          <div class="name">规格</div>
          <div
            class="item"
            v-for="(item,i) in goodDetail.detailList"
            :key="i"
            @click="chooseSize(item)"
            :class="{active:size.id==item.id}"
          >{{item.name}}</div>
        </div>
        <div class="num">
          数量
          <div class="right upDown">
            <van-stepper v-model="value" />
          </div>
        </div>
        <div class="line2"></div>
        <div class="buy">
          <div @click="cartAdd">加入购物车</div>
          <div @click="toNext('/orderDetail',size.id,value)">确定购买</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {
  goodDetail,
  getAllGoodType,
  collectStatus,
  collect,
  cartInfo,
  cartAdd
} from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import $ from "jquery";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      show: this.$route.query.where ? true : false,
      value: 1,
      current: 1,
      status: "",
      goodDetail: {
        image: []
      },
      cartDetail: {},
      size: {},
      nav: 1
    };
  },
  methods: {
    toNext(msg, id, count) {
      console.log(count)
      this.$router.push({
        path: msg,
        query: {
          id,
          count,
          busiUserId:this.$route.query.busiUserId
        }
      });
    },
    chooseSize(item) {
      this.size = item;
    },
    onChange(index) {
      this.current = index;
    },
    collect() {
      collect({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.collectStatus();
      });
    },
    chooseNav(e) {
      this.nav = e;
      $("html,body").animate(
        { scrollTop: $("#nav" + e).offset().top - $(".nav").height() },
        400
      );
    },
    cartAdd() {
      cartAdd({ goodDetailId: this.size.id, count: this.value }).then(res => {
        cartInfo({ busiUserId: this.$route.query.busiUserId }).then(res => {
          this.cartDetail = res.data;
        });
        this.$toast({
          message: res.message
        });
      });
    },
    collectStatus() {
      collectStatus({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.status = res.data;
      });
    },
    changeFloor(e) {
      this.flag = false;
      $("html,body").animate(
        { scrollTop: $("#f" + (e + 1)).offset().top - $(".top").height() },
        400
      );
      setTimeout(() => {
        this.flag = true;
      }, 400);
    },

    init() {
      this.collectStatus();
      goodDetail({ goodId: this.$route.query.id }).then(res => {
        this.goodDetail = res.data;
        try {
          this.goodDetail.image = this.goodDetail.image.split(",");
        } catch (error) {}
        this.size = res.data.detailList[0];
      });
      cartInfo({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.cartDetail = res.data;
      });
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
>>> .van-popup {
  background: transparent;
}
</style>