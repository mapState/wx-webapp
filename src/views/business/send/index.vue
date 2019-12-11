<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item" style="border-bottom:1px solid #ddd">
      <van-field v-model="username" label="快递公司：" placeholder="请输入快递公司" />
    </div>
    <div class="item" style="border-bottom:10px solid #f2f2f2">
      <van-field v-model="username" label="快递单号：" placeholder="请输入快递单号" />
    </div>
    <div class="address">
      <div class="item">
        <img src="@/assets/position.png" class="left upDown" />
        <div class="name">
          廖强
          <span>13034020130</span>
        </div>
        <div class="detail">
          <span>默认</span> 浙江省 杭州市 西湖区 大都风情文苑大都风情文苑
        </div>
        <div class="right upDown">
          <img src="@/assets/jian.png" />
        </div>
      </div>
    </div>
    <div class="kone"></div>
    <div class="goods">
      <div class="owner">
        <img src="@/assets/cover.png" class="upDown two" />华莱士
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">香辣鸡腿堡</div>
        <div class="size">规格:5分甜</div>
        <div class="money">￥24</div>
        <div class="right">X1</div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="name">香辣鸡腿堡</div>
        <div class="size">规格:5分甜</div>
        <div class="money">￥24</div>
        <div class="right">X1</div>
      </div>
    </div>
    <div class="total" style="border:none">
      运费：￥0.00
      <div class="right">
        <span>
          共
          <span>2</span>件商品
        </span>
        <span class="hou">
          共计:
          <span>￥50</span>
        </span>
      </div>
    </div>
    <div class="orderNum">
      订单编号
      <span>1234567890000000</span>
    </div>
    <div class="btn">
      <div class="sub">确定发货</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      show: true,
      message: "11111",
      ways: "1",
      minHour: 10,
      maxHour: 20,
      currentDate: new Date()
    };
  },
  methods: {
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
>>> .van-field__label {
  width: auto;
  font-size: 14px;
  font-weight: bold;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-field__control:disabled {
  color: #000;
  -webkit-text-fill-color: #000;
}
</style>