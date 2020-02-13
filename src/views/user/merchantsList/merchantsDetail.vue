<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="msg">
      <div class="imgTop">
        <div class="up"></div>
        <img :src="url+detail.storeImageUrl" alt />
      </div>
      <div class="info">
        <van-swipe :autoplay="3000" vertical :show-indicators="false" :touchable="false">
          <van-swipe-item v-for="(item,i) in bonusRollData" :key="i">
            <div class="wrap">
              <div class="item">
                <img :src="url+item.image" />
                <span>{{item.name}}</span>
                <span>{{item.hour}}小时前免单{{item.money/100}}元</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="content">
      <div class="contact">
        <div class="name">{{detail.name}}</div>
        <div class="labels">
          <div>{{detail.typeName}}</div>
          <div>可奖励{{detail.money/100}}元</div>
          <div>抽奖池{{detail.bonusDay/100}}元</div>
        </div>
        <div class="position">
          <img src="@/assets/po2.png" class="im1" />
          <span class="out">{{detail.regionAddress+' '+ detail.address}}</span>
          <img src="@/assets/po3.png" class="im2" @click="goTo(detail.lat,detail.lon,detail.money,detail.regionAddress,detail.address)"/>
          <span class="shu"></span>
          <a :href="'tel:'+detail.phone">
            <img src="@/assets/mobile.png" class="im3" />
          </a>

          <div class="instro out">公告:{{detail.firm}}</div>
        </div>
      </div>
      <div class="data">
        <div class="item">
          <div class="num">{{detail.lineCount}}</div>参与总人次
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{detail.freeCount}}</div>已免单人次
          <span></span>
        </div>
        <div class="item">
          <div class="num">{{detail.freeTotal/100}}</div>已免单总奖励
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
    <div class="tabContent" v-show="tab==1">
      <div class="inner">
        <div class="item" v-for="(item,i) in lineOrder" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown" />
          <div class="name upDown">{{item.name}}</div>
          <div class="tip upDown" v-show="i==0">还差{{item.money/100-item.bonusMoney/100}}元够免单</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money"><b>{{item.money/100}}</b>元</div>待奖励
            </div>
          </div>
        </div>
        <empty msg="暂无数据" v-show="lineOrder.length==0" />
        <div class="last" v-show="lineOrder.length<totalLine" @click="changePage(1)">点击加载更多</div>
      </div>
      <div class="line" style="height:300px"></div>
    </div>
    <div class="tabContent" v-show="tab==2">
      <div class="inner">
        <div class="item" v-for="(item,i) in freeOrder" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown" />
          <div class="name upDown">{{item.name}}</div>
          <div class="tip upDown">{{item.count}}次免单</div>
          <div class="right upDown rc">
            <div class="in upDown" style="width:100%">
              <div class="money"><b>{{item.total/100}}</b>元</div>总奖励
            </div>
          </div>
        </div>
        <empty msg="暂无数据" v-show="freeOrder.length==0" />
        <div class="last" v-show="freeOrder.length<totalFree" @click="changePage(2)">点击加载更多</div>
      </div>
      <div class="line" style="height:300px"></div>
    </div>
    <div class="tabContent3" v-show="tab==3">
      <div class="inner">
        <div class="money">￥{{totalMoney/100}}</div>
        <div class="tip1">今日已累计奖金（元）</div>
        <div class="tip2">*每日抽奖时间为:18:00-19:00</div>
        <div class="tip3">*参与排队中拥有抽奖资格</div>
        <button type="primary" class="time" :disabled="true" v-if="time<-3600000">抽奖结束</button>
        <button type="primary" class="time active" v-else-if="time>-3600000&&time<0" @click="bonus">开始抽奖</button>
        <button type="primary" class="time" :disabled="true" v-else>
          <van-count-down :time="time" format="抽奖倒计时：HH:mm:ss" />
        </button>
      </div>

      <div class="line"></div>
    </div>
    <div class="bottom">
      <div @click="$router.push({path: '/home'});">
        <img src="@/assets/return.png" class="leftRight" />
        <p>返回首页</p>
      </div>
      <div @click="collect">
        <img src="@/assets/shou.png" class="leftRight" v-if="status==0" />
        <img src="@/assets/starA.png" class="leftRight" v-else />
        <p>{{status==0?'收藏店铺':'取消收藏'}}</p>
      </div>
      <div @click="toNext('/buy',$route.query.id)">购买商品</div>
      <div @click="toNext('/pay',$route.query.id)">支付买单</div>
    </div>
    <van-popup v-model="show">
      <div class="red">
        <img src="@/assets/red.png" />
        <div class="up">
          <img src="@/assets/cha.png" @click="show=false"/>
          <div class="num">{{rewardNum/100}}</div>
          <div class="tip">恭喜您抽中奖金(元)</div>
          <div class="sub">确定</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="over">
      <div class="over">
        抱歉您来晚了，奖金已抽完~
        <div class="btn" @click="over=false">确认</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {
  getBusiInfo,
  lineOrder,
  freeOrder,
  bonusRollData,
  collectStatus,
  collect,
  bonus,
  bonusPool
} from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
import wx from "weixin-js-sdk";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      tab: 1,
      time: 0,
      totalMoney: 0,
      lineOrder: [],
      freeOrder: [],
      totalLine: 0,
      totalFree: 0,
      bonusRollData: [],
      page: 1,
      rewardNum:0,
      page2: 1,
      status: 0,
      detail: {},
      show:false,
      over:false,
    };
  },
  methods: {
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    chooseTab(e) {
      this.tab = e;
    },
    goTo(lat, lon,name,regionAddress,address) {
      wx.ready(() => {
        wx.openLocation({
          latitude: lat, // 纬度，浮点数，范围为90 ~ -90
          longitude: lon, // 经度，浮点数，范围为180 ~ -180。
          name: regionAddress, // 位置名
          address: regionAddress+address, // 地址详情说明
          scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
          infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
        });
      });
    },
    bonus(){
      bonus({ busiUserId: this.$route.query.id }).then(res=>{
        this.show=true
        this.rewardNum=res.data
      })
    },
    changePage(t) {
      if (t == 1) {
        this.page++;
        this.getLineOrder();
      } else {
        this.page2++;
        this.getFreeOrder();
      }
    },
    getLineOrder() {
      lineOrder({
        page: this.page,
        size: 10,
        busiUserId: this.$route.query.id
      }).then(res => {
        this.lineOrder = [...this.lineOrder, ...res.data.data];
        this.totalLine = res.data.total;
      });
    },
    collect() {
      collect({ busiUserId: this.$route.query.id }).then(res=>{
        this.collectStatus()
      })
    },
    collectStatus() {
      collectStatus({ busiUserId: this.$route.query.id }).then(res => {
        this.status = res.data;
      });
    },

    getFreeOrder() {
      freeOrder({
        page: this.page2,
        size: 10,
        busiUserId: this.$route.query.id
      }).then(res => {
        this.freeOrder = [...this.freeOrder, ...res.data.data];
        this.totalFree = res.data.total;
      });
    },
    init() {
      this.getLineOrder();
      this.getFreeOrder();
      this.collectStatus();
      bonusRollData({ busiUserId: this.$route.query.id }).then(res => {
        this.bonusRollData = res.data;
      });
      var mid = new Date(
              new Date(new Date().toLocaleDateString()).getTime() +
              18 * 60 * 60 * 1000
      ).getTime();
      var end = new Date(
              new Date(new Date().toLocaleDateString()).getTime() +
              19 * 60 * 60 * 1000
      ).getTime();
      this.time = mid - new Date().getTime();
      console.log(this.time)
      getBusiInfo({ busiUserId: this.$route.query.id }).then(res => {
        this.detail = res.data;
      });
      bonusPool({ busiUserId: this.$route.query.id }).then(res => {
        this.totalMoney = res.data.bonusDay;
      });
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
  color: rgba(255, 59, 48, 1);
}
>>> .van-popup{
  background: transparent;
}
</style>