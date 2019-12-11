<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="photos">
      <div class="title">门店形象图</div>
      <van-uploader>
        <div class="upload">
          <van-icon name="plus" />
        </div>
      </van-uploader>
    </div>
    <div class="input">
      <div class="title">公告内容：</div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="您可以这样输：今日八折，全场商品任您挑"
        />
      </van-cell-group>
    </div>
    <div class="input">
      <div class="title">折扣让利：</div>
      <div class="right upDown">80</div>
      <van-cell-group>
        <van-field v-model="message" placeholder="当前让利比例不能少于80%" />
      </van-cell-group>
    </div>
    <div class="reset">
      <div style="border-bottom:1px solid #ddd" @click="toNext('/mobile')">
        修改手机号
        <div class="mobile upDown">178****5525</div>
        <img src="@/assets/jian.png" class="upDown" />
      </div>
      <div @click="toNext('/psd')">
        修改登录密码
        <img src="@/assets/jian.png" class="upDown" />
      </div>
    </div>
    <div class="get" style="border-bottom:1px solid #ddd">
      支持快递
      <div class="right upDown">
        <van-switch v-model="checked" size="20px" />
      </div>
    </div>
    <div class="get">
      到店取货
      <div class="right upDown">
        <van-switch v-model="checked" size="20px" />
      </div>
    </div>
    <div class="btn">
      <div class="sub">确定保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
    };
  },
  methods: {
    toNext(msg,active) {
      this.$router.push({
        path: msg
      });
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
>>> .van-field__label {
  width: 0;
}
>>> .van-cell {
  padding: 0;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
</style>