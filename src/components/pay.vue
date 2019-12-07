<template>
  <div>
    <!-- 购买弹出框 -->
    <van-popup v-model="show" position="bottom" class="pay">
      <div class="container">
        <div class="content">
          <div class="l">
            <img :src="detail.imgUrl||detail.activeBanner" alt />
          </div>
          <div class="r">
            <div>{{detail.title||detail.name}}</div>
            <div v-if="detail.days">有效期：购买后{{detail.days}}天</div>
            <div v-else></div>
            <div>
              金 额：
              <span style="color:#FF3333">￥{{detail.price?(detail.price/100).toFixed(2):bizType==62?member==0?detail.headPrice/100:detail.salePrice/100:detail.marketPrice/100}}</span>
            </div>
          </div>
        </div>
        <div class="way">
          <div class="title">支付方式</div>
          <van-radio-group v-model="payType">
            <div class="radioItem">
              <div class="left">
                <img src="@/assets/weiChat.png" alt />
              </div>
              <div class="mid">微信支付</div>
              <div class="right">
                <van-radio name="7" checked-color="#07c160"></van-radio>
              </div>
            </div>
            <div class="radioItem">
              <div class="left">
                <img src="@/assets/zhi2.png" alt />
              </div>
              <div class="mid">支付宝支付</div>
              <div class="right">
                <van-radio name="3" checked-color="#07c160"></van-radio>
              </div>
            </div>
          </van-radio-group>
        </div>
        <div class="btn" @click="pay(payType,bizType,bizId,returnUrl,groupId)">确认下单</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { payMoney } from "@/utils/pay";
import { groupNew } from "@/api/common";
import { weChatAuth } from "@/utils/weChatPay";
import { vipDesc, vipDetail } from "@/api/user";
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    bizType: {},
    returnUrl: {},
    bizId: {},
    groupId:{},
    member:{}
  },
  data() {
    return {
      payType: "7",
      detail: "",
      show: false
    };
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    // 验证状态
    getText(type) {
      vipDesc({ type: type }).then(res => {
        this.detail = res.data;
      });
    },
    vipDetail(bizType) {
      vipDetail({ bizType: bizType }).then(res => {
        this.detail = res.data;
      });
    },
    groupNew() {
      groupNew({activityId:this.$route.query.id,groupId:this.$route.query.groupId}).then(res=>{
        this.detail=res.data.activity
      })
    },
    pay(type, bizType, bizId, returnUrl,groupId) {
      payMoney(type, bizType, bizId, returnUrl,groupId);
    }
  },
  mounted() {
    weChatAuth();
    this.getText(3);
    // if(this.bizId=62){
    //   this.groupNew(3);
    // }else{
    //   this.getText(3);
    // }
  }
};
</script>
<style lang="scss" scoped>
.pay {
  box-sizing: border-box;

  width: 376px;
  height: 340px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;

  .content {
    padding: 0 15px;
    padding-bottom: 20px;
    overflow: hidden;
    border-bottom: 10px solid #f6f6f6;
    margin-top: 29px;

    .l {
      border: 1px solid rgba(238, 238, 238, 1);
      float: left;
      width: 80px;
      margin-right: 18px;

      img {
        display: block;
        width: 80px;
        height: 80px;
      }
    }

    .r {
      float: left;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(44, 44, 44, 1);

      & > div:nth-of-type(2) {
        margin: 15px 0;
      }
    }
  }

  .way {
    padding: 0 15px;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(26, 26, 26, 1);
    overflow: hidden;

    .title {
      margin-top: 19px;
      margin-bottom: 20px;
    }

    .radioItem {
      overflow: hidden;

      &:last-of-type {
        margin-top: 20px;
      }

      .left {
        float: left;

        img {
          width: 20px;
        }
      }

      .mid {
        float: left;
        margin-left: 13px;
      }

      .right {
        float: right;
      }
    }
  }

  .container {
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;

    .btn {
      width: 100%;
      line-height: 45px;
      text-align: center;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        0deg,
        rgba(191, 160, 105, 1) 0%,
        rgba(224, 201, 158, 1) 100%
      );
    }
  }
}
</style>