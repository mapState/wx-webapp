<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item" style="border-bottom:1px solid #ddd">
      <van-field v-model="courierCompany" label="快递公司：" placeholder="请输入快递公司"/>
    </div>
    <div class="item" style="border-bottom:10px solid #f2f2f2">
      <van-field v-model="courierNumber" label="快递单号：" placeholder="请输入快递单号"/>
    </div>
    <div class="address">
      <div class="item">
        <img src="@/assets/position.png" class="left upDown">
        <div class="name">
          {{detail.selfName}}
          <span>{{detail.selfPhone}}</span>
        </div>
        <div class="detail">{{detail.regionAddress+' '+detail.address }}</div>
      </div>
    </div>
    <div class="kone"></div>
    <div class="goods">
      <div class="owner">
        <img :src="url+detail.userLogo" class="upDown two">
        {{detail.userName}}
      </div>
      <div class="item" v-for="(item,i) in detail.list" :key="i">
        <img :src="url+item.image" class="upDown">
        <div class="name">{{item.goodName}}</div>
        <div class="size">规格:{{item.goodDetailName}}</div>
        <div class="money">￥{{item.money/100*item.count}}</div>
        <div class="right">X{{item.count}}</div>
      </div>
    </div>
    <div class="total" style="border:none">运费：￥0.00
      <div class="right">
        <span>
          共
          <span>{{detail.totalNum}}</span>件商品
        </span>
        <span class="hou">
          共计:
          <span>￥{{detail.totalMoney/100}}</span>
        </span>
      </div>
    </div>
    <div class="orderNum">
      订单编号
      <span>{{detail.orderId}}</span>
    </div>
    <div class="btn">
      <div class="sub" @click="sendGoods">确定发货</div>
    </div>
  </div>
</template>

<script>
import { orderDetail, sendGoods } from "@/api/bussiness";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      checked: false,
      show: true,
      courierCompany: "",
      courierNumber: "",
      detail: {
        list: []
      }
    };
  },
  methods: {
    sendGoods() {
      sendGoods({
        courierCompany: this.courierCompany,
        courierNumber: this.courierNumber,
        orderId: this.$route.query.orderId
      }).then(res => {
        if (res.code == 200) {
          this.$toast({
            message: res.message
          });
          this.$router.push({
            path: "/bussOrder"
          });
        } else {
          this.$toast({
            message: res.message
          });
          
        }
      });
    },
    init() {
      orderDetail({ orderId: this.$route.query.orderId }).then(res => {
        this.detail = res.data;
        let sum = 0;
        for (let j = 0; j < this.detail.list.length; j++) {
          sum += this.detail.list[j].count;
        }
        this.detail.totalNum = sum;
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
>>> .van-field__label {
  width: auto;
  font-size: 14px;
  font-weight: bold;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-field__control:disabled {
  color: #000;
  -webkit-text-fill-color: #000;
}
</style>