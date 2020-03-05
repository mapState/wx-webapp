<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      免单总金额:
      <span>￥{{detail.totalMoney/100}}</span>
    </div>
    <div class="item">拆分笔数
      <div class="step upDown">
        <van-stepper v-model="value"/>
      </div>
    </div>
    <div class="item" style="border-bottom:10px solid #f2f2f2">
      每笔奖励
      <span class="num">￥{{detail.totalMoney/100/value}}</span>
    </div>
    <div class="item">免单用户
      <div class="user">
        <img :src="url+detail.userLogo" class="upDown">
        {{detail.userName}}
      </div>
    </div>
    <div class="item" style="font-weight:500;">
      订单编号
      <span class="time">{{detail.orderId}}</span>
    </div>
    <div class="item" style="font-weight:500;border:none">
      完成时间
      <span class="time">{{detail.createDate}}</span>
    </div>
    <div class="sub" @click="orderSplit">确定拆分</div>
  </div>
</template>

<script>
import { orderDetail, orderSplit, storeSplit } from "@/api/bussiness";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      value: 2,
      url: UPLOAD_DOMAIN,
      detail: {
        list: []
      }
    };
  },
  methods: {
    orderSplit() {
      if (this.$route.query.createDate) {
        storeSplit({
          payId: this.$route.query.orderId,
          count: this.value
        }).then(res => {
          if (res.code == 200) {
            this.$router.push({
              path: "/s3",
              query:{
                a:1
              }
            });
          } else {
            this.$toast({
              message: res.message
            });
          }
        });
      } else {
        orderSplit({
          orderId: this.$route.query.orderId,
          count: this.value
        }).then(res => {
          if (res.code == 200) {
            this.$router.push({
              path: "/s3"
            });
          } else {
            this.$toast({
              message: res.message
            });
          }
        });
      }
    },
    init() {
      if (this.$route.query.createDate) {
        this.detail = this.$route.query;
        this.detail.totalMoney = this.detail.money;
        this.detail.userLogo = this.detail.image;
      } else {
        orderDetail({ orderId: this.$route.query.orderId }).then(res => {
          this.detail = res.data;
          let sum = 0;
          for (let j = 0; j < this.detail.list.length; j++) {
            sum += this.detail.list[j].count;
          }
          this.detail.totalNum = sum;
        });
      }
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
>>> .van-stepper__input {
  line-height: 30px;
}
</style>