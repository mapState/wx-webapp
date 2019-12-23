<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="oldPhone" label="旧手机：" placeholder="请输入旧手机号码" type="number" />
    </div>
    <div class="item">
      <van-field v-model="newPhone" label="新手机：" placeholder="请输入新手机号码" type="number" />
    </div>
    <div class="item">
      <van-field v-model="code" label="验证码：" placeholder="请输入验证码" type="number" />
      <span
        class="upDown"
        @click="$route.query.addressId?getCodeU():getCode()"
      >{{timeShow?this.time:'获取'}}</span>
    </div>
    <div class="sub" @click="$route.query.addressId?phoneSetC():phoneSet()">确定</div>
  </div>
</template>

<script>
import { phoneSet, sendPhone, logout } from "@/api/bussiness";
import { phoneSetC, sendPhoneU } from "@/api/user";
export default {
  data() {
    return {
      oldPhone: "",
      timeShow: false,
      time: 60,
      code: "",
      newPhone: ""
    };
  },
  methods: {
    phoneSet() {
      phoneSet({
        oldPhone: this.oldPhone,
        newPhone: this.newPhone,
        code: this.code
      }).then(res => {
        if (res.code == 200) {
          logout().then(res => {
            this.$router.push({
              path: "/login"
            });
          });
        } else {
          this.$toast({
            message: res.message
          });
        }
      });
    },
    phoneSetC() {
      phoneSetC({
        oldPhone: this.oldPhone,
        newPhone: this.newPhone,
        code: this.code
      }).then(res => {
        if (res.code == 200) {
          this.$router.go(-1);
        } else {
          this.$toast({
            message: res.message
          });
        }
      });
    },
    getCode() {
      if (this.newPhone) {
        if (!this.timeShow) {
          sendPhone({ phone: this.newPhone }).then(res => {
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
    getCodeU() {
      if (this.newPhone) {
        if (!this.timeShow) {
          sendPhoneU({ phone: this.newPhone }).then(res => {
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
}
</style>