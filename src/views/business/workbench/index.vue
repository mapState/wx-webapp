<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="dataTop">
      <div class="title">我的数据</div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>今日营业额
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>总营业额
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>折扣后收入
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>今日免单奖励
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>已免单总奖励
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>当前抽奖池
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>待取货订单
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>待发货订单
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">1136</div>总订单数量
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="tools">
        <div class="title">我的工具</div>
        <div class="content">
          <div>
            <div class="img">
              <img src="@/assets/sao2.png" />
            </div>
            <div>扫码</div>
          </div>
          <div @click="toNext('/bussSet')">
            <div class="img">
              <img src="@/assets/set2.png" />
            </div>
            <div>设置</div>
          </div>
          <div @click="show=true">
            <div class="img">
              <img src="@/assets/ma.png" />
            </div>
            <div>商铺二维码</div>
          </div>
          <div @click="toNext('/bussDetail')">
            <div class="img">
              <img src="@/assets/money4.png" />
            </div>
            <div>收入明细</div>
          </div>
        </div>
      </div>
      <div class="tab">
        <div @click="chooseTab(1)" :class="{active:tab==1}">
          <div>免单排位</div>
          <img src="@/assets/up.png" v-show="tab==1" />
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>已免单榜</div>
          <img src="@/assets/up.png" v-show="tab==2" />
        </div>
        <div @click="chooseTab(3)" :class="{active:tab==3}">
          <div>抽奖池</div>
          <img src="@/assets/up.png" v-show="tab==3" />
        </div>
      </div>
    </div>
    <div class="tabContent" v-show="tab==1||tab==2">
      <div class="inner">
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money">80元</div>待奖励
            </div>
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money">80元</div>待奖励
            </div>
          </div>
        </div>
        <div class="item">
          <span>1</span>
          <img src="@/assets/dui.png" class="upDown" />
          <div class="name upDown">玩大嘴爱</div>
          <div class="tip upDown">还差8元够免单</div>
          <div class="right upDown" :class="{rc:tab==2}">
            <div class="in upDown" style="width:100%">
              <div class="money">80元</div>待奖励
            </div>
          </div>
        </div>
        <div class="last">点击加载更多</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent3" v-show="tab==3">
      <div class="inner">
        <div class="money">￥652</div>
        <div class="tip1">今日已累计奖金（元）</div>
        <div class="tip2">每日抽奖时间为:18:00-19</div>
        <div class="tip3">参与排队中拥有抽奖资格</div>
        <div class="tip3">每日免单奖励超过300，超过部分的10%放入店铺抽奖池，供其它用户抽奖</div>
      </div>
      <div class="line"></div>
    </div>
    <van-popup v-model="show">
      <div class="info">
        <div class="img">
          <div class="name">
            <img src="@/assets/cover.png" />众奖联盟
          </div>
          <div class="name2">万州烤鱼（嘉里中心店）</div>
          <img src="@/assets/cover.png" class="content"/>

        </div>
        <div class="tip">长按图片保存</div>
        
      </div>
    </van-popup>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/bussTabBar";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      show: false,
    };
  },
  methods: {
    toNext(msg,active) {
      this.$router.push({
        path: msg
      });
    },
    chooseTab(e) {
      this.tab = e;
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
  height: 30px;
}
>>> .van-count-down {
  font-size: 15px;
  font-weight: bold;
  color: #5a3504;
}
>>> .van-popup {
  background: transparent;
}
</style>