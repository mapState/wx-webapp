<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="data" @click="show=true">
      {{msg}}
      <img src="@/assets/xia.png" />
      <div class="out">支出:{{(expend/100).toFixed(2)}}</div>
      <div class="in">收入:{{(income/100).toFixed(2)}}</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,i) in balanceDetails" :key="i" @click="item.type==7||item.type==6||item.type==5||item.type==4?toNext('/merchantsList/merchantsDetail',item.busiUserId):''">
        <img src="@/assets/yu.png" class="cover" v-if="item.type==1"/>
        <img src="@/assets/yu2.png" class="cover" v-else-if="item.type==2"/>
        <img src="@/assets/yu2.png" class="cover" v-else-if="item.type==3"/>
        <img :src="url+item.storeImageUrl" class="cover" v-else/>
        <div class="name">
          {{item.type==1?'余额充值':item.type==2?'余额提现':item.type==3?'平台中奖':item.name}}
          <span>{{item.type==1?'充值':item.type==2?'提现':item.type==3||item.type==4?'中奖':item.type==5?'免单':"消费"}}</span>
        </div>
        <div class="instro out">抽奖时间 {{item.createDate}}</div>
        <div class="right upDown" :class="{grey:item.money<0}">{{item.money>0?'+'+item.money/100:item.money/100}}元</div>
      </div>
      <empty msg="暂无数据" v-show="balanceDetails.length==0" />
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          :min-date="minDate"
          :formatter="formatter"
          @confirm="getbalanceDetails"
          @cancel="show=false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { balanceDetails } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      show: false,
      balanceDetails: [],
      currentDate: new Date(),
      expend: "",
      income: "",
      msg: "",
      minDate: new Date(2000, 10, 1)
    };
  },
  methods: {
    toNext(msg,id) {
      this.$router.push({
        path: msg,
        query:{
          id
        }
      });
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    getbalanceDetails() {
      balanceDetails({
        date:
          this.currentDate.getFullYear() +
          "" +
          (this.currentDate.getMonth()+1>9?this.currentDate.getMonth()+1:'0'+(this.currentDate.getMonth()+1))
      }).then(res => {
        this.balanceDetails = res.data.data;
        this.expend = res.data.expend;
        this.income = res.data.income;
        this.msg =
          this.currentDate.getFullYear() +
          "年" +
          (this.currentDate.getMonth() + 1) +
          "月";
        this.show = false;
      });
    },
    init() {
      this.msg =
        this.currentDate.getFullYear() +
        "年" +
        (this.currentDate.getMonth() + 1) +
        "月";
      this.getbalanceDetails();
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
</style>