<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="total">累计抽奖获得：{{total/100}}元</div>
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i" @click="item.type!=2?toNext('/merchantsList/merchantsDetail',item.busiUserId):''">
        <img :src="url+item.storeImageUrl" class="cover" v-if="item.type!=2"/>
        <img src="@/assets/yu2.png" class="cover" v-else/>
        <div class="name">
          {{item.name||"平台抽奖"}}
          <span v-if="item.type!=2">{{item.name}}</span>
        </div>
        <div class="instro out">抽奖时间 {{item.createDate}}</div>
        <div class="right upDown">
          <div class="money">{{item.money/100}}元</div>
        </div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
    </div>
  </div>
</template>

<script>
import { prizeRecord } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url:UPLOAD_DOMAIN,
      total:0,
      list:[]
    };
  },
  methods: {
    toNext(msg,id) {
      this.$router.push({
        path: msg,
        query:{
          id
        }
      });
    },
    init() {
      prizeRecord().then(res=>{
        this.total=res.data.total
        this.list=res.data.list
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