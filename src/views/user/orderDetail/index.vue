<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      确定订单
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
    <!-- <div class="add" v-show="!checked">
      <img src="@/assets/add.png" class="upDown" />添加地址
    </div>-->

    <div class="get">
      到店自取消费
      <div class="right upDown">
        <van-switch v-model="checked" size="20px" />
      </div>
    </div>
    <div class="time" v-show="checked" @click="show=true">
      自取消费时间
      <span >选择时间</span>
      <img src="@/assets/jian.png" class="upDown" />
    </div>
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
        type="textarea"
        maxlength="50"
        placeholder="50字以内（选填）"
      />
    </van-cell-group>
    <div class="kone"></div>
    <div class="ways">
      <van-radio-group v-model="ways">
        <div class="item" @click="ways='1'">
          余额支付
          <div class="upDown mid">剩余200</div>
          <div class="upDown right">
            <van-radio name="1"></van-radio>
          </div>
        </div>
        <div class="item" @click="ways='2'">
          微信支付
          <div class="upDown right">
            <van-radio name="2"></van-radio>
          </div>
        </div>
      </van-radio-group>
    </div>
    <div class="line"></div>
    <div class="bottom">
      需要支付：
      <span>￥20</span>
      <div class="right">确定购买</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      show: true,
      message: "",
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
</style>