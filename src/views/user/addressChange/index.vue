<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <van-field v-model="formData.name" label="收货人：" placeholder="请输入收货人" />
    </div>
    <div class="item">
      <van-field v-model="formData.phone" label="手机号码：" placeholder="请输入手机号码" type="number" />
    </div>
    <div class="item" @click="show=true">
      <van-field v-model="formData.regionAddress" label="所在地区：" placeholder="请选择省市区" />
    </div>
    <div class="item">
      <van-field v-model="formData.address" label="详细地址：" placeholder="如街道、门牌号、小区、楼栋号、单元室" />
    </div>
    <div class="item">
      <div class="label">
        设为默认：
        <div class="switch upDown">
          <van-switch v-model="formData.moren" size="20px" />
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" @confirm="chooseArea" @cancel="show=false" />
    </van-popup>

    <div class="sub" @click="addressUpdate">确定</div>
  </div>
</template>

<script>
import area from "@/utils/area";
import { addressUpdate, addressFindById } from "@/api/user";
export default {
  data() {
    return {
      username: "",
      code: "",
      new: "",
      areaList: area,
      show: false,
      addressMsg: "",
      formData: {
        regionAddress: "",
        name: "",
        phone: "",
        province: "",
        city: "",
        area: "",
        address: "",
        moren: 0
      },
      checked: false
    };
  },
  methods: {
    chooseArea(e) {
      this.formData.province = e[0].code;
      this.formData.city = e[1].code;
      this.formData.area = e[2].code;
      this.formData.regionAddress =
        e[0].name + " " + e[1].name + " " + e[2].name;
      this.show = false;
    },
    addressUpdate() {
      let obj = { ...this.formData };
      obj.moren = Number(obj.moren);
      addressUpdate(obj).then(res => {
        this.$router.go(-1);
        this.$toast({
          message: res.message
        });
      });
    },
    init() {
      if (this.$route.query.id) {
        addressFindById({ id: this.$route.query.id }).then(res => {
          res.data.moren = Boolean(res.data.moren);
          this.formData = { ...res.data };
          this.formData.phone = Number(this.formData.phone);
          this.formData.id = "";
          console.log(this.formData);
        });
      }
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
  font-weight: 600;
}
</style>