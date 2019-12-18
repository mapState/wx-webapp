<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" @search="collectSearch" v-model="name"/>
    </div>

    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">
        <img :src="url+item.storeImageUrl" class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="labels">
          <div>{{item.typeName}}</div>
          <div>可奖励{{item.money/100}}元</div>
          <div>抽奖池{{item.bonusCount/100}}元</div>
        </div>
        <div class="instro out">{{item.firm}}</div>
        <div class="num" @click.stop="collect(item.id)">
          <img src="@/assets/starA.png" />
        </div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
    </div>
  </div>
</template>

<script>
import { collectStatus, collect,collectSearch } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      sort: 1,
      name: '',
      list:[]
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
    },
    collect(busiUserId) {
      collect({ busiUserId}).then(res=>{
        this.collectSearch()
      })
    },
    collectSearch(){
      collectSearch({page:1,size:10000,name:this.name}).then(res=>{
        this.list=res.data.data
      })
    },
    init() {
      this.collectSearch()
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
  width: 346px;
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