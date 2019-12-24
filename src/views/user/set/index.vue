<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <van-uploader :after-read="onRead">
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
    <div class="item" @click="detail.phone?toNext('/mobile',2):toNext('/setMobile')">
      手机号码
      <span>
        {{detail.phone}}
        <img src="@/assets/jian.png" />
      </span>
    </div>
    <div class="item" @click="toNext('/addressList')">
      收货地址
      <span>
        <img src="@/assets/jian.png" />
      </span>
      <div class="right out">
        {{detail.regionAddress+detail.address}}
        <div v-show="detail.addressId">默认地址</div>
      </div>
    </div>
    <van-popup v-model="nameShow">
      <div class="setName">
        <div class="title">
          修改昵称
          <img src="@/assets/close.png" alt mode="widthFix" @click="nameShow=false" />
        </div>
        <input type="text" placeholder="请输入昵称" v-model="name" />
        <div class="submit" @click="detailSet">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { consoleDetail, detailSet } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { uploadImg } from "@/utils/upload";
export default {
  data() {
    return {
      nameShow: false,
      url: UPLOAD_DOMAIN,
      detail: {},
      name: ""
    };
  },
  methods: {
    toNext(msg, addressId) {
      this.$router.push({
        path: msg,
        query: {
          addressId
        }
      });
    },
    async onRead(file, type) {
      let url = await uploadImg(file);
      this.detail.image=url
      this.detailSet()
    },
    detailSet() {
      detailSet({ image: this.detail.image, name: this.name }).then(res => {
        this.consoleDetail()
        this.nameShow=false
      });
    },
    consoleDetail() {
      consoleDetail().then(res => {
        this.detail = res.data;
      });
    },

    init() {
      this.consoleDetail()
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
>>> .van-popup {
  background: transparent;
}
</style>