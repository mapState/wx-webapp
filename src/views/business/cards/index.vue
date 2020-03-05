<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item litInput2">
      <van-field
        v-model="formData.concessionDiscount"
        label="消费折扣"
        placeholder="请输入每笔订单消费折扣"
        type="number"
      />
      <span class="upDown">输入80即8折</span>
    </div>
    <div class="item">
      <van-field v-model="formData.legalName" label="企业法人" placeholder="请输入营业执照法人" />
    </div>
    <div class="photos">
      <div class="title">法人身份证-正反面</div>
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="2"
        :after-read="(file)=>onRead(file,'fileList')"
      >
        <div class="upload">
          <van-icon name="plus" />
        </div>
      </van-uploader>
    </div>
    <div class="photos">
      <div class="title">营业执照</div>
      <van-uploader :after-read="(file)=>onRead(file,'businessLicenseUrl')">
        <img :src="url+formData.businessLicenseUrl" alt v-if="formData.businessLicenseUrl" />
        <div class="upload" v-else>
          <van-icon name="plus" />
        </div>
      </van-uploader>
    </div>
    <div class="photos">
      <div class="title">门店形象图</div>
      <van-uploader :after-read="(file)=>onRead(file,'storeImageUrl')">
        <img :src="url+formData.storeImageUrl" alt v-if="formData.storeImageUrl" />
        <div class="upload" v-else>
          <van-icon name="plus" />
        </div>
      </van-uploader>
    </div>
    <div class="xieyi">
      <van-checkbox v-model="checked" class="left"></van-checkbox>本人已阅读并同意
      <span>《入驻服务协议》</span>
    </div>
    <div class="sub" @click="submit">提交</div>
  </div>
</template> 

<script>
import { busiAuth } from "@/api/bussiness";
import { uploadImg } from "@/utils/upload";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { ruleValidate } from "@/utils/utils";
export default {
  data() {
    return {
      url:UPLOAD_DOMAIN,
      formData: {
        concessionDiscount: "",
        legalName: "",
        legalCardUrl: "",
        businessLicenseUrl: "",
        storeImageUrl: ""
      },
      subDis: false,
      checked: true,
      img: "https://www.baidu.com/img/baidu_jgylogo3.gif",
      fileList: []
    };
  },
  methods: {
    async onRead(file, type) {
      let url = await uploadImg(file);
      if (type == "fileList") {
        this.fileList[this.fileList.length - 1].url = url;
        let arr = [];
        for (let i = 0; i < this.fileList.length; i++) {
          arr.push(this.fileList[i].url);
        }
        this.formData.legalCardUrl = arr.toString();
      } else {
        this.formData[type] = url;
      }
    },
    submit() {
      if (ruleValidate(this.formData) && this.fileList.length == 2&&checked) {
        busiAuth(this.formData).then(res => {
          if (res.code == 200) {
            this.$toast({
              message: res.message
            });
            // this.$router.push({
            //   path: '/login'
            // });
          }
        });
      } else {
        this.$toast({
          message: "请完善入驻信息"
        });
      }
    },
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
  font-weight: 600;
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
  margin-right: 10px;
}
.litInput2 {
  padding-right: 110px;
  border-bottom: 10px solid #f3f3f3 !important;
  border-top: 1px solid #ddd;
}
>>> .van-uploader__preview-delete {
  color: #ff3b30;
  right: 0px;
}
</style>