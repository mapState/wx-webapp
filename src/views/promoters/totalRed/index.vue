<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="titleTop">
      已结算总额
    </div>
    <div class="top">
      {{time}}至今
      <div class="right">￥{{sum/100}}</div>
    </div>
    <div class="title">订单明细</div>
    <div class="list">
      <div class="title">
        <div>订单编号</div>
        <div>分红金额(元)</div>
        <div>分红时间</div>
      </div>
      <div class="item" v-for="(item,i) in list" :key="i">
        <div>{{item.orderPayId}}</div>
        <div>{{item.money/100}}</div>
        <div>{{item.createDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { moneyList } from "@/api/mak";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      list:[],
      sum:0,
      time:''
    };
  },
  methods: {
    init() {
      moneyList().then(res=>{
        this.list=res.data.data;
        for(let i=0;i<this.list.length;i++){
          this.sum+=this.list[i].money
        }
        this.time=this.list[0].createDate
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