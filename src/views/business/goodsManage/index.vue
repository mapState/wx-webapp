<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      <van-search placeholder="商品名称" background="#fff" />
    </div>
    <div class="filter">
      <div :class="{active:sort==1}" @click="chooseSort(1)">全部</div>
      <div :class="{active:sort==2}" @click="chooseSort(2)">
        销量
        <img src="@/assets/uda.png" v-if="sort==2" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==3}" @click="chooseSort(3)">
        价格
        <img src="@/assets/uda.png" v-if="sort==3" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==4}" @click="chooseSort(4)">
        库存
        <img src="@/assets/uda.png" v-if="sort==3" />
        <img src="@/assets/ud.png" v-else />
      </div>
      <div :class="{active:sort==5}" @click="chooseSort(5)">上架</div>
      <div :class="{active:sort==6}" @click="chooseSort(6)">分类</div>
    </div>
    <div class="line"></div>
    <div class="list">
      <div class="bai"></div>
      <div class="item">
        <div class="img">
          <img src="@/assets/cover.png" />
          <div class="done">
            <div class="circle">已售罄</div>
          </div>
          <div class="on">已上架</div>
        </div>
        <div class="name">大闸蟹 清蒸美味香甜的大闸蟹 清蒸美味香甜的</div>
        <div class="price">
          ￥25
          <div class="nums">剩余库存100<span>卖出50单</span></div>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="@/assets/cover.png" />
          <!-- <div class="done">
            <div class="circle">已售罄</div>
          </div> -->
          <div class="on grey">已下架</div>
        </div>
        <div class="name">大闸蟹 清蒸美味香甜的大闸蟹 清蒸美味香甜的</div>
        <div class="price">
          ￥25
          <div class="nums">剩余库存100<span>卖出50单</span></div>
        </div>
      </div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div class="bottom">
      <div>分类管理</div>
      <div>新增商品</div>
    </div>
    <van-popup v-model="show" position="top">
      <div class="cates">
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
        <div class="item">最近上新</div>
      </div>
      <div class="btn">
        取消
        <span>确定</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: 1,
      show: false
    };
  },
  methods: {
    chooseSort(e) {
      this.sort = e;
      this.show = true;
    },
    init() {}
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