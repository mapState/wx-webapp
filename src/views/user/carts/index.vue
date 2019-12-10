<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)"/>
      购物车
      <span :class="{active:status}" @click="status=!status">{{status?'编辑':'完成'}}</span>
    </div>
    <div class="owner">
      <div class="upDown one">
        <van-checkbox
          v-model="checked"
          checked-color="#B8741A"
          @click="result.length==2?$refs.checkboxGroup.toggleAll(false):$refs.checkboxGroup.toggleAll(true)"
        ></van-checkbox>
      </div>
      <img src="@/assets/market2.png" class="upDown two" />华莱士
      <img src="@/assets/jian.png" class="upDown three" />
    </div>
    <van-checkbox-group v-model="result" ref="checkboxGroup" checked-color="#B8741A" @change="check">
      <div class="item">
        <div class="upDown one">
          <van-checkbox name="a"></van-checkbox>
        </div>
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">香辣鸡腿堡</div>
        <div class="size">规格:5分甜</div>
        <div class="money">￥24</div>
        <div class="right">
          <van-stepper v-model="value" />
        </div>
      </div>
      <div class="item">
        <div class="upDown one">
          <van-checkbox name="b"></van-checkbox>
        </div>
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">香辣鸡腿堡</div>
        <div class="size">规格:5分甜</div>
        <div class="money">￥24</div>
        <div class="right">
          <van-stepper v-model="value" />
        </div>
      </div>
    </van-checkbox-group>

    <div class="bottom">
      <div class="upDown one">
        <van-checkbox
          v-model="checked"
          checked-color="#B8741A"
          @click="result.length==2?$refs.checkboxGroup.toggleAll(false):$refs.checkboxGroup.toggleAll(true)"
        ></van-checkbox>
      </div>全选
      <div class="mid upDown" v-show="status">
        <div class="total">
          合计:<span>￥24</span>
        </div>
        <div class="tip">不含运费</div>
      </div>
      <div class="right1" v-if="status">结算</div>
      <div class="right2" v-else>删除</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      value: 1,
      result: [],
      status:true
    };
  },
  methods: {
    check(e) {
      console.log(e);
      if (e.length == 2) {
        this.checked = true;
      } else {
        this.checked = false;
      }
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
>>> .van-checkbox__icon .van-icon {
  border-color: #999;
}
</style>