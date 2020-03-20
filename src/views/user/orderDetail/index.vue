<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      确定订单
    </div>
    <div
      class="address"
      @click="toNext('/addressList',$route.query.ids)"
      v-show="busiDetail.supportExpress&&detail.addressId"
      v-if="!checked"
    >
      <div class="item">
        <img src="@/assets/position.png" class="left upDown" />
        <div class="name">
          {{detail.name}}
          <span>{{detail.phone}}</span>
        </div>
        <div class="detail">
          <span v-show="(detail.addressId==addressId||!addressId)&&detail.moren">默认</span>
          {{detail.regionAddress+' '+detail.address}}
        </div>
        <div class="right upDown">
          <img src="@/assets/jian.png" />
        </div>
      </div>
    </div>
    <div
      class="add"
      v-show="busiDetail.supportExpress&&!detail.addressId"
      v-if="!checked"
      @click="toNext('/addressList',$route.query.ids)"
    >
      <img src="@/assets/add.png" class="upDown" />添加地址
    </div>
    <div class="get" v-show="busiDetail.supportStore">
      到店自取消费
      <div class="right upDown">
        <van-switch v-model="checked" size="20px" />
      </div>
    </div>
    <div class="time" v-show="checked" @click="show=true">
      自取消费时间
      <span>{{time?time:'选择时间'}}</span>
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="kone"></div>
    <div class="goods">
      <div
        class="owner"
        @click="$router.push({path:'/merchantsList/merchantsDetail',query:{
        id:busiDetail.id
      }})"
      >
        <img :src="url+busiDetail.storeImageUrl" class="upDown two" />
        {{busiDetail.name}}
        <img src="@/assets/jian.png" class="upDown three" />
      </div>
      <div class="item" v-for="(item,i) in formData.list" :key="i">
        <img :src="url+item.image" class="upDown" />
        <div class="name">{{item.goodTitle}}</div>
        <div class="size">规格:{{item.name}}</div>
        <div class="money">￥{{item.money/100}}</div>
        <div class="right">X{{item.count}}</div>
      </div>
    </div>
    <div class="total">
      运费：￥0.00
      <div class="right">
        <span>
          共
          <span>{{formData.sum}}</span>件商品
        </span>
        <span class="hou">
          共计:
          <span>￥{{formData.money}}</span>
        </span>
      </div>
    </div>
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="买家留言"
        type="textarea"
        maxlength="50"
        placeholder="50字以内（选填）"
      />
    </van-cell-group>
    <div class="kone"></div>
    <div class="ways">
      <van-radio-group v-model="ways">
        <div class="item" @click="ways='1'">
          余额支付
          <div class="upDown mid">剩余{{money/100}}</div>
          <div class="upDown right">
            <van-radio name="1"></van-radio>
          </div>
        </div>
        <div class="item" @click="ways='2'">
          微信支付
          <div class="upDown right">
            <van-radio name="2"></van-radio>
          </div>
        </div>
      </van-radio-group>
    </div>
    <div class="line" style="height:300px"></div>
    <div class="bottom">
      需要支付：
      <span>￥{{formData.money}}</span>
      <div class="right" @click="orderCreate">确定购买</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        @confirm="chooseData"
        @cancel="show=false"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  cartGetByIds,
  balance,
  consoleDetail,
  getGoodByDetailId,
  getBusiInfo,
  orderCreate,
  orderBalance,
  addressFindById,
  wxPay
} from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { mapGetters } from "vuex";
import { formatDate, transformParams } from "@/utils/utils";
import { weChatPay } from "@/utils/weChatPay";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      checked: false,
      show: false,
      message: "",
      money: 0,
      ways: "1",
      minHour: 10,
      maxHour: 20,
      time: "",
      detail: "",
      busiDetail: "",
      formData: { list: [] },
      currentDate: new Date(),
      minDate: new Date()
    };
  },
  computed: {
    ...mapGetters(["addressId"])
  },
  methods: {
    toNext(msg, ids) {
      this.$router.push({
        path: msg,
        query: {
          ids,
          add: 1
        }
      });
    },
    chooseData(e) {
      this.time = formatDate(new Date(e).getTime());
      this.show = false;
    },
    cartGetByIds() {
      cartGetByIds(JSON.parse(this.$route.query.ids)).then(res => {
        let sum = 0;
        let money = 0;
        for (let i = 0; i < res.data.length; i++) {
          sum += res.data[i].count;
          money += res.data[i].count * res.data[i].money;
        }
        this.formData.list = res.data;
        this.formData.sum = sum;
        this.formData.money = money / 100;
      });
    },
    orderCreate() {
      consoleDetail().then(res => {
        if (!res.data.phone) {
          this.$dialog
            .confirm({
              title: "是否前去绑定手机号？"
            })
            .then(() => {
              let params = transformParams();
              this.$router.push({
                path: "/setMobile",
                query: {
                  url: "/orderDetail",
                  params: JSON.stringify(params)
                }
              });
            })
            .catch(() => {
              // on cancel
            });
        } else {
          let flag = true;
          if (this.checked) {
            if (!this.time) {
              flag = false;
              this.$toast({
                message: "请设置取货时间"
              });
            }
          } else {
            if (!this.detail) {
              flag = false;
              this.$toast({
                message: "请设置收货地址"
              });
            }
          }
          if (flag) {
            orderCreate({
              addressId: this.detail.addressId,
              busiUserId: this.busiDetail.id,
              bySelf: Number(this.checked),
              message: this.message,
              money: this.formData.money * 100,
              selfDate: this.time,
              list: this.formData.list
            }).then(res => {
              if (this.ways == 1) {
                this.$dialog
                  .confirm({
                    title: "确认支付吗？"
                  })
                  .then(() => {
                    orderBalance({
                      orderId: res.data
                    }).then(res => {
                      if (res.code == 200) {
                        this.$router.push({
                          path: "/s2",
                          query: {
                            name: this.busiDetail.name,
                            id: this.busiDetail.id,
                            money: this.formData.money
                          }
                        });
                        balance().then(res => {
                          this.money = res.data;
                        });
                        // payDetail({ busiUserId: this.$route.query.id }).then(res => {
                        //   this.detail = res.data;
                        // });
                      }
                    });
                  })
                  .catch(() => {
                    // on cancel
                  });
              } else {
                wxPay({
                  addressId: this.detail.addressId,
                  busiUserId: this.busiDetail.id,
                  bySelf: Number(this.checked),
                  message: this.message,
                  money: this.formData.money * 100,
                  selfDate: this.time,
                  list: this.formData.list,
                  type: 1
                }).then(res => {
                  weChatPay(
                    res.data,
                    "http://hxkjzjlm.top/home/#/s2?id=" +
                      this.busiDetail.id +
                      "&name=" +
                      this.busiDetail.name +
                      "&money=" +
                      this.formData.money
                  );
                });
              }
            });
          }
        }
      });
    },
    getGoodByDetailId() {
      getGoodByDetailId({
        count: this.$route.query.count,
        goodDetailId: this.$route.query.id
      }).then(res => {
        let sum = 0;
        let money = 0;
        for (let i = 0; i < res.data.length; i++) {
          sum += res.data[i].count;
          money += res.data[i].count * res.data[i].money;
        }
        this.formData.list = res.data;
        this.formData.sum = sum;
        this.formData.money = money / 100;
      });
    },
    init() {
      this.$route.query.count ? this.getGoodByDetailId() : this.cartGetByIds();
      getBusiInfo({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.busiDetail = res.data;
      });
      balance().then(res => {
        this.money = res.data;
      });
      if (this.addressId) {
        addressFindById({ id: this.addressId }).then(res => {
          this.detail = res.data;
          this.detail.addressId = res.data.id;
          console.log(this.detail);
        });
      } else {
        console.log(2);
        consoleDetail().then(res => {
          this.detail = res.data;
          console.log(this.detail);
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
>>> .van-field__label {
  width: auto;
  margin-right: 15px;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
</style>