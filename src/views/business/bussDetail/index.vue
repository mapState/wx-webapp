<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="data" @click="show=true">
      2019年10月
      <img src="@/assets/xia.png" />
      <div class="out">收入:{{total}}</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.image" class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="instro out">时间 {{item.createDate}}</div>
        <div class="right upDown">
          +{{item.money/100-item.discountMoney/100}}元
          <div class="tip">原价{{item.money/100}}元，折扣{{item.discountMoney/100}}</div>
        </div>
      </div>
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          :min-date="minDate"
          :formatter="formatter"
          @confirm="busiIncomeDetails"
          @cancel="show=false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { busiIncomeDetails } from "@/api/bussiness";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      show: false,
      currentDate: new Date(),
      minDate: new Date(2000, 10, 1),
      url:UPLOAD_DOMAIN,
      list:[],
      total:0
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
    busiIncomeDetails(){
      busiIncomeDetails({date:this.currentDate.getFullYear()+''+(this.currentDate.getMonth()+1)}).then(res=>{
        this.list=res.data.data
        this.total=res.data.total/100
        this.show=false
      })
    },
    init() {
      this.busiIncomeDetails()
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