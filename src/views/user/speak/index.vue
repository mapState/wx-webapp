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
          <span
            class="upDown"
          >{{formData[i].star==4||formData[i].star==5?'好':formData[i].star==3?'中':formData[i].star==1||formData[i].star==2?'差':''}}</span>
        </div>
      </div>
      <div class="content">
        <div class="title">商品评价</div>
        <van-cell-group>
          <van-field
            v-model="formData[i].content"
            rows="3"
            type="textarea"
            placeholder="对商品还满意吗，说两句吧~"
          />
        </van-cell-group>
        <van-uploader v-model="formData[i].imageArr" multiple :after-read="(file)=>onRead(file,i)">
          <div class="camera">
            <img src="@/assets/camera.png" class="leftRight" />
            添加图片
          </div>
        </van-uploader>
      </div>
    </div>
    <div class="btn" v-if="evaluateId">已评价</div>
    <div class="btn" @click="submit" v-else>发布</div>
  </div>
</template>

<script>
import { orderDetail, publish } from "@/api/user";
import { uploadImg } from "@/utils/upload";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      list: [],
      evaluateId:'',
      formData: []
    };
  },
  methods: {
    submit(item) {
      for (let i in this.formData) {
        if (!this.formData[i].star || !this.formData[i].content) {
          this.$toast({
            message: "请完善评价内容"
          });
        } else {
          let obj = [...this.formData];
          for (let i = 0; i < obj.length; i++) {
            obj[i].goodId = this.list[i].goodId;
            obj[i].goodDetailId = this.list[i].goodDetailId;
            delete obj[i].imageArr;
          }

          publish(obj, this.$route.query.id).then(res => {
            if (res.code == 200) {
              this.$router.push({
                path: '/success'
              });
            }
          });
        }
      }
    },
    async onRead(file, index) {
      let url = await uploadImg(file);
      this.formData[index].imageArr[
        this.formData[index].imageArr.length - 1
      ].url = url;
      let arr = [];
      for (let i = 0; i < this.formData[index].imageArr.length; i++) {
        arr.push(this.formData[index].imageArr[i].url);
      }
      this.formData[index].image = arr.toString();
    },
    init() {
      orderDetail({ orderId: this.$route.query.id }).then(res => {
        this.list = res.data.list;
        this.evaluateId = res.data.evaluateId;
        for (let i in this.list) {
          this.formData.push({});
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