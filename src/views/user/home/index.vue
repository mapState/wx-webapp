<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/position.png" alt class="position" />
      <span class="city">杭州市</span>
      <div class="input">
        <img src="@/assets/big.png" />
        <input type="text" placeholder="商户名/地点/菜名" />
      </div>
      <img src="@/assets/sao.png" alt class="sao" />
    </div>
    <div class="tips">
      <div class="item">
        <img src="@/assets/dui.png" />
        <span>消费免单</span>
      </div>
      <div class="item">
        <img src="@/assets/dui.png" />
        <span>消费免单</span>
      </div>
      <div class="item">
        <img src="@/assets/dui.png" />
        <span>消费免单</span>
      </div>
      <div class="item">
        <img src="@/assets/dui.png" />
        <span>消费免单</span>
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/banner.png" />
    </div>
    <div class="cates">
      <van-swipe @change="swipeChange" :show-indicators="false">
        <van-swipe-item>
          <div class="item" v-for="(item,i) in 8" :key="i" @click="toNext('/merchantsList')">
            <div class="img" :class="'bg'+i">
              <img src="@/assets/sao.png" alt />
            </div>
            <div class="name">宠物店</div>
          </div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </van-swipe>
      <div class="dots">
        <div class="dot active"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="report">
      <span>入驻公告</span>
      <span>|</span>
      <span class="out">
        <van-swipe :autoplay="2000" vertical :show-indicators="false" :touchable="false">
          <van-swipe-item><div class="out">特辣火锅等你品尝你品你品你品你品你品</div></van-swipe-item>
          <van-swipe-item><div class="out">特辣火锅等你品尝你品你品你品你品你品</div></van-swipe-item>
        </van-swipe>
      </span>
      <span>立即入驻</span>
    </div>
    <div class="nav">
      <div class="item" @click="chooseNav(1)" :class="{active:nav==1}">
        推荐
        <div class="little">品质优享</div>
      </div>
      <div class="item" @click="chooseNav(2)" :class="{active:nav==2}">
        距离
        <div class="little">最近商家</div>
      </div>
      <div class="item" @click="chooseNav(3)" :class="{active:nav==3}">
        人气
        <div class="little">销量排行</div>
      </div>
      <div class="item" @click="chooseNav(4)" :class="{active:nav==4}">
        生活
        <div class="little">吃喝玩乐</div>
      </div>
    </div>
    <div class="list">
      <div class="item" @click="toNext('/merchantsList/merchantsDetail')">
        <img src="@/assets/cover.png" class="cover" />
        <img src="@/assets/tuijian.png" class="tuijian" />
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
        <img src="@/assets/tuijian.png" class="tuijian" />
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
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      nav: 1
    };
  },
  methods: {
    toNext(msg, active) {
      this.$router.push({
        path: msg,
        query: {
          active
        }
      });
    },
    swipeChange(e) {
      console.log(e);
    },
    chooseNav(e) {
      this.nav = e;
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
>>> .van-swipe {
  height: 100%;
}
</style>