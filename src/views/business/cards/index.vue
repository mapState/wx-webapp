<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item litInput2">
      <van-field v-model="username" label="让利折扣" placeholder="请输入每笔订单让利折扣" />
      <span class="upDown">输入80即8折</span>
    </div>
    <div class="item">
      <van-field v-model="username" label="企业法人" placeholder="请输入营业执照法人" />
    </div>
    <div class="photos">
      <div class="title">法人身份证-正反面</div>
      <van-uploader v-model="fileList" multiple :max-count="2" />
    </div>
    <div class="photos">
      <div class="title">营业执照</div>
      <van-uploader />
    </div>
    <div class="photos">
      <div class="title">门店形象图</div>
      <img :src="img" alt />
      <!-- <van-uploader /> -->
    </div>
    <div class="xieyi">
      <van-checkbox v-model="checked" class="left"></van-checkbox>本人已阅读并同意
      <span>《入驻服务协议》</span>
    </div>
    <div class="sub">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      checked: true,
      img: "https://www.baidu.com/img/baidu_jgylogo3.gif",
      fileList: []
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
>>> .van-field__label {
  width: auto;
  min-width: 70px;
  font-weight: 500;
  color: #000;
  margin-right: 10px;
}
>>> .van-uploader__upload {
  width: 128px;
  height: 72px;
  background: rgba(242, 242, 242, 1);
  border-radius: 2px;
  border: none;
}
>>> .van-uploader__preview-image {
  width: 128px;
  height: 72px;
  margin-right: 10px
}
.litInput2 {
  padding-right: 110px;
  border-bottom: 10px solid #f3f3f3 !important;
  border-top: 1px solid #ddd;
}
>>> .van-uploader__preview-delete{
  color: #FF3B30;
  right: 0px;
}
</style>