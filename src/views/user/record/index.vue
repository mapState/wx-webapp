<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" @search="getList" v-model="name"/>
    </div>
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="type1" :options="option1" @change="getType"/>
        <van-dropdown-item v-model="type2" :options="option2" @change="getType"/>
      </van-dropdown-menu>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.storeImageUrl" class="upDown" />
        <div class="name">{{item.name}}</div>
        <div class="tips">消费时间 {{item.createDate}} </div>
        <div class="right upDown">{{item.money/100}}元</div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
    </div>
  </div>
</template>

<script>
import { consumeSearch, getGoodType } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      type1: '',
      type2: '1',
      option1: [
      ],
      option2: [
        { text: "时间正序", value: "1" },
        { text: "时间倒序", value: "0" }
      ],
      list:[],

      name:''
    };
  },
  methods: {
    getType(e){
      this.getList()
    },
    getList(){
      consumeSearch({page:1,size:10000,name:this.name,type1:this.type1,type2:this.type2}).then(res=>{
        this.list=res.data.data
      })
    },
    init() {
      this.getList()
      getGoodType().then(res=>{
        for(let i=0;i<res.data.length;i++){
          this.option1[i]={
            text:res.data[i].text,
            value:res.data[i].id
          }
        }
        this.option1.unshift({
          text:'全部',
          value:''
        })
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
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 346px;
  height: 36px;
  margin: 0 auto;
}
>>> .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
  border: none
}
>>> .van-dropdown-menu__title{
  padding-left: 0;
}
</style>