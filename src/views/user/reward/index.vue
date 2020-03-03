<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div
      class="top"
      :style="{backgroundImage:`url('http://img.koudaitiku.com/b0897af2be104ad6a93f4d871d570dc2.jpg')`}"
    >
      <div class="money">￥{{detail.bonusDay/100}}</div>
      <div class="tip1">今日已累计奖金（元）</div>
      <div class="tip2">*抽奖资格：{{detail.bonusCount}}次</div>
      <div class="tip3">*每日抽奖时间为:18:00-19:00</div>
      <button type="primary" class="btn" :disabled="true" v-if="time2<-3600000">抽奖结束</button>
      <button type="primary" class="btn" v-else-if="time2>-3600000&&time2<0" @click="platBonus">开始抽奖</button>
      <button type="primary" class="btn" :disabled="true" v-else>
        <van-count-down :time="time2" format="抽奖倒计时：HH:mm:ss"/>
      </button>
    </div>
    <div class="nav">
      <div class="title">昨日数据</div>
      <div class="data">
        <div class="item">
          <div class="num">{{detail.yesterdayBonusDay/100}}</div>昨日奖励池总额
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{detail.bonusCountYesterday}}</div>昨日抽到奖人数
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{detail.bonusMoneyYesterday/100}}</div>昨日瓜分剩余奖励
        </div>
      </div>
      <div class="tab">
        <div @click="chooseTab(1)" :class="{active:tab==1}">
          <div>昨日抽奖榜</div>
          <img src="@/assets/up.png" v-show="tab==1">
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>累计抽奖榜</div>
          <img src="@/assets/up.png" v-show="tab==2">
        </div>
      </div>
    </div>
    <div class="tabContent" v-show="tab==1">
      <div class="inner">
        <div class="item" v-for="(item,i) in rankYesterday" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown">
          <div class="name upDown">{{item.name}}</div>
          <div class="right upDown">{{item.money/100}}元</div>
        </div>
        <div class="last" v-show="rankYesterday.length<total1" @click="changePage(1)">点击加载更多</div>
        <empty msg="暂无数据" v-show="rankYesterday.length==0"/>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent" v-show="tab==2">
      <div class="inner">
        <div class="item" v-for="(item,i) in totalRank" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown">
          <div class="name upDown">{{item.name}}</div>
          <div class="right upDown">{{item.money/100}}元</div>
        </div>
        <div class="last" v-show="totalRank.length<total2" @click="changePage(2)">点击加载更多</div>
        <empty msg="暂无数据" v-show="totalRank.length==0"/>
      </div>
      <div class="line"></div>
    </div>
    <van-popup v-model="show">
      <div class="red">
        <img src="@/assets/red.png">
        <div class="up">
          <img src="@/assets/cha.png" @click="show=false">
          <div class="num">{{(rewardNum/100).toFixed(2)}}</div>
          <div class="tip">恭喜您抽中奖金(元)</div>
          <div class="sub">确定</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="over">
      <div class="over">抱歉您来晚了，奖金已抽完~
        <div class="btn" @click="over=false">确认</div>
      </div>
    </van-popup>
    <tabbar :active="1"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar";
import empty from "@/components/empty";
import {
  platBonusDetail,
  rankYesterday,
  totalRank,
  platBonus
} from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";

export default {
  components: {
    tabbar,
    empty
  },
  data() {
    return {
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      time2: 0,
      rankYesterday: [],
      totalRank: [],
      total1: 0,
      total2: 0,
      page: 1,
      page2: 1,
      rewardNum:0,
      show: false,
      over: false,
      url: UPLOAD_DOMAIN,
      detail: {}
    };
  },
  methods: {
    chooseTab(e) {
      this.tab = e;
    },
    changePage(t) {
      if (t == 1) {
        this.page++;
        this.getRankYesterday();
      } else {
        this.page2++;
        this.getTotalRank();
      }
    },
    getRankYesterday() {
      rankYesterday({
        page: this.page,
        size: 10
      }).then(res => {
        this.rankYesterday = [...this.rankYesterday, ...res.data.data];
        this.total1 = res.data.total;
      });
    },
    platBonus() {
      platBonus().then(res => {
        this.show = true;
        this.rewardNum=res.data
      });
    },
    getTotalRank() {
      totalRank({
        page: this.page2,
        size: 10
      }).then(res => {
        this.totalRank = [...this.totalRank, ...res.data.data];
        this.total2 = res.data.total;
      });
    },
    init() {
      var mid = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          18 * 60 * 60 * 1000
      ).getTime();
      var end = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          19 * 60 * 60 * 1000
      ).getTime();
      this.time2 = mid - new Date().getTime();
      console.log(this.time2)
      platBonusDetail().then(res => {
        this.detail = res.data;
        for (let i = 0; i < this.detail.lenth; i++) {
          if (!this.detail[i].image.match("http")) {
            this.detail[i].image = this.url - this.detail[i].image;
          }
        }
      });
      this.getRankYesterday();
      this.getTotalRank();
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