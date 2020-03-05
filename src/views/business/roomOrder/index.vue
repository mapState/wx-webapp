<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="list">
      <div class="item" v-for="(item,i) in orderList" :key="i">
        <div class="name">
          <img :src="url+item.image" class="upDown" style="border-radius:50%" />
          {{item.userName}}
        </div>
        <div class="goodsWrap">
          <div class="goods">
            <div class="title">店内消费</div>
            <div class="size">下单时间：{{item.createDate}}</div>
            <div class="right">￥{{item.money/100}}</div>
          </div>
        </div>
        <div class="btns">
          
          <div @click.stop="toNext('/split',item.orderId)" >免单拆分</div>
          <div @click.stop="true">
            <a :href="'tel:'+item.userPhone" style="color:#B8741A">联系买家</a> 
          </div>
        </div>
      </div>
      <empty msg="暂无数据" v-show="orderList.length==0"/>
    </div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import { coby } from "@/utils/utils";
import { storePay } from "@/api/bussiness";
import tabbar from "@/components/bussTabBar";
import empty from "@/components/empty";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  components: {
    tabbar,
    empty
  },
  data() {
    return {
      show: false,
      url: UPLOAD_DOMAIN,
      orderList: [],
      active: 0 || this.$route.query.active
    };
  },
  methods: {
    toNext(msg, orderId) {
      console.log(orderId)
      this.$router.push({
        path: msg,
        query:{
          orderId
        }
      });
    },
    coby() {
      coby("11", this);
    },
    getOrderList(e) {
      storePay({ page: 1, size: 10000}).then(res => {
        this.orderList = res.data;
      });
    },
    init() {
      this.getOrderList();
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
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
>>> .van-popup {
  background: transparent;
}
>>> .van-tab--active {
  font-weight: 600;
}
>>> .van-tabs__line {
  background-color: #b8741a;
}
</style>