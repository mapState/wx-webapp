<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="info">
      <div class="title">
        我的身份
        <img src="@/assets/cover.png" class="upDown" />
      </div>
      <div class="name">
        <img src="@/assets/cover.png" class="upDown" />
        张三
        <div class="mid upDown">
          余额：
          <span>2000</span>
        </div>
        <div class="right upDown">杭州市江干区推广员</div>
      </div>
    </div>
    <div class="data">
      我的数据
      <div class="right upDown">
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
    <div class="list">
      <div class="item" @click="toNext('/totalMoney')">
        <img src="@/assets/money10.png" />
        <div class="num">￥1234567</div>
        <div class="name">店铺总营业额</div>
      </div>
      <div class="item" @click="toNext('/totalBuss')">
        <img src="@/assets/market10.png" />
        <div class="num">1234567</div>
        <div class="name">推广总商铺数</div>
      </div>
      <div class="item">
        <img src="@/assets/square2.png" />
        <div class="num">1234567</div>
        <div class="name">待审核商铺</div>
      </div>
      <div class="item">
        <img src="@/assets/add10.png" />
        <div class="num">1234567</div>
        <div class="name">当月新增商铺</div>
      </div>
      <div class="item">
        <img src="@/assets/money11.png" />
        <div class="num">￥1234567</div>
        <div class="name">已结算分润</div>
      </div>
      <div class="item" @click="toNext('/cDetail')">
        <img src="@/assets/record3.png" />
        <div class="name">提现记录</div>
      </div>
      <div class="item" @click="toNext('/tiXian')">
        <img src="@/assets/money10.png" />
        <div class="name">我要提现</div>
      </div>
      <div class="item" @click="toNext('/come')">
        <img src="@/assets/market11.png" />
        <div class="name">商家录入</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toNext(msg,active) {
      this.$router.push({
        path: msg,
        query:{
          active
        }
      });
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
select{
  border:none;
  outline: none;
  height: 100%;
  width: 80%;
  background: transparent;
}
</style>