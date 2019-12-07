<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="money">
      <div class="title">充值金额</div>
      <div class="num">
        ￥
        <input type="number" />
      </div>
      <div class="tips">
        当前零钱余额652.2元
      </div>
      <div class="btn">充值</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      way:1
    };
  },
  methods: {
    chooseWay(e){
      this.way=e;
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
>>> .van-field__label{
  width: auto;
}
</style>