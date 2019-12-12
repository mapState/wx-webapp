<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="data" @click="show=true">
      2019年10月
      <img src="@/assets/xia.png" />
      <div class="out">提现:￥262</div>
    </div>
    <div class="list">
      <div class="item">
        <div class="num">提现2300元</div>
        <div class="time">10月26日  18:40:00</div>
        <div class="right upDown">-2300</div>
      </div>
      <div class="item">
        <div class="num">提现2300元</div>
        <div class="time">10月26日  18:40:00</div>
        <div class="right upDown">-2300</div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      currentDate: new Date(),
      minDate: new Date(2000, 10, 1)
    };
  },
  methods: {
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
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
</style>