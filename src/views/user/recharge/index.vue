<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="money">
      <div class="title">充值金额</div>
      <div class="num">
        ￥
        <input type="number" v-model="money">
      </div>
      <div class="tips">当前零钱余额{{(detail.detailD/100).toFixed(2)}}元</div>
      <div class="btn" @click="wxPay">充值</div>
    </div>
  </div>
</template>

<script>
import { wxPay, console,consoleDetail } from "@/api/user";
import { weChatPay } from "@/utils/weChatPay";
export default {
  data() {
    return {
      username: "",
      money: "",
      way: 1,
      detail: {}
    };
  },
  methods: {
    chooseWay(e) {
      this.way = e;
    },
    getConsole() {
      console().then(res => {
        this.detail = res.data;
      });
    },
    wxPay() {
      if (this.money) {
        wxPay({
          money: this.money * 100,
          type: 4
        }).then(res => {
          weChatPay(res.data, location.href);
        });
      } else {
        this.$toast({
          message: "请输入金额"
        });
      }
    },
    init() {
      this.getConsole();
      consoleDetail().then(res => {
        if (!res.data.phone) {
          this.$router.push({
            path: "/setMobile",
            query: {
              url: "/recharge",
              params: JSON.stringify({})
            }
          });
        }
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
}
</style>