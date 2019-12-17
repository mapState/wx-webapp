<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="msg">
      <img :src="url+detail.storeImageUrl" alt />
    </div>
    <div class="content">
      <div class="contact">
        <div class="name">{{detail.name}}</div>
        <div class="labels">
          <span>{{detail.typeName}}</span>
          <span>可奖励{{detail.money/100}}元</span>
          <span>抽奖池{{detail.bonusDay/100}}元</span>
        </div>
        <div class="position">
          <img src="@/assets/po2.png" class="im1" />
          <span class="out">{{detail.regionAddress+' '+ detail.address}}</span>
          <img src="@/assets/po3.png" class="im2" />
          <span class="shu"></span>
          <a :href="'tel:'+detail.phone">
            <img src="@/assets/mobile.png" class="im3" />
          </a>
        </div>
        <img src="@/assets/shou.png" class="shou" v-if="status==0" @click="collect"/>
        <img src="@/assets/starA.png" class="shou" v-else @click="collect"/>
      </div>
      <div class="input">
        <span>支付金额:</span>
        <input placeholder="请输入支付金额" />
      </div>
      <div class="ways">
        <van-radio-group v-model="ways">
          <div class="item" @click="ways='1'">
            <img src="@/assets/way1.png" class="upDown" />余额支付
            <div class="upDown mid">剩余{{detail.money/100}}</div>
            <div class="upDown right">
              <van-radio name="1"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='2'">
            <img src="@/assets/way2.png" class="upDown" />微信支付
            <div class="upDown right">
              <van-radio name="2"></van-radio>
            </div>
          </div>
          <div class="item" @click="ways='3'">
            <img src="@/assets/way3.png" class="upDown" />支付宝支付
            <div class="upDown right">
              <van-radio name="3"></van-radio>
            </div>
          </div>
        </van-radio-group>
      </div>
      <div class="sub">支付</div>
    </div>
  </div>
</template>

<script>
import { payDetail,collectStatus, collect } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      tab: 1,
      status: 1,
      time: 30 * 60 * 60 * 1000,
      ways: "1",
      url: UPLOAD_DOMAIN,
      detail: {}
    };
  },
  methods: {
    chooseTab(e) {
      this.tab = e;
    },
    collect() {
      collect({ busiUserId: this.$route.query.id }).then(res=>{
        this.collectStatus()
      })
    },
    collectStatus() {
      collectStatus({ busiUserId: this.$route.query.id }).then(res => {
        this.status = res.data;
      });
    },
    init() {
      payDetail({ busiUserId: this.$route.query.id }).then(res => {
        this.detail = res.data;
      });
      this.collectStatus()
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
>>> .van-swipe {
  height: 30px;
}
>>> .van-count-down {
  font-size: 15px;
  font-weight: bold;
  color: rgba(255, 59, 48, 1);
}
</style>