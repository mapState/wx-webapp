<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <van-uploader>
      <div class="item">
        头像
        <div class="img">
          <img :src="url+detail.image" />
        </div>
      </div>
    </van-uploader>
    <div class="item" @click="nameShow=true">
      昵称
      <span>{{detail.name}}</span>
    </div>
    <div class="item" @click="toNext('/mobile')">
      手机号码
      <span>{{detail.phone}} <img src="@/assets/jian.png" /></span>
    </div>
    <div class="item" @click="toNext('/addressList')">
      收货地址
      <span><img src="@/assets/jian.png" /></span>
      <div class="right">
        {{detail.regionAddress+detail.address}}
        <div v-show="detail.addressId">默认地址</div>
      </div>
    </div>
    <van-popup v-model="nameShow">
      <div class="setName">
        <div class="title">
          修改昵称
          <img
            src="@/assets/close.png"
            alt
            mode="widthFix"
            @click="nameShow=false"
          />
        </div>
        <input type="text" placeholder="请输入昵称" v-model="name" />
        <div class="submit" @click="nameShow=false">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { consoleDetail } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      nameShow:false,
      url:UPLOAD_DOMAIN,
      detail:{},
      name:''
    };
  },
  methods: {
    toNext(msg,active) {
      this.$router.push({
        path: msg,
        query:{
          active
        }
      });
    },
    init() {
      consoleDetail().then(res=>{
        this.detail=res.data
      })
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
>>> .van-popup{
  background: transparent;
}
</style>