<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="searchTop">
      <van-search placeholder="商品名称" v-model="msg" @focus="historyShow=true" @blur="historyShow=false" @search="onSearch"/>
      
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
    </div>

    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">600m</div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="cover" />
        <div class="name">肉蟹煲（湖滨银泰店）</div>
        <div class="labels">
          <div>美食</div>
          <div>可奖励20元</div>
          <div>抽奖池50元</div>
        </div>
        <div class="instro out">今日8折，肥美大闸蟹，快来吃吧快来快来快来快来</div>
        <div class="num">600m</div>
      </div>
    </div>
    <van-popup v-model="historyShow" position="top">
      <div class="history">
        <div class="title">
          搜索记录
          <div class="right" @click="clear">
            <img src="@/assets/del.png" class="upDown"/>
            清空
          </div>
        </div>
        <div class="content">
          <div class="it" v-for="(item,i) in historyList" :key="i" @click="textIn(item)">{{item}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { SetCookie,GetCookie } from "@/utils/utils";
export default {
  data() {
    return {
      sort: 1,
      msg: "",
      historyShow: false,
      historyList:[]
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
    },
    onSearch(){
      this.historyList.push(this.msg)
      SetCookie('history',this.historyList.toString())
    },
    textIn(t){
      this.msg=t;
      this.onSearch()
    },
    clear(){
      this.historyList=[]
      SetCookie('history',this.historyList.toString())
    },
    init() {
      try {
        this.historyList=GetCookie('history').split(',')
      } catch (error) {
        
      }
    }
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
@import "../home/style/index.scss";
</style>
<style scoped>
>>> .van-search__content {
  background-color: #fff;
}
>>> .van-search {
  padding: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 3px;
  width: 307px;
  height: 36px;
  margin: 0 auto;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-tabs__line {
  display: none;
}
>>> .van-tab--active {
  font-weight: 600;
}
</style>