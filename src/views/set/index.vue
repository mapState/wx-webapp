<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <van-uploader>
      <div class="item">
        头像
        <div class="img">
          <img src="@/assets/cover.png" />
        </div>
      </div>
    </van-uploader>
    <div class="item" @click="nameShow=true">
      昵称
      <span>张三三</span>
    </div>
    <div class="item">
      手机号码
      <span>130****0130 <img src="@/assets/jian.png" /></span>
    </div>
    <div class="item">
      收货地址
      <span><img src="@/assets/jian.png" /></span>
      <div class="right">
        杭州市江干区九和路
        <div>默认地址</div>
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
export default {
  data() {
    return {
      nameShow:false,
      name:''
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
>>> .van-popup{
  background: transparent;
}
</style>