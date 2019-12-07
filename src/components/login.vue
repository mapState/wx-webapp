<template>
  <div>
    <div class="login" v-show="logShow" @click.stop="logShow=false">
      <div class="inner" @click.stop="logShow=true">
        <div class="logTitle">为确保个人权益,请通过手机号短信验证</div>
        <div class="input">
          <span>手机</span>
          <!-- <input type="number" placeholder="请输入手机号" v-model="mobile" @blur="inputScroll" /> -->
          <div class="input2">
            <van-cell-group>
              <van-field v-model="mobile" placeholder="请输入用户名" />
            </van-cell-group>
          </div>
        </div>
        <div class="input">
          <span>验证码</span>
          <input type="number" placeholder="输入验证码" class="code" v-model="code" @blur="inputScroll" />
          <span class="codeSpan" @click="getCode">{{timeShow?this.time:'获取验证码'}}</span>
        </div>
        <van-button type="primary" class="logBtn" @click="login">登录</van-button>
        <div class="close" @click.stop="logShow=false" v-show="!pc">×</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { inputScroll } from "@/utils/utils";
import {
  loginBySmsCode,
  logout,
  sendCode,
  loginBySmsCodeAndInviteCode
} from "@/api/user";
import { login } from "@/api/documents";
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {}
  },
  watch: {
    value(val) {
      this.logShow = val;
    },
    logShow(val) {
      this.$emit("input", val);
    }
  },
  data() {
    return {
      timeShow: false,
      time: 60,
      mobile: "",
      code: "",
      logShow: false,
      inputScroll: inputScroll,
      pc: false
    };
  },
  methods: {
    ...mapActions(["getLog"]),
    // 登录
    login() {
      if (this.type == "documents") {
        //真题资料登录
        loginBySmsCodeAndInviteCode({
          mobile: this.mobile,
          code: this.code,
          inviteCode: this.$route.query.inviteCode
        }).then(res => {
          login({
            mobile: this.mobile,
            inviteCode: this.$route.query.inviteCode
          }).then(res => {
            if (res.code == 200) {
              this.logShow = false;
              this.getLog(true);
              this.$parent.getUser();
            }
          });
        });
      } else {
        loginBySmsCode({
          mobile: this.mobile,
          code: this.code
        }).then(res => {
          if (res.code == 200) {
            this.getLog(true);
            this.logShow = false;
            if (this.type == "bigVip") {
              this.$parent.vipInfo("log");
            }
            if (this.type == "team") {
              this.$parent.groupNew();
            }
          }
        });
      }
    },
    getCode() {
      if (!this.timeShow) {
        sendCode({ mobile: this.mobile }).then(res => {
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
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 30;
  .logBtn {
    width: 100%;
    margin-top: 40px;
  }

  .logBtnPC {
    line-height: 20px;
    height: 20px;
    font-size: 6px;
    margin-top: 15px;
  }

  .inner {
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 280px;
    margin-top: 130px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 5px;

    .logTitle {
      font-size: 14px;
      font-family: STYuanti-SC;
      font-weight: 600;
      text-align: center;
      margin-bottom: 35px;
      margin-top: 10px;
    }

    .close {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -60px;
      background-color: #fff;
      width: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
    }
  }

  .innerPC {
    margin-top: 25px;
    height: 120px;
    width: 40%;
    padding: 10px;

    .logTitle {
      font-size: 7px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  .input {
    width: 100%;
    line-height: 40px;
    font-size: 13px;
    font-family: STYuanti-SC;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    .input2{
      width: 200px;
      position: absolute;
      top: 0;
      right: 0;
    }
    span {
      display: inline-block;
      width: 30%;
      text-align: left;
    }

    input {
      width: 65%;
      line-height: 20px;
      border: none;
      outline: none;
    }

    .code {
      width: 38%;
    }

    .codeSpan {
      position: absolute;
      right: 0;
      top: 0;
      width: 29%;
      border-left: 1px solid #ccc;
      text-align: center;
      color: #09bb07;
    }
  }

  .inputPC {
    font-size: 6px;
    line-height: 25px;

    input {
      line-height: 25px;
    }
  }
}
</style>
<style scoped>
  >>> .van-cell-group{
    background-color: transparent;
  }
  >>> .van-cell{
    background-color: transparent;
  }
  >>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
    border:none
  }
</style>