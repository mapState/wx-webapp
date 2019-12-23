<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <div @click="chooseNav(0)" :class="{active:nav==0}">全部</div>
      <div @click="chooseNav(1)" :class="{active:nav==1}">有图</div>
      <div @click="chooseNav(2)" :class="{active:nav==2}">好评</div>
      <div @click="chooseNav(3)" :class="{active:nav==3}">中评</div>
      <div @click="chooseNav(4)" :class="{active:nav==4}">差评</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <div class="name">
          <img :src="url+item.userImage" class="upDown" />
          {{item.userName}}
          <div class="time">{{item.createDate}}</div>
        </div>
        <div class="words">
          {{item.content}}
          <div class="imgs">
            <img :src="url+img" v-for="(img,j) in item.image" :key="j"/>
          </div>
        </div>
      </div>
      <div style="height:100px"></div>
      <div class="bottom">
        <div>
          <img src="@/assets/return.png" class="leftRight" @click="$router.push({path: '/home'});" />
          <p>返回首页</p>
        </div>
        <div @click="collect">
          <img src="@/assets/shou.png" class="leftRight" v-if="status==0" />
          <img src="@/assets/starA.png" class="leftRight" v-else />
          <p>{{status==0?'收藏店铺':'取消收藏'}}</p>
        </div>
        <div @click="toNext('/goods',$route.query.id,1)">加入购物车</div>
        <div @click="toNext('/goods',$route.query.id,1)">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBusiInfo, collectStatus, collect,evaluateList } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      nav: 0,
      status: "",
      url:UPLOAD_DOMAIN,
      list:[]
    };
  },
  methods: {
    toNext(msg, id,where) {
      this.$router.push({
        path: msg,
        query: {
          id,
          where,
          busiUserId:this.$route.query.id
        }
      });
    },
    chooseNav(e) {
      this.nav = e;
      this.getList(e)
    },
    collect() {
      collect({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.collectStatus();
      });
    },
    collectStatus() {
      collectStatus({ busiUserId: this.$route.query.busiUserId }).then(res => {
        this.status = res.data;
      });
    },
    getList(type){
      evaluateList({page:1,size:1000,goodId:this.$route.query.id,type}).then(res=>{
        this.list=res.data.data
        for(let i=0;i<this.list.length;i++){
          try {
            this.list[i].image=this.list[i].image.split(',')
          } catch (error) {
            
          }
        }
        console.log(this.list)
      })
    },
    init() {
      this.collectStatus();
      this.getList(0);
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