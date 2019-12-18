<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <img src="@/assets/way1.png" class="top"/>
    <div class="num">{{(data/100).toFixed(2)}}</div>
    <div class="tip">余额（元）</div>
    <div class="recharge">充值</div>
    <div class="xian">提现</div>
  </div>
</template>

<script>
import { balance } from "@/api/user";
export default {
  data() {
    return {
      data:''
    };
  },
  methods: {
    init() {
      balance().then(res=>{
        this.data=res.data
      })
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

</style>