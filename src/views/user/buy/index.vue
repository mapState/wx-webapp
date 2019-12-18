<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      <van-search
        placeholder="商品名称"
        background="#fff"
        v-model="name"
        @search="searchName(name)"
        @clear="searchName(name)"
      />
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">综合</div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        销量
        <img src="@/assets/shang2.png" v-if="sort==2&&search.type2===1" />
        <img src="@/assets/xia2.png" v-else-if="sort==2&&search.type2===0" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        价格
        <img src="@/assets/shang2.png" v-if="sort==3&&search.type3===1" />
        <img src="@/assets/xia2.png" v-else-if="sort==3&&search.type3===0" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">分类</div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="item" v-for="(item,i) in goodsList" :key="i" @click="toNext('/addGoods',item.id)">
        <img :src="url+item.image" />
        <div class="name">{{item.goodName}}</div>
        <div class="price">
          ￥{{item.money/100}}
          <img src="@/assets/cart.png" />
        </div>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="@/assets/mobile2.png" />
        <div>联系商家</div>
      </div>
      <div>
        <img src="@/assets/cart.png" class="upDown" />
        ￥50
        <div class="tip">支持自取，差5元免物流</div>
      </div>
      <div>支付</div>
    </div>
    <van-popup v-model="show" position="top">
      <div class="cates">
        <div
          class="item"
          v-for="(item,i) in cates"
          :key="i"
          @click="chooseCate(item.id)"
          :class="{active:item.id==cate}"
        >{{item.name}}</div>
      </div>
      <div class="btn" @click="show=false">
        取消
        <span @click="searchCate">确定</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { goodsList, getAllGoodType } from "@/api/user";
import empty from "@/components/empty";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  components: {
    empty
  },
  data() {
    return {
      sort: 1,
      show: false,
      cate: "",
      name: "",
      url: UPLOAD_DOMAIN,
      cates: [],
      search: {},
      goodsList: []
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
      if (e == 2 || e == 3) {
        this.search["type" + e] = Number(!this.search["type" + e]);
      }

      if (e === 4) {
        this.show = true;
      } else {
        this.show = false;
        let obj = {};
        obj["type" + e] = this.search["type" + e];
        this.search = { ...obj, name: this.name };
        this.getGoodsList(this.search);
      }
    },
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    chooseCate(e) {
      this.cate = e;
    },
    searchCate(e) {
      this.search = { type6: this.cate, name: this.name };
      this.getGoodsList(this.search);
      this.show = false;
    },
    searchName(name) {
      this.search.name = name;
      this.getGoodsList(this.search);
    },
    getGoodsList(e) {
      goodsList({
        page: 1,
        size: 10,
        ...e,
        busiUserId: this.$route.query.id
      }).then(res => {
        this.goodsList = res.data.data;
        console.log(this.goodsList);
      });
    },
    init() {
      getAllGoodType().then(res => {
        this.cates = res.data;
      });
      this.getGoodsList();
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
</style>