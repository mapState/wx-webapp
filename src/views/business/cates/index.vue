<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)"/>
      分类管理
    </div>
    <div class="cates">
      <div class="item">XXX分类
         <img src="@/assets/cha.png"/>
      </div>
      <div class="item">XXX分类
         <img src="@/assets/cha.png"/>
      </div>
      <div class="item">XXX分类
         <img src="@/assets/cha.png"/>
      </div>
      <div class="item">XXX分类
         <img src="@/assets/cha.png"/>
      </div>
      <div class="item">XXX分类
         <img src="@/assets/cha.png"/>
      </div>
    </div>
    <div class="add" @click="show=true">+新增分类</div>
    <van-popup v-model="show">
      <div class="new">
        <div class="title">新增分类</div>
        <input type="text" placeholder="输入分类名称">
        <div class="sure" @click="show=false">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
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