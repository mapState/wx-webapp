<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="info">
      <div class="title" @click="join=true">
        我的身份
        <img src="@/assets/er.png" class="upDown" />
      </div>
      <div class="name">
        <div class="img upDown">
          <van-uploader :after-read="(file)=>onRead(file,'')">
            <img :src="url+imgUrl" alt v-if="imgUrl" />
            <img :src="url+detail.mak.image" alt v-else-if="detail.mak.image" />
            <img src="@/assets/mo.png" v-else />
          </van-uploader>
        </div>
        {{detail.mak.realName}}
        <div class="mid upDown">
          余额：
          <span>{{detail.mak.money/100}}</span>
        </div>
        <div class="right upDown">{{detail.mak.type==1?'合伙人':detail.mak.type==2?'管理':'推广员'}}</div>
      </div>
    </div>
    <div class="data">我的数据</div>
    <div class="list">
      <div class="item" @click="toNext('/totalMoney')">
        <img src="@/assets/money10.png" class="top2" />
        <div class="num">￥{{detail.makA/100}}</div>
        <div class="name">店铺总营业额</div>
      </div>
      <div class="item" @click="toNext('/totalBuss')">
        <img src="@/assets/market10.png" class="top2" />
        <div class="num">{{detail.makB}}</div>
        <div class="name">推广总商铺数</div>
      </div>
      <div class="item" @click="toNext('/team')" v-show="detail.mak.type==1||detail.mak.type==2">
        <img src="@/assets/team.png" class="top2" />
        <div class="num">{{detail.makC}}</div>
        <div class="name">团队人员</div>
      </div>
      <div class="item">
        <img src="@/assets/square2.png" class="top2" />
        <div class="num">{{detail.makD}}</div>
        <div class="name">待审核商铺</div>
      </div>
      <div class="item">
        <img src="@/assets/add10.png" class="top" />
        <div class="num">{{detail.makE}}</div>
        <div class="name">当月新增商铺</div>
      </div>
      <div class="item" @click="toNext('/totalRed')">
        <img src="@/assets/money11.png" class="top2" />
        <div class="num">￥{{detail.mak.allMoney/100}}</div>
        <div class="name">已结算分红</div>
      </div>
      <div class="item pad" @click="toNext('/cDetail')">
        <img src="@/assets/record3.png" />
        <div class="name">提现记录</div>
      </div>
      <div class="item pad" @click="toNext('/tiXian')">
        <img src="@/assets/money10.png" class="top" />
        <div class="name">我要提现</div>
      </div>
      <div class="item pad" @click="$router.push({path: '/come',query: {id:detail.mak.id}});">
        <img src="@/assets/market11.png" class="top" />
        <div class="name">商家录入</div>
      </div>
    </div>
    <van-popup v-model="join">
      <div class="join">
        <qrcode-vue :value="value" level="H" class="er" :size="size"></qrcode-vue>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { console,updateImage } from "@/api/mak";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { uploadImg } from "@/utils/upload";
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      join: false,
      show: false,
      imgUrl: "",
      value: "https://example.com",
      size: 240,
      detail: { mak: {} }
    };
  },
  methods: {
    async onRead(file, type) {
      this.imgUrl = await uploadImg(file);
      updateImage({image:this.imgUrl})
    },
    toNext(msg, active) {
      this.$router.push({
        path: msg,
        query: {
          where:1
        }
      });
    },
    init() {
      console().then(res => {
        this.value = "http://hxkjzjlm.top/home/#/regist?id=" + res.data.mak.id;
        this.detail = res.data;
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
>>> canvas {
}
</style>