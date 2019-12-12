<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="tip">*欢迎加入众奖联盟，请填写申请信息</div>
    <div class="input">
      <div class="item require">
        <van-field required v-model="username" label="真实姓名：" placeholder="请填写姓名" />
      </div>
      <div class="item require">
        <van-field required v-model="username" label="手机号：" placeholder="请填写您的手机号" />
      </div>
      <div class="item">
        <van-field v-model="username" label="登录密码：" placeholder="请填写您的登录密码" />
      </div>
      <div class="item2">创客类型：
        <span><img src="@/assets/dui.png" class="upDown" />推广员</span>
      </div>
      <div class="item2" @click="show=true">选择推广区域
        <div class="right">
          <img src="@/assets/jian.png" class="upDown" />杭州市.江干区
        </div>
      </div>
      <div class="card">
        <div class="title"><span>*</span>请添加身份证正反面信息</div>
        <van-uploader v-model="fileList" multiple :max-count="2" />
      </div>
    </div>
    <div class="xieyi">
      <van-checkbox v-model="checked" class="left"></van-checkbox>本人已阅读并同意
      <span>《创客注册协议》</span>
    </div>
    <div class="sub">提交注册</div>
    <van-popup v-model="show" position="bottom" >
      <van-area :area-list="areaList" @confirm="chooseArea"/>
    </van-popup>
  </div>
</template>

<script>
import area from "@/utils/area";
export default {
  data() {
    return {
      username:'',
      checked:false,
      areaList: area,
      show: false,
      fileList: []
    };
  },
  methods: {
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
  font-weight: 500;
  color: #000;
  margin-right: 10px;
  font-size: 14px;
}
>>> .van-cell{
  padding: 19px 0;
}
.require >>>.van-cell{
  padding-left: 10px
}
>>> .van-cell--required::before{
  left: 0px;
  color: #FF3B30;
  font-size: 20px
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
  margin-right: 10px
}
>>> .van-uploader__preview-delete{
  color: #FF3B30;
  right: 0px;
}
</style>