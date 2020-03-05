<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="photos">
      <div class="title">门店形象图</div>
      <van-uploader :after-read="onRead">
        <img :src="url+detail.storeImageUrl" v-if="detail.storeImageUrl">
        <div class="upload" v-else>
          <van-icon name="plus"/>
        </div>
      </van-uploader>
    </div>
    <div class="input">
      <div class="title">公告内容：</div>
      <van-cell-group>
        <van-field
          v-model="detail.firm"
          rows="1"
          autosize
          type="textarea"
          placeholder="您可以这样输：今日八折，全场商品任您挑"
        />
      </van-cell-group>
    </div>
    <div class="input">
      <div class="title">消费折扣：
        <div style="color:#aaa;font-size:12px;display:inline-block">输入80即8折</div>
      </div>
      <div class="right upDown">当前折扣{{detail.concessionDiscount/10}}折</div>
      <van-cell-group>
        <van-field v-model="detail.concessionDiscount" type="number"/>
      </van-cell-group>
    </div>
    <div class="reset">
      <div style="border-bottom:1px solid #ddd" @click="toNext('/mobile',1)">修改手机号
        <div class="mobile upDown">{{detail.phone}}</div>
        <img src="@/assets/jian.png" class="upDown">
      </div>
      <div @click="toNext('/psd')">
        修改登录密码
        <img src="@/assets/jian.png" class="upDown">
      </div>
    </div>
    <div class="get" style="border-bottom:1px solid #ddd">支持快递
      <div class="right upDown">
        <van-switch v-model="detail.supportExpress" size="20px"/>
      </div>
    </div>
    <div class="get" style="border-bottom:1px solid #ddd">到店取货
      <div class="right upDown">
        <van-switch v-model="detail.supportStore" size="20px"/>
      </div>
    </div>
    <div class="get" @click="logout">解除绑定/退出登录</div>
    <div class="btn">
      <div class="sub" @click="updateBusiInfo">确定保存</div>
    </div>
  </div>
</template>

<script>
import {
  getBusiInfo,
  updateBusiInfo,
  updateOpenId,
  logout
} from "@/api/bussiness";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { uploadImg } from "@/utils/upload";
export default {
  data() {
    return {
      message: "",
      checked: false,
      url: UPLOAD_DOMAIN,
      detail: {
        storeImageUrl: "",
        concessionDiscount: "",
        phone: "",
        firm: "",
        supportExpress: 1,
        supportStore: 1
      }
    };
  },
  methods: {
    toNext(msg, active) {
      this.$router.push({
        path: msg
      });
    },
    async onRead(file) {
      let url = await uploadImg(file);
      this.detail.storeImageUrl = url;
    },
    updateBusiInfo() {
      let obj = this.detail;
      obj.supportExpress = Number(obj.supportExpress);
      obj.supportStore = Number(obj.supportStore);
      if (obj.concessionDiscount > this.detail.lowDiscount) {
        this.$toast({
          message: `折扣消费，请输入小于${this.detail.lowDiscount}的数值`
        });
        this.getBusiInfo();
      } else {
        updateBusiInfo(obj).then(res => {
          this.getBusiInfo();
          this.$toast({
            message: `更新成功`
          });
        });
      }
    },
    logout() {
      this.$dialog
        .confirm({
          title: "是否解除绑定微信？"
        })
        .then(() => {
          updateOpenId({ openId: "" });
          logout()
            .then(res => {})
            .then(res => {
              this.$router.push({
                path: "/login"
              });
            });
        })
        .catch(() => {});
    },
    getBusiInfo() {
      getBusiInfo().then(res => {
        this.detail = res.data;
        this.detail.supportExpress = Boolean(this.detail.supportExpress);
        this.detail.supportStore = Boolean(this.detail.supportStore);
      });
    },

    init() {
      this.getBusiInfo();
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