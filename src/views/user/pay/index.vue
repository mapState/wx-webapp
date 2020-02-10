<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="msg">
      <!-- <img :src="url+detail.storeImageUrl" alt /> -->
      <div class="imgTop">
        <div class="up"></div>
        <img :src="url+detail.storeImageUrl" alt />
      </div>
    </div>
    <div class="content">
      <div class="contact">
        <div class="name">{{detail.name}}</div>
        <div class="labels">
          <div>{{detail.typeName}}</div>
          <div>可奖励{{detail.money/100}}元</div>
          <div>抽奖池{{detail.bonusMoney/100}}元</div>
        </div>
        <div class="position">
          <img src="@/assets/po2.png" class="im1" />
          <span class="out">{{detail.regionAddress+' '+ detail.address}}</span>
          <img
            src="@/assets/po3.png"
            class="im2"
            v-if="device().weChat"
            @click="goTo(detail.lat,detail.lon,detail.money,detail.regionAddress,detail.address)"
          />
          <span class="shu"></span>
          <a :href="'tel:'+detail.phone">
            <img src="@/assets/mobile.png" class="im3" />
          </a>
        </div>
        <img
          src="@/assets/shou.png"
          class="shou"
          v-if="status==0&&device().weChat"
          @click="collect"
        />
        <img
          src="@/assets/starA.png"
          class="shou"
          v-else-if="status==1&&device().weChat"
          @click="collect"
        />
      </div>
      <div class="input">
        <span>支付金额:</span>
        <input placeholder="请输入支付金额" v-model="money" type="number" />
      </div>
      <div class="ways">
        <van-radio-group v-model="ways">
          <div class="item" @click="ways='1'">
            <img src="@/assets/way1.png" class="upDown" />余额支付
            <div class="upDown mid">剩余{{detail.cusMoney/100}}</div>
            <div class="upDown right">
              <van-radio name="1"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='2'" v-if="device().weChat">
            <img src="@/assets/way2.png" class="upDown" />微信支付
            <div class="upDown right">
              <van-radio name="2"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='3'" v-else>
            <img src="@/assets/way3.png" class="upDown" />支付宝支付
            <div class="upDown right">
              <van-radio name="3"></van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
      <div class="sub" @click="underBalance">支付</div>
    </div>
  </div>
</template>

<script>
import {
  payDetail,
  collectStatus,
  collect,
  underBalance,
  wxPay,
  aliPay,
  consoleDetail
} from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { transformParams, device } from "@/utils/utils";
import { weChatPay } from "@/utils/weChatPay";
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      tab: 1,
      status: 1,
      money: "",
      time: 30 * 60 * 60 * 1000,
      ways: "1",
      url: UPLOAD_DOMAIN,
      device: device,
      detail: {}
    };
  },
  methods: {
    chooseTab(e) {
      this.tab = e;
    },
    collect() {
      collect({ busiUserId: this.$route.query.id }).then(res => {
        this.collectStatus();
      });
    },
    collectStatus() {
      collectStatus({ busiUserId: this.$route.query.id }).then(res => {
        this.status = res.data;
      });
    },
    goTo(lat, lon, name, regionAddress, address) {
      wx.ready(() => {
        wx.openLocation({
          latitude: lat, // 纬度，浮点数，范围为90 ~ -90
          longitude: lon, // 经度，浮点数，范围为180 ~ -180。
          name: regionAddress, // 位置名
          address: regionAddress + address, // 地址详情说明
          scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
        });
      });
    },
    underBalance() {
      if (this.money) {
        if (this.ways == 1) {
          this.$dialog
            .confirm({
              title: "确认支付吗？"
            })
            .then(() => {
              underBalance({
                busiUserId: this.$route.query.id,
                money: this.money * 100
              }).then(res => {
                if (res.code == 200) {
                  this.$toast({
                    message: "支付成功"
                  });
                  payDetail({ busiUserId: this.$route.query.id }).then(res => {
                    this.detail = res.data;
                  });
                }
              });
            })
            .catch(() => {
              // on cancel
            });
        } else if (this.ways == 2) {
          wxPay({
            busiUserId: this.$route.query.id,
            money: this.money * 100,
            type: 2
          }).then(res => {
            weChatPay(res.data, location.href);
          });
        } else {
          aliPay({
            busiUserId: this.$route.query.id,
            money: this.money * 100,
            type: 3,
            message: location.href
          }).then(res => {
            const div = document.createElement("div");
            div.innerHTML = res.data;
            document.body.appendChild(div);
            document.forms[0].submit();
          });
        }
      } else {
        this.$toast({
          message: "请输入金额"
        });
      }
    },
    init() {
      payDetail({ busiUserId: this.$route.query.id }).then(res => {
        this.detail = res.data;
      });
      consoleDetail().then(res => {
        if (!res.data.phone) {
          let params = transformParams();
          this.$router.push({
            path: "/setMobile",
            query: {
              url: "/pay",
              params: JSON.stringify(params)
            }
          });
        }
      });
      this.collectStatus();
    }
  },

  mounted() {
    if (device.weChat) {
      this.init();
    }
    payDetail({ busiUserId: this.$route.query.id }).then(res => {
      this.detail = res.data;
    });
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
</style>
<style scoped>
>>> .van-swipe {
  height: 30px;
}
>>> .van-count-down {
  font-size: 15px;
  font-weight: bold;
  color: rgba(255, 59, 48, 1);
}
</style>