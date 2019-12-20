<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="ping" v-for="(item,i) in list" :key="i">
      <div class="goods">
        <div class="item">
          <img :src="url+item.image" class="upDown" />
          <div class="name">{{item.goodName}}</div>
          <div class="money">￥{{item.money/100}}</div>
        </div>
      </div>
      <div class="star">
        <div class="title">星级评价</div>
        <div class="s">
          <van-rate v-model="formData[i].star" />
          <span class="upDown">{{value==1||value==2?'差':value==3?'中':'好'}}</span>
        </div>
      </div>
      <div class="content">
        <div class="title">商品评价</div>
        <van-cell-group>
          <van-field v-model="formData[i].content" rows="3" type="textarea" placeholder="对商品还满意吗，说两句吧~" />
        </van-cell-group>
        <van-uploader v-model="formData[i].image" multiple>
          <div class="camera">
            <img src="@/assets/camera.png" class="leftRight" />
            添加图片
          </div>
        </van-uploader>
      </div>
    </div>
    <div class="btn">发布</div>
  </div>
</template>

<script>
import { orderDetail } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      url:UPLOAD_DOMAIN,
      value: 3,
      message: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ],
      list: [],
      formData:[{
        image:[]
      }]
    };
  },
  methods: {
    init() {
      orderDetail({ orderId: this.$route.query.id }).then(res => {
        this.list = res.data.list;
        for(let i in this.list){
          this.formData.push({})
        }
      });
    }
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