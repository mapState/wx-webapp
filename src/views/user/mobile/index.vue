<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="username" label="旧手机：" placeholder="请输入旧手机号码" />
    </div>
    <div class="item">
      <van-field v-model="username" label="新手机：" placeholder="请输入新手机号码" />
    </div>
    <div class="item">
      <van-field v-model="username" label="验证码：" placeholder="请输入验证码" />
      <span class="upDown">获取</span>
    </div>
    <div class="sub">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      old: "",
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
>>> .van-field__label{
  width: auto;
}
</style>