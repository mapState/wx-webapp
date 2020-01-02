<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="请输入城市名" v-model="value" @input="getList"/>
    </div>
    <div class="city">
      <van-index-bar :sticky-offset-top="0"> 
        <div v-for="(item,i) of list" :key="i">
          <van-index-anchor :index="i" />
          <van-cell :title="c.name" @click.native="chooseNative(item[j])" v-for="(c,j) in item" :key="j"/>
        </div>
      </van-index-bar>
    </div>
    
  </div>
</template>

<script>
import { regionGetAll } from "@/api/common";
export default {
  data() {
    return {
      value: "",
      list: {}
    };
  },
  methods: {
    chooseNative(e) {
      this.$router.push({
        path: '/home',
        query: {
          name:e.name,
          lat:e.lat,
          lng:e.lng,
        }
      });
    },
    getList(){
      regionGetAll({name:this.value}).then(res => {
        this.list=res.data
      });
    },
    init() {
      this.getList()
    }
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
.search {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 20;
}
.city {
  padding-top: 80px;
}
.city2{
  margin-top: 80px;
  padding: 0 15px;
  .item{
    line-height: 45px;
    border-bottom:1px solid #eee;
    font-size: 16px
  }
}
</style>
<style scoped>
</style>