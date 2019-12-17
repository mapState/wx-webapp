<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="oldPassword" label="旧密码：" placeholder="请输入旧密码" type="password"/>
    </div>
    <div class="item">
      <van-field v-model="phone" label="手机号：" placeholder="请输入手机号码" />
    </div>
    <div class="item">
      <van-field v-model="code" label="验证码：" placeholder="请输入验证码" />
      <span class="upDown" @click="getCode" :class="{active:timeShow}">{{timeShow?this.time+'s':'获取验证码'}}</span>
    </div>
    <div class="item">
      <van-field v-model="newPassword" label="新密码：" placeholder="请输入新密码" type="password"/>
    </div>
    <div class="item">
      <van-field v-model="newPassword2" label="重复密码：" placeholder="请重复密码" type="password"/>
    </div>
    <div class="sub" @click="passwordSet">确定</div>
  </div>
</template>

<script>
import { passwordSet, sendPhone } from "@/api/bussiness";
export default {
  data() {
    return {
      timeShow: false,
      time: 60,
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
      code: "",
      phone: ""
    };
  },
  methods: {
    passwordSet() {
      if (this.newPassword !== this.newPassword2) {
        this.$toast({
          message: "密码输入不一致"
        });
      } else {
        passwordSet({
          newPassword: this.newPassword,
          oldPassword: this.oldPassword,
          phone: this.phone,
          code: this.code
        }).then(res => {
          this.$toast({
            message: res.message
          });
        });
      }
    },
    getCode() {
      console.log(this.phone)
      if (this.phone) {
        if (!this.timeShow) {
          sendPhone({ phone: this.phone }).then(res => {
            if (res.code == 200) {
              this.timeShow = true;
              var timer = window.setInterval(() => {
                this.time--;
                if (this.time < 0) {
                  window.clearInterval(timer);
                  this.timeShow = false;
                  this.time = 60;
                }
              }, 1000);
            }
          });
        }
      } else {
        this.$toast({
          message: "请输入手机号"
        });
      }
    },
    init() {}
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
>>> .van-popup {
  background: transparent;
}
>>> .van-field__label {
  width: auto;
  font-size: 14px;
  font-weight: 500;
}
</style>