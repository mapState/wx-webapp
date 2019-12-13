<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="line"></div>
    <div class="tab">
      <div @click="chooseType(1)" :class="{active:type==1}">验证码登录</div>
      <div @click="chooseType(2)" :class="{active:type==2}">密码登录</div>
    </div>
    <div class="input">
      <div class="item">
        <img src="@/assets/user.png" class="upDown" />
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="username" placeholder="请输入您的手机号码" />
        </div>
      </div>
      <div class="item" v-if="type==1">
        <img src="@/assets/lock.png" class="upDown" />
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="username" placeholder="请输入验证码" />
        </div>
        <span class="upDown">获取验证码</span>
      </div>
      <div class="item" v-else>
        <img src="@/assets/lock.png" class="upDown" />
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="username" placeholder="请输入密码" type="password"/>
        </div>
      </div>
    </div>
    <div class="btn">登录</div>
    <div class="btm"><van-checkbox v-model="checked" class="upDown"></van-checkbox>我已阅读并同意<span>《用户服务协议》</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      checked:false,
      type:1
    };
  },
  methods: {
    chooseType(e){
      this.type=e
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
>>> .van-cell {
  padding: 0;
}
</style>