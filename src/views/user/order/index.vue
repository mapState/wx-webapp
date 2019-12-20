<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="filter">
      <van-tabs v-model="active" title-active-color="#B8741A" title-inactive-color="#000" @click="getList(active+1)">
        <van-tab title="全部"></van-tab>
        <van-tab title="待自取"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i" @click="toNext('/orderDetail',item.orderId)">
        <div class="name">
          <img src="@/assets/market2.png" class="upDown" />
          {{item.busiName}}
          <span>{{item.orderStatus==1?'待支付':item.orderStatus==2?'待发货':item.orderStatus==3?'待自取':item.orderStatus==4?'待收货':item.orderStatus==5?'已完成':'已退款'}}</span>
        </div>
        <div class="goodsWrap">
          <div class="goods" v-for="(goods,g) in item.details" :key="g">
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
          <div @click.stop="toNext('/orderDetail',item.orderId)" v-show="item.orderStatus==1">去付款</div>
          <div @click.stop="look(item.courierCompany,item.courierNumber)" v-show="item.orderStatus==4">查看单号</div>
          <div v-show="item.orderStatus==6">已退款</div>
          <div @click.stop="getGoods(item.orderId)" v-show="item.orderStatus==4">确认收货</div>
          <div @click.stop="qrcode(item.orderId)" v-show="item.orderStatus==3">我要取货</div>
          <div
            @click.stop="toNext('/speak',item.orderId)"
            v-show="item.orderStatus==5&&!item.evaluateId"
          >评价</div>
          <div
            @click.stop="toNext('/merchantsList/merchantsDetail',item.busiUserId)"
            v-show="item.orderStatus==5"
          >再来一单</div>
          <div @click.stop="true" v-show="item.orderStatus==2||item.orderStatus==3">
            <a :href="'tel:'+item.busiPhone" style="color:#B8741A">联系商家</a>
          </div>
        </div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0"/>
    </div>
    <van-popup v-model="show">
      <div class="kuaidi">
        <div class="title">快递单号</div>
        <div class="name">快递公司：{{courierCompany}}</div>
        <div class="num">快递单号：{{courierNumber}}</div>
        <div class="btn" @click="coby">一键复制</div>
      </div>
    </van-popup>
    <van-popup v-model="er">
      <div class="join">
        <img :src="imgUrl" />
        <div class="tip">将此二维码展示给商家</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { coby } from "@/utils/utils";
import { myorder, getGoodType, qrcode, goodConfirm } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      show: false,
      imgUrl: "",
      courierCompany: "",
      courierNumber: "",
      er: false,
      active: 0 || this.$route.query.active,
      list: []
    };
  },
  methods: {
    coby() {
      coby("11", this);
    },
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    look(courierCompany,courierNumber){
      this.show=true
      this.courierCompany=courierCompany;
      this.courierNumber=courierNumber;
    },
    qrcode(orderId) {
      qrcode(orderId)
        .then(res => {
          return (
            "data:image/png;base64," +
            btoa(
              new Uint8Array(res).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .then(data => {
          this.imgUrl = data;
          this.er = true;
        });
    },
    getGoods(orderId) {
      this.$dialog
        .confirm({
          title: "是否确认收货"
        })
        .then(() => {
          goodConfirm({orderId}).then(res => {
            this.$toast({
              message: res.message
            });
            this.getList(1)
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    getList(type) {
      myorder({ page: 1, size: 10000, type }).then(res => {
        this.list = res.data.data;
        for (let i = 0; i < this.list.length; i++) {
          let sum = 0;
          for (let j = 0; j < this.list[i].details.length; j++) {
            sum += this.list[i].details[j].count;
          }
          this.list[i].totalNum = sum;
        }
      });
    },
    init() {
      this.getList(1);
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