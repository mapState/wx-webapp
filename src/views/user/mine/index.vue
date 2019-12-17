<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="info">
      <img src="@/assets/cover.png" class="photo" />
      <div class="name">张三三</div>
      <div class="mobile">130****0130</div>
      <img src="@/assets/set.png" class="set" @click="toNext('/set')"/>
    </div>
    <div class="content">
      <div class="data">
        <div class="item" @click="toNext('/myMarchants')">
          <div class="num">{{detail.detailA}}</div>收藏的商家
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{(detail.detailB/100).toFixed(2)}}</div>抽奖奖励
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{(detail.detailC/100).toFixed(2)}}</div>免单奖励
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{(detail.detailD/100).toFixed(2)}}</div>余额
        </div>
      </div>
      <div class="items">
        <div class="title">我的钱包</div>
        <div class="flex">
          <div class="itm" @click="toNext('/detail')">
            <div class="img">
              <img src="@/assets/money3.png" />
              <div class="dot">99</div>
            </div>
            <br />余额明细
          </div>
          <div class="itm" @click="toNext('/recharge')">
            <div class="img">
              <img src="@/assets/money2.png" />
              <div class="dot">99</div>
            </div>
            <br />充值
          </div>
          <div class="itm" @click="toNext('/tiXian')">
            <div class="img">
              <img src="@/assets/money1.png" />
              <div class="dot">99</div>
            </div>
            <br />提现
          </div>
          <div class="itm" @click="toNext('/record')">
            <div class="img">
              <img src="@/assets/record.png" />
              <div class="dot">99</div>
            </div>
            <br />消费记录
          </div>
        </div>
      </div>
      <div class="items">
        <div class="title">我的订单</div>
        <div class="flex">
          <div class="itm" @click="toNext('/order',0)">
            <div class="img">
              <img src="@/assets/order.png" />
              <div class="dot">99</div>
            </div>
            <br />全部订单
          </div>
          <div class="itm" @click="toNext('/order',1)">
            <div class="img">
              <img src="@/assets/go.png" />
              <div class="dot">99</div>
            </div>
            <br />待自取
          </div>
          <div class="itm" @click="toNext('/order',2)">
            <div class="img">
              <img src="@/assets/wuliu.png" />
              <div class="dot">99</div>
            </div>
            <br />待收货
          </div>
          <div class="itm" @click="toNext('/order',3)">
            <div class="img">
              <img src="@/assets/done.png" />
              <div class="dot">99</div>
            </div>
            <br />已完成
          </div>
        </div>
      </div>
      <div class="items">
        <div class="title">其它功能</div>
        <div class="flex">
          <div class="itm">
            <div class="img">
              <img src="@/assets/market.png" />
              <div class="dot">99</div>
            </div>
            <br />商家入驻
          </div>
          <div class="itm">
            <div class="img">
              <img src="@/assets/login.png" />
              <div class="dot">99</div>
            </div>
            <br />商家登录
          </div>
          <div class="itm">
            <div class="img">
              <img src="@/assets/stone.png" />
              <div class="dot">99</div>
            </div>
            <br />成为创客
          </div>
          <div class="itm">
            <div class="img">
              <img src="@/assets/login2.png" />
              <div class="dot">99</div>
            </div>
            <br />创客登录
          </div>
        </div>
        <div class="flex">
          <div class="itm">
            <div class="img">
              <img src="@/assets/help.png" />
              <div class="dot">99</div>
            </div>
            <br />帮助中心
          </div>
          <div class="itm" @click="join=true">
            <div class="img">
              <img src="@/assets/group.png" />
              <div class="dot">99</div>
            </div>
            <br />二维码加群
          </div>
          <div class="itm" @click="toNext('/feedback')">
            <div class="img">
              <img src="@/assets/words.png" />
              <div class="dot">99</div>
            </div>
            <br />我要反馈
          </div>
          <div class="itm">
            <div class="img">
              <img src="@/assets/service.png" />
              <div class="dot">99</div>
            </div>
            <br />联系客服
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="join">
      <div class="join">
        <img src="@/assets/cover.png" />
        <div class="tip">二维码加群XXXXXXXXX</div>
      </div>
    </van-popup>
    <van-popup v-model="show">
      <div class="join">
        <img src="@/assets/cover.png" />
        <div class="tip">将此二维码展示给商家</div>
      </div>
    </van-popup>
    <tabbar :active="3"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar";
import { console } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      join: false,
      show: false,
      detail:{

      }
    };
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
    getConsole(){
      console().then(res=>{
        this.detail=res.data
      })
    },
    init() {
      this.getConsole()
    }
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
>>> .van-popup {
  background: transparent;
}
</style>