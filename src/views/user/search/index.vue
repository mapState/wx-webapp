<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="searchTop">
      <van-search
        placeholder="商品名称"
        v-model="msg"
        @focus="historyShow=true"
        @blur="historyShow=false"
        @search="onSearch"
      />

      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
    </div>

    <div class="list">
      <div
        class="item"
        @click="toNext('/merchantsList/merchantsDetail',item.id)"
        v-for="(item,i) in list"
        :key="i"
      >
        <img :src="url+item.storeImageUrl" class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="labels">
          <div>{{item.typeName}}</div>
          <div>可奖励{{item.money/100}}元</div>
          <div>抽奖池{{item.bonusCount/100}}元</div>
        </div>
        <div class="instro out">{{item.firm}}</div>
        <div class="num">{{(item.juli/1000).toFixed(1)}}km</div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
    </div>
    <van-popup v-model="historyShow" position="top">
      <div class="history">
        <div class="title">
          搜索记录
          <div class="right" @click="clear">
            <img src="@/assets/del.png" class="upDown" />
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
import { SetCookie, GetCookie } from "@/utils/utils";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { indexSearch } from "@/api/user";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url:UPLOAD_DOMAIN,
      sort: 1,
      msg: "",
      historyShow: false,
      list:[],
      historyList: []
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
    },
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    onSearch() {
      this.historyList.push(this.msg);
      SetCookie("history", this.historyList.toString());
      this.getList(this.msg)
    },
    textIn(t) {
      this.msg = t;
      this.onSearch();
    },
    clear() {
      this.historyList = [];
      SetCookie("history", this.historyList.toString());
    },
    getList(name){
      indexSearch({page:1,size:100,name,lat:100,lon:100}).then(res=>{
        this.list=res.data.data
      })
    },
    init() {
      try {
        this.historyList = GetCookie("history").split(",");
      } catch (error) {}
      this.getList();
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