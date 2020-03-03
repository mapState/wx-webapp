<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="time" style="border-bottom:1px solid #ddd" v-show="detail.bySelf==1">到店自取消费</div>
    <div class="time" v-show="detail.bySelf==1">
      自取消费时间
      <span>{{detail.selfDate}}</span>
    </div>
    <div class="address" v-show="detail.bySelf===0">
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
    <div class="total">运费：￥0.00
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
    <van-cell-group>
      <van-field
        v-model="detail.message"
        rows="1"
        autosize
        label="买家留言"
        disabled
        type="textarea"
        maxlength="50"
        placeholder="50字以内（选填）"
      />
    </van-cell-group>
    <div class="orderNum">
      订单编号
      <span>{{detail.orderId}}</span>
    </div>
    <div class="end" v-show="detail.orderStatus==5">
      完成时间
      <span>{{detail.updateDate}}</span>
    </div>
    <div class="bai"></div>
    <div class="kone"></div>
    <div class="line"></div>
    <div class="bottom" v-show="detail.orderStatus==3">
      <div>待自取</div>
      <div @click="refund">退款</div>
      <div @click="selfGoods">自取发货</div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
    <div class="bottom" v-show="detail.orderStatus==1">
      <div>待支付</div>
      <div></div>
      <div></div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
    <div class="bottom" v-show="detail.orderStatus==6">
      <div>已退款</div>
      <div></div>
      <div></div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
    <div class="bottom" v-show="detail.orderStatus==4">
      <div>待收货</div>
      <div></div>
      <div></div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
    <div class="bottom" v-show="detail.orderStatus==2">
      <div>待发货</div>
      <div @click="refund">退款</div>
      <div @click.stop="toNext('/send',detail.orderId)">快递发货</div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
    <div class="bottom2" v-show="detail.orderStatus==5">
      <div>已完成</div>
      <div @click.stop="toNext('/split',detail.orderId)">免单拆分</div>
      <div class="right">
        <a :href="'tel:'+detail.userPhone" style="color:#FAD6A6">联系买家</a>
      </div>
    </div>
  </div>
</template>

<script>
import { orderDetail, selfGoods, refund } from "@/api/bussiness";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      checked: false,
      show: true,

      url: UPLOAD_DOMAIN,
      detail: {
        list: []
      }
    };
  },
  methods: {
    toNext(msg, orderId) {
      console.log(orderId);
      this.$router.push({
        path: msg,
        query: {
          orderId
        }
      });
    },
    selfGoods() {
      selfGoods({ orderId: this.$route.query.orderId }).then(res => {
        this.$toast({
          message: res.message
        });
        this.getDetail();
      });
    },
    refund() {
      this.$dialog
        .confirm({
          title: "是否确认退款？"
        })
        .then(() => {
          refund({ orderId: this.$route.query.orderId }).then(res => {
            this.$toast({
              message: res.message
            });
            this.getDetail();
          });
        })
        .catch(() => {});
    },
    getDetail() {
      orderDetail({ orderId: this.$route.query.orderId }).then(res => {
        this.detail = res.data;
        let sum = 0;
        for (let j = 0; j < this.detail.list.length; j++) {
          sum += this.detail.list[j].count;
        }
        this.detail.totalNum = sum;
      });
    },
    init() {
      this.getDetail();
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
  margin-right: 15px;
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