<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <van-search placeholder="商家名称" background="#fff" v-model="name" @search="searchName" />
    </div>
    <div class="tabs">
      <van-tabs
        :swipe-threshold="5"
        title-inactive-color="#333"
        title-active-color="#000"
        @click="chooseTab"
      >
        <van-tab title="全部" name=" "></van-tab>
        <van-tab :title="item.name" v-for="(item,i) in tabs" :key="i" :name="item.id"></van-tab>
      </van-tabs>
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">推荐</div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        距离
        <img src="@/assets/shang2.png" v-if="sort==2&&search.type2===1" />
        <img src="@/assets/xia2.png" v-else-if="sort==2&&search.type2===0" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        人气
        <img src="@/assets/shang2.png" v-if="sort==3&&search.type3===1" />
        <img src="@/assets/xia2.png" v-else-if="sort==3&&search.type3===0" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">
        优惠
        <img src="@/assets/shang2.png" v-if="sort==4&&search.type4===1" />
        <img src="@/assets/xia2.png" v-else-if="sort==4&&search.type4===0" />
        <img src="@/assets/ud.png" v-else />
      </div>
    </div>
    <div class="list" style="background:#fff">
      <div
        class="item"
        @click="toNext('/merchantsList/merchantsDetail',item.id)"
        v-for="(item,i) in list"
        :key="i"
      >
        <img :src="url+item.storeImageUrl" class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="labels" style="margin-bottom:10px">
          <div style="border:none;padding:0;font-size:13px;margin-right:5px">{{item.category}}</div>
          <div style="border:none;padding:0;font-size:13px;">{{item.typeName}}</div>
        </div>
        <div class="labels">
          <div>可奖励{{item.money/100}}元</div>
          <div>抽奖池{{item.bonusCount/100}}元</div>
        </div>
        <div class="instro out">{{item.firm}}</div>
        <div class="num">{{(item.juli/1000).toFixed(1)}}km</div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
    </div>
  </div>
</template>

<script>
import { typeB, typeSearch } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { GetCookie, SetCookie } from '@/utils/utils'
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      sort: 1,
      list: [],
      tabs: [],
      search: {
        type: 1
      },
      name: "",
      typeId: ""
    };
  },
  methods: {
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    searchName() {
      this.search.name = this.name;
      this.getList();
    },
    chooseTab(e) {
      this.typeId = e;
      this.getList();
    },
    chooseSort(e) {
      this.sort = e;
      if (e == 2 || e == 3 || e == 4) {
        this.search["type" + e] = Number(!this.search["type" + e]);
      } else {
        this.search.type1 = 1;
      }

      this.show = false;
      let obj = {};
      obj["type" + e] = this.search["type" + e];
      this.search = { ...obj, name: this.name };
      this.getList();
    },
    getList(e) {
      typeSearch({
        page: 1,
        size: 100,
        lat: GetCookie('lat'),
        lon: GetCookie('lng'),
        ...this.search,
        typeaId: this.$route.query.id,
        typebId: this.typeId
      }).then(res => {
        this.list = res.data.data;
      });
    },
    init() {
      typeB({ id: this.$route.query.id }).then(res => {
        this.tabs = res.data;
        this.typeId=res.data[0].id
        this.getList();
      });
      
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