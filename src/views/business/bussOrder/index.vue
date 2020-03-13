<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="filter">
      <van-tabs
        v-model="active"
        title-active-color="#B8741A"
        title-inactive-color="#000"
        :swipe-threshold="5"
        @click="getOrderList"
      >
        <van-tab title="全部"></van-tab>
        <van-tab title="待自取"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in orderList" :key="i" @click="toNext('/bussOrderDetail',item.orderId)">
        <div class="name">
          <img :src="url+item.userLogo" class="upDown" style="border-radius:50%" />
          {{item.userName}}
          <span>{{item.orderStatus==1?'待支付':item.orderStatus==2?'待发货':item.orderStatus==3?'待自取':item.orderStatus==4?'待收货':item.orderStatus==5?'已完成':'已退款'}}</span>
        </div>
        <div class="goodsWrap">
          <div class="goods" v-for="(goods,g) in item.orderDetail" :key="g">
            <img :src="url+goods.image" class="upDown" />
            <div class="title">{{goods.goodName}}</div>
            <div class="size">规格:{{goods.goodDetailName}} 总价:￥{{goods.money/100*goods.count}}</div>
            <div class="right">X{{goods.count}}</div>
          </div>
        </div>
        <div class="total">
          下单时间：{{item.createDate}}
          <span>共{{item.totalNum}}件商品，合计{{(item.totalMoney/100).toFixed(2)}}元</span>
        </div>
        <div class="btns">
          <div @click.stop="toNext('/bussOrderDetail',item.orderId)" v-show="item.orderStatus==2||item.orderStatus==3||item.orderStatus==3">退款</div>
          <div @click.stop="toNext('/send',item.orderId)" v-show="item.orderStatus==2">快递发货</div>
          
          <div @click.stop="toNext('/bussOrderDetail',item.orderId)" v-show="item.orderStatus==3">自取发货</div>
          <div @click.stop="toNext('/split',item.orderId)" v-show="item.orderStatus==5&&!isSplit">免单拆分</div>
          <div @click.stop="true">
            <a :href="'tel:'+item.userPhone" style="color:#B8741A">联系买家</a> 
          </div>
        </div> 
      </div>
      <empty msg="暂无数据" v-show="orderList.length==0"/>
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
import { orderList } from "@/api/bussiness";
import tabbar from "@/components/bussTabBar";
import empty from "@/components/empty";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  components: {
    tabbar,
    empty
  },
  data() {
    return {
      show: false,
      url: UPLOAD_DOMAIN,
      orderList: [],
      active: 0 || this.$route.query.active
    };
  },
  methods: {
    toNext(msg, orderId) {
      console.log(orderId)
      this.$router.push({
        path: msg,
        query:{
          orderId
        }
      });
    },
    coby() {
      coby("11", this);
    },
    getOrderList(e) {
      orderList({ page: 1, size: 100, type: e + 1 || 1 }).then(res => {
        this.orderList = res.data.data;
        for (let i = 0; i < this.orderList.length; i++) {
          let sum = 0;
          for (let j = 0; j < this.orderList[i].orderDetail.length; j++) {
            sum += this.orderList[i].orderDetail[j].count;
          }
          this.orderList[i].totalNum = sum;
        }
      });
    },
    init() {
      this.getOrderList();
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
>>> .van-tabs__line {
  background-color: #b8741a;
}
</style>