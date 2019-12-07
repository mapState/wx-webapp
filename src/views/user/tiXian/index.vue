<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="money">
      <div class="title">提现金额</div>
      <div class="num">
        ￥
        <input type="number" />
      </div>
      <div class="tips">
        当前零钱余额652.2元，
        <span>全部提现</span>
      </div>
    </div>
    <div class="ways">
      <div class="item" @click="chooseWay(1)">
        <img src="@/assets/way2.png" /> 提现到微信
        <img src="@/assets/dui.png" class="upDown" v-if="way==1"/>
        <img src="@/assets/circle.png" class="upDown" v-else/>
      </div>
      <div class="item" @click="chooseWay(2)">
        <img src="@/assets/way3.png"/> 提现到支付宝
        <img src="@/assets/dui.png" class="upDown" v-if="way==2"/>
        <img src="@/assets/circle.png" class="upDown" v-else/>
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="username" label="真实姓名：" placeholder="请输入姓名" />
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="username" label="支付宝账号：" placeholder="请输入支付宝账号" />
      </div>
      <div class="item" v-show="way==2">
        <van-field v-model="username" label="重复账号：" placeholder="请确认支付宝账号" />
      </div>
      <div class="item" @click="chooseWay(3)">
        <img src="@/assets/way4.png" /> 提现到银行卡
        <img src="@/assets/dui.png" class="upDown" v-if="way==3"/>
        <img src="@/assets/circle.png" class="upDown" v-else/>
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="username" label="真实姓名：" placeholder="请输入姓名" />
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="username" label="银行卡号：" placeholder="请输入银行卡号" />
      </div>
      <div class="item" v-show="way==3">
        <van-field v-model="username" label="银行名称：" placeholder="请输入银行名称" />
      </div>
    </div>
    <div class="btn">提现</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      way:1
    };
  },
  methods: {
    chooseWay(e){
      this.way=e;
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
>>> .van-field__label{
  width: auto;
}
</style>