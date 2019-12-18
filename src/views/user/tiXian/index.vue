<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="money">
      <div class="title">提现金额</div>
      <div class="num">
        ￥
        <input type="number" v-model="formData.money" />
      </div>
      <div class="tips">
        当前零钱余额{{num/100}}元，
        <span @click="formData.money=num/100">全部提现</span>
      </div>
    </div>
    <div class="ways">
      <div class="item" @click="chooseWay(1)">
        <img src="@/assets/way2.png" /> 提现到微信
        <img src="@/assets/dui.png" class="upDown" v-if="way==1" />
        <img src="@/assets/circle.png" class="upDown" v-else />
      </div>
      <div class="item" @click="chooseWay(2)">
        <img src="@/assets/way3.png" /> 提现到支付宝
        <img src="@/assets/dui.png" class="upDown" v-if="way==2" />
        <img src="@/assets/circle.png" class="upDown" v-else />
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="formData.realName" label="真实姓名：" placeholder="请输入姓名" />
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="formData.account" label="支付宝账号：" placeholder="请输入支付宝账号" />
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="account" label="重复账号：" placeholder="请确认支付宝账号" />
      </div>
      <div class="item" @click="chooseWay(3)">
        <img src="@/assets/way4.png" /> 提现到银行卡
        <img src="@/assets/dui.png" class="upDown" v-if="way==3" />
        <img src="@/assets/circle.png" class="upDown" v-else />
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="formData.realName" label="真实姓名：" placeholder="请输入姓名" />
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="formData.cardNo" label="银行卡号：" placeholder="请输入银行卡号" />
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="formData.backName" label="银行名称：" placeholder="请输入银行名称" />
      </div>
    </div>
    <div class="btn" @click="balanceCash">提现</div>
  </div>
</template>

<script>
import { balance, balanceCash } from "@/api/user";
export default {
  data() {
    return {
      username: "",
      way: 1,
      num: 0,
      account: "",
      formData: {
        account: "",
        backName: "",
        cardNo: "",
        money: "",
        cashType: 1,
        realName: ""
      }
    };
  },
  methods: {
    chooseWay(e) {
      this.way = e;
      this.formData.cashType = e;
    },
    balanceCash() {
      let flag = true;
      if(!this.formData.money){
        flag=false
      }
      if (this.way == 2) {
        if (
          this.formData.account != this.account ||
          !this.formData.realName ||
          !this.formData.account
        ) {
          flag = false;
        }
      }
      if (this.way == 3) {
        if (!this.formData.backName || !this.formData.cardNo || !this.formData.realName) {
          flag = false;
        }
      }
      if (flag) {
        let obj={...this.formData}
        obj.money=obj.money*100
        balanceCash(obj).then(res => {
          this.$toast({
            message: res.message
          });
          balance().then(res => {
            this.num = res.data;
          });
        });
      } else {
        this.$toast({
          message: "信息填写有误"
        });
      }
    },
    init() {
      balance().then(res => {
        this.num = res.data;
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