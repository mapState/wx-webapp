<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.storeImageUrl" class="upDown" />
        <div class="mid">
          <div class="name">{{item.name}}</div>
          <div class="time">入驻时间：{{item.createDate}}</div>
        </div>
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
      list:[]
    };
  },
  methods: {
    init() {
      turnover().then(res=>{
        this.list=res.data;
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