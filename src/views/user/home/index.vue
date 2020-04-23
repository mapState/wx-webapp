<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="search">
      <img src="@/assets/position.png" alt class="position" />
      <span class="city" @click="toNext('/area')">{{$route.query.name||city}}</span>
      <div class="input" @click="toNext('/search')">
        <img src="@/assets/big.png" />
        <div class="name" @click="toNext('/search')">商户名/地点/菜名</div>
        <!-- <input type="text" placeholder="" /> -->
      </div>
      <img src="@/assets/sao.png" alt class="sao" @click="sao" />
    </div>
    <div class="tips">
      <div class="item" v-for="(item,i) in msgs" :key="i" @click="remove">
        <img src="@/assets/dui.png" class="upDown" />
        <div class="txt">{{item}}</div>
      </div>
    </div>
    <div class="banner">
      <van-swipe :show-indicators="false" :autoplay="2000">
        <van-swipe-item v-for="(item,i) in imgUrl" :key="i">
          <img :src="url+item.image" @click="toAd(item.url)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="cates">
      <van-swipe @change="swipeChange" :show-indicators="false">
        <van-swipe-item v-for="(cate,c) in cates" :key="c">
          <div
            class="item"
            v-for="(item,i) in cate"
            :key="i"
            @click="toNext('/merchantsList',item.id)"
          >
            <div class="img" :class="'bg'+i">
              <img :src="url+item.image" alt />
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="dots">
        <div class="dot" v-for="(cate,c) in cates" :key="c" :class="{active:current==c}"></div>
      </div>
    </div>
    <div class="report">
      <span>入驻公告</span>
      <span>|</span>
      <span class="out">
        <van-swipe :autoplay="2000" vertical :show-indicators="false" :touchable="false">
          <van-swipe-item v-for="(item,i) in notice" :key="i">
            <div class="out">{{item.name}}</div>
          </van-swipe-item>
        </van-swipe>
      </span>
      <span @click="toNext('/come')">立即入驻</span>
    </div>
    <div class="nav">
      <div class="item" @click="chooseNav(1)" :class="{active:nav==1}">
        推荐
        <div class="little">品质优享</div>
      </div>
      <div class="item" @click="chooseNav(2)" :class="{active:nav==2}">
        距离
        <div class="little">最近商家</div>
      </div>
      <div class="item" @click="chooseNav(3)" :class="{active:nav==3}">
        人气
        <div class="little">销量排行</div>
      </div>
      <div class="item" @click="chooseNav(4)" :class="{active:nav==4}">
        生活
        <div class="little">吃喝玩乐</div>
      </div>
    </div>
    <div class="list">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item,i) in list" :key="i">
          <div class="item" @click="toNext('/merchantsList/merchantsDetail',item.id)">
            <img :src="url+item.storeImageUrl" class="cover" />
            <img src="@/assets/tuijian.png" class="tuijian" v-show="item.excPush" />
            <div class="name">{{item.name}}</div>
            <div class="labels" style="margin-bottom:10px">
              <div style="border:none;padding:0;font-size:13px;margin-right:5px">{{item.category}}</div>
              <div style="border:none;padding:0;font-size:13px;">{{item.typeName}}</div>
            </div>
            <div class="labels">
              <div>可奖励{{item.money/100}}元</div>
              <div>抽奖池{{item.bonusCount/100}}元</div>
            </div>
            <div class="instro out">{{item.firm}}</div>
            <div
              class="num"
            >{{item.juli<1000?(item.juli).toFixed(1)+'m':(item.juli/1000).toFixed(1)+'km'}}</div>
          </div>
        </van-cell>
      </van-list>
    </div>

    <tabbar :active="0"></tabbar>
  </div>
</template>

<script>
import {
  copywriting,
  advert,
  typeA,
  notice,
  indexSearch,
  logout
} from "@/api/user";
import { wechatSign } from "@/api/common";
import { UPLOAD_DOMAIN } from "@/utils/const";
import wx from "weixin-js-sdk";
import { GetCookie, SetCookie, RemoveCookie } from "@/utils/utils";
import tabbar from "@/components/tabBar";
import Scroll from "@/components/Scroll";
export default {
  components: {
    tabbar,
    Scroll
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      nav: 1,
      imgUrl: [],
      imgPath: "",
      city: "",
      msgs: [],
      notice: [],
      GetCookie: GetCookie,
      current: 0,
      list: [],
      cates: [[]],
      list: [],
      page: 1,
      loading: false,
      finished: false
    };
  },
  methods: {
    remove() {
      logout();
    },
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    sao() {
      wx.ready(() => {
        wx.scanQRCode({
          needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function(res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            console.log(res);
          }
        });
      });
    },
    toAd(path) {
      location.href = path;
    },
    swipeChange(e) {
      this.current = e;
    },
    chooseNav(e) {
      this.nav = e;
      this.list = [];
      this.page = 1;
      this.getList(e);
    },
    getList(type) {
      indexSearch({
        page: this.page,
        size: 5,
        type,
        lat: this.$route.query.lat || GetCookie("lat"),
        lon: this.$route.query.lng || GetCookie("lng")
      }).then(res => {
        this.list = [...this.list, ...res.data.data];

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= res.data.total) {
          this.finished = true;
        }
      });
    },
    onLoad() {
      this.page++;
      this.getList(this.nav);
    },
    showCityInfo() {
      //实例化城市查询类
      var citysearch = new AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity((status, result)=> {
        if (status === "complete" && result.info === "OK") {
          if (result && result.city && result.bounds) {
            var cityinfo = result.city;
            var citybounds = result.bounds;
            console.log(cityinfo)
            SetCookie("city", cityinfo);
            this.city=cityinfo
            // map.setBounds(citybounds);
          }
        } else {
          console.log(result);
        }
      });
    },
    init() {
      this.getList(1);
      copywriting().then(res => {
        this.msgs = res.data;
      });
      advert().then(res => {
        this.imgUrl = res.data;

        // this.imgPath = UPLOAD_DOMAIN + res.data[0].image;
      });
      typeA().then(res => {
        this.cates = [[]];
        let sum = 0;
        for (let i = 0; i < res.data.length; i++) {
          sum++;
          this.cates[this.cates.length - 1].push(res.data[i]);
          if (sum % 8 == 0) {
            this.cates.push([]);
          }
        }
        if (this.cates[this.cates.length - 1].length == 0) {
          this.cates.pop();
        }
      });
      notice().then(res => {
        this.notice = res.data;
      });
    }
  },

  mounted() {
    var map = new AMap.Map("container", {
      resizeEnable: true,
      center: [GetCookie("lng"), GetCookie("lat")],
      zoom: 13
    });
    //获取用户所在城市信息
    this.showCityInfo();
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
</style>
<style scoped>
>>> .van-swipe {
  height: 100%;
}
>>> .van-cell {
  padding: 0;
}
>>> .van-cell:not(:last-child)::after {
  border: none;
}
</style>