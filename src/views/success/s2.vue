<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <img src="@/assets/success.png">
    <div class="txt">支付成功</div>
    <div class="shop">{{this.$route.query.name}}</div>
    <div class="sub" @click="toNext">完成</div>
    <div class="num">￥{{this.$route.query.money}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    toNext(msg, id) {
      this.$router.push({
        path: "/merchantsList/merchantsDetail",
        query: {
          id:this.$route.query.id
        }
      });
    },
    init() {}
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
img {
  display: block;
  margin: 0 auto;
  width: 60px;
  margin-top: 85px;
}
.txt {
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(94, 57, 8, 1);
  text-align: center;
  margin-top: 20px;
}
.sub {
  width: 290px;
  line-height: 44px;
  background: rgba(255, 231, 199, 1);
  border-radius: 5px;
  text-align: center;
  position: fixed;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 15px;
  font-weight: bold;
  color: rgba(94, 57, 8, 1);
}
.shop {
  font-size: 17px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(94, 57, 8, 1);
  text-align: center;
  margin-top: 12px;
}
.num {
  font-size: 17px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 37, 14, 1);
  text-align: center;
  margin-top: 20px;
}
</style>
<style scoped>
</style>