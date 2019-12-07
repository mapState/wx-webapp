<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item">
      <div class="name">廖强 <span>13034020130</span></div>
      <div class="detail"><span>默认</span> 浙江省 杭州市 西湖区 大都风情文苑大都风情文苑</div>
      <div class="right upDown">编辑</div>
    </div>
    <div class="item">
      <div class="name">廖强 <span>13034020130</span></div>
      <div class="detail"><span>默认</span> 浙江省 杭州市 西湖区 大都风情文苑大都风情文苑</div>
      <div class="right upDown">编辑</div>
    </div>
    <div class="sub">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      old: "",
      code: "",
      new: ""
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
>>> .van-popup {
  background: transparent;
}
>>> .van-field__label{
  width: auto;
}
</style>