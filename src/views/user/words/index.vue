<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <div @click="chooseNav(1)" :class="{active:nav==1}">全部</div>
      <div @click="chooseNav(2)" :class="{active:nav==2}">有图</div>
      <div @click="chooseNav(3)" :class="{active:nav==3}">好评</div>
      <div @click="chooseNav(4)" :class="{active:nav==4}">差评</div>
    </div>
    <div class="list">
      <div class="item">
        <div class="name">
          <img src="@/assets/cover.png" class="upDown" />
          张**三
          <div class="time">2019-10-24</div>
        </div>
        <div class="words">
          特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃
          <div class="imgs">
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="name">
          <img src="@/assets/cover.png" class="upDown" />
          张**三
          <div class="time">2019-10-24</div>
        </div>
        <div class="words">
          特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃特别美味，超级好吃
          <div class="imgs">
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
            <img src="@/assets/cover.png" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <img src="@/assets/return.png" class="leftRight" />
          <p>返回首页</p>
        </div>
        <div>
          <img src="@/assets/shou.png" class="leftRight" />
          <p>收藏店铺</p>
        </div>
        <div @click="show=true">加入购物车</div>
        <div @click="show=true">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: 1
    };
  },
  methods: {
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
</style>