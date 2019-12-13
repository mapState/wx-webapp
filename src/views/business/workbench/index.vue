<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="dataTop">
      <div class="title">我的数据</div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.turnoverToday/100}}</div>今日营业额
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.turnoverTotal/100}}</div>总营业额
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.discountTotal/100}}</div>折扣后收入
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.freeDay/100}}</div>今日免单奖励
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.freeTotal/100}}</div>已免单总奖励
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.bonusDay/100}}</div>当前抽奖池
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.quHuoTotal}}</div>待取货订单
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.faHuoTotal}}</div>待发货订单
        </div>
      </div>
      <div class="item">
        <div class="inner upDown">
          <div class="num">{{detail.orderTotal}}</div>总订单数量
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
    <div class="tabContent" v-show="tab==1">
      <div class="inner">
        <div class="item" v-for="(item,i) in sortList" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown" />
          <div class="name upDown">{{item.name}}</div>
          <div class="tip upDown" v-show="i==0">还差{{item.money/100-item.bonusMoney/100}}元够免单</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money">{{item.money/100}}元</div>待奖励
            </div>
          </div>
        </div>
        <div class="last" v-show="sortList.length<totalSort" @click="changePage(1)">点击加载更多</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent" v-show="tab==2">
      <div class="inner">
        <div class="item" v-for="(item,i) in freeList" :key="i">
          <span>{{i+1}}</span>
          <img :src="url+item.image" class="upDown" />
          <div class="name upDown">{{item.name}}</div>
          <div class="tip upDown">{{item.count}}次免单</div>
          <div class="right upDown rc">
            <div class="in upDown" style="width:100%">
              <div class="money">{{item.total/100}}元</div>总奖励
            </div>
          </div>
        </div>
        <div class="last" v-show="freeList.length<totalFree" @click="changePage(2)">点击加载更多</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent3" v-show="tab==3">
      <div class="inner">
        <div class="money">￥{{totalMoney/100}}</div>
        <div class="tip1">今日已累计奖金（元）</div>
        <div class="tip2">每日抽奖时间为:18:00-19:00</div>
        <div class="tip3">参与排队中拥有抽奖资格</div>
        <div class="tip3">每日免单奖励超过{{freeMinMoney/100}}，超过部分的{{bnsRate}}%放入店铺抽奖池，供其它用户抽奖</div>
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
          <img :src="imgUrl" class="content" />
        </div>
        <div class="tip">长按图片保存</div>
      </div>
    </van-popup>
    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/bussTabBar";
import { UPLOAD_DOMAIN } from "@/utils/const";
import { busiConsole, busiQrcode,busiLineOrder,busiFreeOrder,busiBonusPool } from "@/api/bussiness";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      tab: 1,
      show: false,
      detail: {},
      imgUrl:'',
      page:1,
      page2:1,
      totalMoney:'',
      freeMinMoney:'',
      bnsRate:'',
      url:UPLOAD_DOMAIN,
      totalSort:0,
      totalFree:0,
      sortList:[],
      freeList:[]
    };
  },
  methods: {
    toNext(msg, active) {
      this.$router.push({
        path: msg
      });
    },
    chooseTab(e) {
      this.tab = e;
    },
    changePage(t){
      if(t==1){
        this.page++;
        this.busiLineOrder()
      }else{
        this.page2++;
        this.busiFreeOrder()
      }
      
    },
    busiLineOrder(){
      busiLineOrder({page:this.page,size:1}).then(res=>{
        this.sortList = [...this.sortList, ...res.data.data];
        this.totalSort=res.data.total;
      })
    },
    busiFreeOrder(){
      busiFreeOrder({page:this.page2,size:1}).then(res=>{
        this.freeList = [...this.freeList, ...res.data.data];
        this.totalFree=res.data.total;
      })
    },
    init() {
      this.busiLineOrder()
      this.busiFreeOrder()
      busiConsole().then(res => {
        this.detail = res.data;
      });
      busiBonusPool().then(res => {
        this.totalMoney = res.data.bonusDay;
        this.freeMinMoney = res.data.freeMinMoney;
        this.bnsRate = res.data.bnsRate;
      });
      busiQrcode()
        .then(res => {
          return (
            "data:image/png;base64," +
            btoa(
              new Uint8Array(res).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            )
          );
        })
        .then(data => {
            this.imgUrl=data
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
  color: #5a3504;
}
>>> .van-popup {
  background: transparent;
}
</style>