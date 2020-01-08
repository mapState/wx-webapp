<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <div class="data">
        <div class="item" @click="toNext('/freeList')">
          <div class="num">{{detail.freeDetailA}}</div>消费过的商家
        </div>
        <div class="item">
          <div class="num">{{detail.freeDetailB}}</div>消费次数
        </div>
        <div class="item">
          <div class="num">{{detail.freeDetailC/100}}</div>总免单(元)
        </div>
        <div class="item">
          <div class="num">{{detail.freeDetailD/100}}</div>待免单(元)
        </div>
      </div>
      <div class="tab">
        <div @click="chooseTab(1)" :class="{active:tab==1}">
          <div>待免单奖励</div>
          <img src="@/assets/up.png" v-show="tab==1" />
        </div>
        <div @click="chooseTab(2)" :class="{active:tab==2}">
          <div>已免单奖励</div>
          <img src="@/assets/up.png" v-show="tab==2" />
        </div>
      </div>
    </div>
    <div class="tabContent" v-show="tab==1">
      <div class="list">
        <div class="item" v-for="(item,i) in recordWait" :key="i">
          <img :src="url+item.storeImageUrl" class="cover" />
          <div class="name">{{item.name}}</div>
          <div class="labels">
            <div>{{item.days}}天前消费</div>
            <div>免单排名第{{item.id-1}}名</div>
          </div>
          <div class="instro out">商家当前累计抽奖池：{{item.bonusCount/100}}元</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money"><b>{{item.money/100}}</b>元</div>待奖励
            </div>
          </div>
        </div>
        <empty msg="暂无数据" v-show="recordWait.length==0" />
      </div>
      <div class="line"></div>
    </div>
    <div class="tabContent2" v-show="tab==2">
      <div class="list">
        <div class="item" v-for="(item,i) in recordAlready" :key="i">
          <img :src="url+item.storeImageUrl" class="cover" />
          <div class="name">{{item.name}}</div>
          <div class="instro out">{{item.createDate}} 免单成功</div>
          <div class="right upDown">
            <div class="in upDown" style="width:100%">
              <div class="money"><b>{{item.money/100}}</b>元</div>待奖励
            </div>
          </div>
        </div>
        <empty msg="暂无数据" v-if="recordAlready.length==0" />
      </div>
      <div class="line"></div>
    </div>
    <tabbar :active="2"></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabBar";
import empty from "@/components/empty";
import { freeDetail,recordWait,recordAlready } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  components: {
    tabbar,
    empty
  },
  data() {
    return {
      url:UPLOAD_DOMAIN,
      tab: 1,
      time: 30 * 60 * 60 * 1000,
      show: false,
      over: true,
      detail: {},
      recordWait:[],
      recordAlready:[],
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
    getRecordWait(e){
      recordWait({
        page: 1,
        size: 1000,
        type:e
      }).then(res=>{
        this.recordWait=res.data.data
      });
    },
    getRecordAlready(e){
      recordAlready({
        page: 1,
        size: 1000,
        type:e
      }).then(res=>{
        this.recordAlready=res.data.data
      });
    },
    init() {
      freeDetail().then(res => {
        this.detail = res.data;
      });
      this.getRecordWait(1)
      this.getRecordAlready(1)
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