<template>
  <div v-wechat-title="$route.meta.title" class="container">
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
    <div class="time" style="border-bottom:1px solid #ddd">到店自取消费</div>
    <div class="time">自取消费时间 <span>2019-10-08  18:30</span></div>
    <div class="kone"></div>
    <div class="goods">
      <div class="owner">
        <img src="@/assets/market2.png" class="upDown two" />华莱士
        <img src="@/assets/jian.png" class="upDown three" />
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
    <div class="total">
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
    
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="卖家留言"
        disabled
        type="textarea"
        maxlength="50"
        placeholder="50字以内（选填）"
      />
    </van-cell-group>
    <div class="orderNum">
      订单编号 <span>1234567890000000</span>
    </div>
    <div class="end">完成时间 <span>2019-10-08  18:30</span></div>
    <div class="bai"></div>
    <div class="kone"></div>
    <div class="line"></div>
    <div class="bottom">
      <div>待发货</div>
      <div>退款</div>
      <div>快递发货</div>
      <div class="right">确定购买</div>
    </div>
    <div class="bottom2">
      <div>已完成</div>
      <div>快递发货</div>
      <div class="right">确定购买</div>
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
  margin-right: 15px;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-field__control:disabled{
  color: #000;
  -webkit-text-fill-color: #000;
}
</style>