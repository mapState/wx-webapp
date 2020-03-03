<template>
  <div v-wechat-title="title" class="container">
    <div class="line"></div>
    <div class="tab">
      <div @click="chooseType(1)" :class="{active:type==1}">验证码登录</div>
      <div @click="chooseType(2)" :class="{active:type==2}">密码登录</div>
    </div>
    <div class="input">
      <div class="item">
        <img src="@/assets/user.png" class="upDown">
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="phone" placeholder="请输入您的手机号码"/>
        </div>
      </div>
      <div class="item" v-if="type==1">
        <img src="@/assets/lock.png" class="upDown">
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="code" placeholder="请输入验证码"/>
        </div>
        <span
          class="upDown"
          @click="getCode"
          :class="{active:timeShow}"
        >{{timeShow?this.time+'s':'获取验证码'}}</span>
      </div>
      <div class="item" v-else>
        <img src="@/assets/lock.png" class="upDown">
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="password" placeholder="请输入密码" type="password"/>
        </div>
      </div>
    </div>
    <div class="btn" @click="login">登录</div>
    <div class="btm">
      <van-checkbox v-model="checked" class="upDown"></van-checkbox>我已阅读并同意
      <span>《用户服务协议》</span>
    </div>
  </div>
</template>

<script>
import { login, sendPhone, updateOpenId } from "@/api/bussiness";
import { GetCookie } from "@/utils/utils";
import { makLogin } from "@/api/mak";
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      loginType: "",
      phone: "",
      password: "",
      code: "",
      timeShow: false,
      time: 60,
      checked: true,
      type: 1,
      title: ""
    };
  },
  methods: {
    chooseType(e) {
      this.type = e;
    },
    login() {
      if (this.checked) {
        if (this.$route.query.where) {
          makLogin({
            loginType: this.type,
            password: this.password,
            phone: this.phone,
            code: this.code
          }).then(res => {
            if (res.code == 200) {
              this.$router.push({
                path: "/dHome"
              });
            }
          });
        } else {
          login({
            loginType: this.type,
            password: this.password,
            phone: this.phone,
            code: this.code
          }).then(res => {
            if (res.code == 200) {
              if (!res.data.open_id) {
                this.$dialog
                  .confirm({
                    title: "是否绑定微信"
                  })
                  .then(() => {
                    updateOpenId({ openId: GetCookie("openId") }).then(res => {
                      this.$toast({
                        message: res.message
                      });
                      this.$router.push({
                        path: "/workbench"
                      });
                    });
                  })
                  .catch(() => {
                    this.$router.push({
                      path: "/workbench"
                    });
                  });
              } else {
                this.$router.push({
                  path: "/workbench"
                });
              }
            } else {
              this.$toast({
                message: res.message
              });
            }
          });
        }
      } else {
        this.$toast({
          message: "请勾选协议"
        });
      }
    },
    getCode() {
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
    init() {
      if (this.$route.query.where) {
        this.title = "创客登录";
      } else {
        this.title = "商家登录";
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
>>> .van-cell {
  padding: 0;
}
</style>