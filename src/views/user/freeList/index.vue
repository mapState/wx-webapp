<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" @search="cusConsume" v-model="name"/>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.storeImageUrl" class="upDown" />
        <div class="name">{{item.name}}</div>
        <div class="tips">消费{{item.detailA}}次  免单{{item.detailB}}次</div>
        <div class="r1">
          <div class="num">-{{item.detailC/100}}</div>
          消费总额
        </div>
        <div class="r1 r2">
          <div class="num">+{{item.detailD/100}}</div>
          免单总额
        </div>
      </div>

    </div>
    <empty msg="暂无数据" v-show="list.length==0" />
  </div>
</template>

<script>
import { cusConsume, freeRecord } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url:UPLOAD_DOMAIN,
      list:[],
      name:''
    };
  },
  methods: {
    
    cusConsume(){
      cusConsume({page:1,size:1000000,name:this.name}).then(res=>{
        this.list=res.data.data
      })
    },
    init() {
      this.cusConsume()
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
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 346px;
  height: 36px;
  margin: 0 auto;
}
</style>