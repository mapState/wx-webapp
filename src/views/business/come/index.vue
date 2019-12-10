<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="banner">
      <img src="@/assets/banner.png" />
    </div>
    <div class="item">
      <van-field v-model="username" label="商家名称" placeholder="请输入您的商户名称" />
    </div>
    <div class="item litInput">
      <van-field v-model="username" label="经营范围" placeholder="请选择您的经营范围" />
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="item">
      <van-cell-group>
        <van-field
          v-model="username"
          rows="2"
          autosize
          label="商户介绍"
          type="textarea"
          placeholder="请简单介绍您的商铺"
        />
      </van-cell-group>
    </div>
    <div class="item litInput" style="border-bottom:10px solid #f2f2f2">
      <van-field v-model="username" label="店铺地址" placeholder="请选择您的店铺地址" />
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="item">
      <van-field v-model="username" label="联系人" placeholder="请输入您的店铺联系人" />
    </div>
    <div class="item litInput2">
      <van-field v-model="username" label="手机号" placeholder="请输入联系人的手机号码" />
      <span class="upDown">用于商家登录账号</span>
    </div>
    <div class="item">
      <van-field v-model="username" label="登录密码" placeholder="请输入商家登入密码 " />
    </div>
    <div class="item">
      <van-field v-model="username" label="支付宝姓名" placeholder="请输入商家收款的支付宝姓名" />
    </div>
    <div class="item litInput2">
      <van-field v-model="username" label="支付宝账号" placeholder="请输入商家支付宝账号" />
      <span class="upDown">用于商家支付宝收款</span>
    </div>
    <van-button type="primary" style="display:block;margin:0 auto;margin-top:20px;width:100px">保存</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
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
  min-width: 70px;
  font-weight: 500;
  color: #000;
  margin-right: 10px
}
.litInput {
  padding-right: 20px;
}
.litInput2 {
  padding-right: 110px;
}
</style>