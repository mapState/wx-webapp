<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="line"></div>
    <div class="tab">
      <div class="active">验证码登录</div>
      <div>密码登录</div>
    </div>
    <div class="input">
      <div class="item">
        <img src="@/assets/user.png" class="upDown" />
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="username" placeholder="请输入您的手机号码" />
        </div>
      </div>
      <div class="item">
        <img src="@/assets/lock.png" class="upDown" />
        <div class="shu upDown"></div>
        <div class="mid upDown">
          <van-field v-model="username" placeholder="请输入验证码" />
        </div>
        <span class="upDown">获取验证码</span>
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
      checked:false
    };
  },
  methods: {
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