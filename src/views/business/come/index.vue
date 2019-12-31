<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="banner">
      <img :src="imgPath" @click="toAd()" />
    </div>
    <div class="item">
      <van-field v-model="formData.name" label="商家名称" placeholder="请输入您的商户名称" />
    </div>
    <div class="litInput item" @click="rankShow=true">
      <van-field v-model="formData.businessScopeTxt" label="经营范围" placeholder="请选择您的经营范围"/>
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="item">
      <van-cell-group>
        <van-field
          v-model="formData.intro"
          rows="2"
          autosize
          label="商户介绍"
          type="textarea"
          placeholder="请简单介绍您的商铺"
        />
      </van-cell-group>
    </div>
    <div class="item litInput" style="border-bottom:10px solid #f2f2f2" @click="address=true">
      <van-field v-model="addressDetail" label="店铺地址" placeholder="请选择您的店铺地址" />
      <img src="@/assets/jian.png" class="upDown" />
    </div>
    <div class="item" style="border:none">
      <van-field v-model="formData.linkName" label="联系人" placeholder="请输入您的店铺联系人" />
    </div>
    <div class="item litInput2">
      <van-field v-model="formData.phone" label="手机号" placeholder="请输入联系人的手机号码" type="number" />
      <span class="upDown">用于商家登录账号</span>
    </div>
    <div class="item">
      <van-field v-model="formData.password" label="登录密码" placeholder="请输入商家登入密码 " />
    </div>
    <div class="item" style="border:none">
      <van-field v-model="formData.alipayName" label="支付宝姓名" placeholder="请输入商家收款的支付宝姓名" />
    </div>
    <div class="item litInput2">
      <van-field v-model="formData.alipayAccount" label="支付宝账号" placeholder="请输入商家支付宝账号" />
      <span class="upDown">用于商家支付宝收款</span>
    </div>
    <div class="item litInput2" style="border:none">
      <van-field
        v-model="formData.concessionDiscount"
        label="让利折扣"
        placeholder="请输入每笔订单让利折扣"
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
    <van-popup v-model="address">
      <div class="info">
        <div class="title">选择地址</div>
        <div class="ads" style="border-top: 1px solid #d2d2d2;" @click="areaShow=true">
          <img src="@/assets/jian.png" alt class="upDown" />
          <div class="area">{{formData.regionAddress?formData.regionAddress:'选择地区'}}</div>
        </div>
        <div class="ads">
          <van-cell-group>
            <van-field
              v-model="formData.address"
              rows="2"
              type="textarea"
              placeholder="详细地址（如街道、小区、乡镇、村）"
            />
          </van-cell-group>
        </div>
        <van-button type="danger" class="sub" @click="chooseAddress">保存</van-button>
      </div>
    </van-popup>
    <van-popup v-model="rankShow">
      <div class="rank">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="chooseRank"
        />
      </div>
    </van-popup>
    <van-popup v-model="areaShow" position="bottom">
      <van-area :area-list="areaList" @confirm="chooseArea" @cancel="areaShow=false" />
    </van-popup>
  </div>
</template>

<script>
import area from "@/utils/area";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { uploadImg } from "@/utils/upload";
import { getGoodType, advert, busiAuth } from "@/api/bussiness";
import { ruleValidate } from "@/utils/utils";
export default {
  data() {
    return {
      imgUrl: "",
      imgPath: "",
      url:UPLOAD_DOMAIN,
      
      addressDetail: "",
      areaList: area,
      show: false,
      rankShow: false,
      areaShow: false,
      address: false,
      items: [],
      activeId: 0,
      activeIndex: 0,
      formData: {
        address: "",
        regionAddress: "",
        alipayAccount: "",
        intro: "",
        alipayName: "",
        businessScopeTxt: "",
        businessScope: "",
        phone: "",
        linkName: "",
        password: "",
        area: "",
        city: "",
        province: "",
        concessionDiscount: "",
        legalName: "",
        legalCardUrl: "",
        businessLicenseUrl: "",
        storeImageUrl: "",
        name: ""
      },
      checked: true,
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
    chooseArea(e) {
      this.formData.province = e[0].code;
      this.formData.city = e[1].code;
      this.formData.area = e[2].code;
      this.formData.regionAddress = e[0].name + " " + e[1].name + " " + e[2].name;
      this.areaShow = false;
    },
    chooseRank(e) {
      this.formData.businessScopeTxt = e.ptext + "-" + e.text;
      this.formData.businessScope = e.id;
      this.rankShow = false;
    },
    chooseAddress() {
      this.addressDetail =  this.formData.regionAddress+' '+this.formData.address;
      this.address = false;
    },
    submit() {
      if (ruleValidate(this.formData)) {
        if(this.$route.query.id){
          this.formData.makerUserId=this.$route.query.id
        }
        busiAuth(this.formData).then(res => {
          if (res.code == 200) {
            this.$toast({
              message: res.message
            });
            this.$router.push({
              path: "/login"
            });
          }
        });
      } else {
        this.$toast({
          message: "请完善入驻信息"
        });
      }
    },
    toAd() {
      location.href = this.imgUrl;
    },
    init() {
      getGoodType().then(res => {
        this.items = res.data;
      });
      advert().then(res => {
        this.imgUrl = res.data.url;
        this.imgPath = UPLOAD_DOMAIN + res.data.image;
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
>>> .van-popup {
  background: transparent;
}
>>> .van-field__label {
  width: auto;
  min-width: 70px;
  font-weight: 500;
  color: #000;
  margin-right: 10px;
}
.litInput {
  padding-right: 20px;
}
.litInput2 {
  padding-right: 110px;
}
>>> .van-uploader__upload {
  width: 128px;
  height: 72px;
  background: rgba(242, 242, 242, 1);
  border-radius: 2px;
  border: none;
}
>>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
  border:none
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
>>> .van-cell:not(:last-child)::after{
  border:none
}
</style>