<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="titleTop">
      总营业额(元)
    </div>
    <div class="top">
      {{time}}至今
      <div class="right">￥{{sum/100}}</div>
    </div>
    <div class="title">店铺详情</div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.storeImageUrl" class="upDown" />
        <div class="mid">
          <div class="name">{{item.name}}</div>
          <div class="time">{{item.createDate}}~至今</div>
          <div class="tip">总营业额(元)</div>
        </div>
        <div class="num upDown">￥{{item.money/100}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { turnover } from "@/api/mak";
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
      turnover().then(res=>{
        this.list=res.data;
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