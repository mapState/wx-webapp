<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="data" @click="show=true">
      {{msg}}
      <img src="@/assets/xia.png" />
      <div class="out">提现:￥{{sum/100}}</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <div class="num">提现{{item.money/100}}元</div>
        <div class="time">{{item.createDate}}</div>
        <div class="right upDown">-{{item.money/100}}</div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :formatter="formatter"
        @confirm="cashList"
        @cancel="show=false"
      />
    </van-popup>
  </div>
</template>

<script>
import { cashList } from "@/api/mak";
export default {
  data() {
    return {
      msg: "",
      show: false,
      currentDate: new Date(),
      minDate: new Date(2000, 10, 1),
      list: [],
      sum:0,
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
    cashList() {
      this.sum=0;
      cashList({
        date:
          this.currentDate.getFullYear() +
          "" +
          (this.currentDate.getMonth() + 1)
      }).then(res => {
        this.list = res.data.data;
        for(let i=0;i<this.list.length;i++){
          this.sum+=this.list[i].money
        }
        this.msg =
          this.currentDate.getFullYear() +
          "年" +
          (this.currentDate.getMonth() + 1) +
          "月";
        this.show = false;
      });
    },
    init() {
      this.msg =
        this.currentDate.getFullYear() +
        "年" +
        (this.currentDate.getMonth() + 1) +
        "月";
      this.cashList();
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