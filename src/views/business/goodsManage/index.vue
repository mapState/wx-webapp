<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/left.png" class="upDown" @click="toNext('/workbench')" />
      <van-search
        placeholder="商品名称"
        background="#fff"
        v-model="name"
        @search="searchName(name)"
        @clear="searchName(name)"
      />
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">全部</div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        销量
        <img src="@/assets/shang2.png" v-if="sort==2&&search.type2===0" />
        <img src="@/assets/xia2.png" v-else-if="sort==2&&search.type2===1" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        价格
        <img src="@/assets/shang2.png" v-if="sort==3&&search.type3===0" />
        <img src="@/assets/xia2.png" v-else-if="sort==3&&search.type3===1" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">
        库存
        <img src="@/assets/shang2.png" v-if="sort==4&&search.type4===0" />
        <img src="@/assets/xia2.png" v-else-if="sort==4&&search.type4===1" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==5}" @click="chooseSort(5)">上架</div>
      <div :class="{active:sort==6}" @click="chooseSort(6)">分类</div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="bai"></div>

      <div class="item" v-for="(item,i) in goodsList" :key="i" @click="toNext('/addGoods',item.id)">
        <div class="img">
          <img :src="url+item.image" />
          <div class="done" v-show="item.stock<=0">
            <div class="circle">已售罄</div>
          </div>
          <div class="on" :class="{grey:!item.goodStatus}">{{item.goodStatus?'已上架':'已下架'}}</div>
        </div>
        <div class="name">{{item.goodName}}</div>
        <div class="price">
          ￥{{item.money/100}}
          <div class="nums">
            剩余库存{{item.stock}}
            <span>卖出{{item.sales}}单</span>
          </div>
        </div>
      </div>
    </div>
    <empty msg="暂无数据" v-show="goodsList.length==0" />
    <div class="bottom">
      <div @click="toNext('/cates')">分类管理</div>
      <div @click="toNext('/addGoods')">新增商品</div>
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
import { goodsList, getAllGoodType } from "@/api/bussiness";
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
      if (e == 2 || e == 3 || e == 4) {
        this.search["type" + e] = Number(!this.search["type" + e]);
      }
      if(e===5){
        this.search.type5=1
      }
      if (e === 6) {
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
      goodsList({ page: 1, size: 10, ...e }).then(res => {
        this.goodsList = res.data.data;
        
        try {
          for(let i=0;i<this.goodsList.length;i++){
          this.goodsList[i].image=this.goodsList[i].image.split(',')[0]
        }
          
        } catch (error) {
          
        }
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