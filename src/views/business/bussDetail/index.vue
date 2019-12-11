<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="data" @click="show=true">
      2019年10月
      <img src="@/assets/xia.png" />
      <div class="out">支出:262</div>
      <div class="in">收入:262</div>
    </div>
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">张三-消费</div>
        <div class="instro out">时间 2019-10-20 19:30:56</div>
        <div class="right upDown">
          +118元
          <div class="tip">原价120元，折扣20</div>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">张三-消费</div>
        <div class="instro out">时间 2019-10-20 19:30:56</div>
        <div class="right upDown">
          +118元
          <div class="tip">原价120元，折扣20</div>
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