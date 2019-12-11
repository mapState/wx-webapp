<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)"/>
      编辑商品
      <div class="right">
        <span>上架</span>保存
      </div>
    </div>
    <div class="item">
      <van-field v-model="username" label="商家标题" placeholder="请输入商品标题" />
    </div>
    <div class="line"></div>
    <div class="photos">
      <div class="title">
        商品主图
        <span>最多4张</span>
      </div>
      <van-uploader v-model="fileList" multiple :max-count="4" />
    </div>
    <div class="photos">
      <div class="title">
        商品详情
        <span>选填</span>
      </div>
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="size">
      <div class="item">
        <van-field v-model="username" label="规格:" placeholder="请输入您的规格" />
      </div>
      <div class="item money">
        <van-field v-model="username" label="规格价格:" placeholder="请输入您的规格价格" type="number"/>
      </div>
      <div class="item">
        <van-field v-model="username" label="规格库存:" placeholder="请输入您的规格库存" type="number"/>
      </div>
      <div class="item photos" style="border:none">
        <div class="title">
        规格类型主图 
      </div>
      <van-uploader v-model="fileList" multiple :max-count="1"/>
      </div>
    </div>
    <div class="btm">
      <div class="btn">+新增规格</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
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
>>> .van-uploader__upload {
  width: 55px;
  height: 55px;
  background: rgba(242, 242, 242, 1);
  border-radius: 5px;
  border: none;
}
>>> .van-uploader__preview-image {
  width: 55px;
  height: 55px;
  margin-right: 10px;
}
>>> .van-uploader__preview-delete {
  color: #ff3b30;
  right: 0px;
}
>>> .van-field__label {
  width: auto;
  font-weight: 500;
  color: #000;
  margin-right: 10px;
}
.money >>> .van-field__control{
  color: #FF3B30;
}
</style>