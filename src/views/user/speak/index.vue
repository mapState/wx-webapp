<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="ping">
      <div class="goods">
        <div class="item">
          <img src="@/assets/cover.png" class="upDown" />
          <div class="name">香辣鸡腿堡</div>
          <div class="money">￥24</div>
        </div>
      </div>
      <div class="star">
        <div class="title">星级评价</div>
        <div class="s">
          <van-rate v-model="value" />
          <span class="upDown">{{value==1||value==2?'差':value==3?'中':'好'}}</span>
        </div>
      </div>
      <div class="content">
        <div class="title">商品评价</div>
        <van-cell-group>
          <van-field v-model="message" rows="3" type="textarea" placeholder="对商品还满意吗，说两句吧~" />
        </van-cell-group>
        <van-uploader v-model="fileList" multiple>
          <div class="camera">
            <img src="@/assets/camera.png" class="leftRight" />
            添加图片
          </div>
        </van-uploader>
      </div>
      <div class="btn">发布</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
      message: '',
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
>>> .van-cell {
  padding: 0;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-uploader__preview-image {
  width: 55px;
  height: 55px;
}
</style>