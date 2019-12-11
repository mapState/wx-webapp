<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="username" label="旧密码：" placeholder="请输入旧密码" />
    </div>
    <div class="item">
      <van-field v-model="username" label="手机号：" placeholder="请输入手机号码" />
    </div>
    <div class="item">
      <van-field v-model="username" label="验证码：" placeholder="请输入验证码" />
      <span class="upDown">获取验证码</span>
    </div>
    <div class="item">
      <van-field v-model="username" label="新密码：" placeholder="请输入新密码" />
    </div>
    <div class="item">
      <van-field v-model="username" label="重复密码：" placeholder="请重复密码" />
    </div>
    <div class="sub">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      old: "",
      username: "",
      code: "",
      new: ""
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
>>> .van-popup {
  background: transparent;
}
>>> .van-field__label {
  width: auto;
  font-size: 14px;
  font-weight: 500;
}
</style>