<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="phone" label="手机：" placeholder="请输入手机号码" type="number"/>
    </div>
    <div class="item">
      <van-field v-model="code" label="验证码：" placeholder="请输入验证码" type="number"/>
      <span class="upDown" @click="getCode">{{timeShow?this.time:'获取'}}</span>
    </div>
    <div class="sub" @click="phoneAuth">确定</div>
  </div>
</template>

<script>
import { phoneAuth } from "@/api/user";
import { sendPhone } from "@/api/bussiness";
export default {
  data() {
    return {
      timeShow: false,
      time: 60,
      code: "",
      phone: ""
    };
  },
  methods: {
    phoneAuth() {
      phoneAuth({
        phone: this.phone,
        code: this.code
      }).then(res => {
        if (this.$route.query.url) {
          this.$router.push({
            path: this.$route.query.url,
            query: JSON.parse(this.$route.query.params)
          });
        }
        this.$toast({
          message: res.message
        });
      });
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
    init() {}
  },

  mounted() {
    console.log(this.$route.query);
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