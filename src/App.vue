<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import wx from "weixin-js-sdk";

import { weChatAuth } from "@/utils/weChatPay";
import { wechatSdk } from "@/utils/wechatSdk";
import { login } from "@/api/user";
export default {
  data() {
    return {};
  },
  methods: {
    init() {}
  },

  mounted() {
    weChatAuth();
    // wx.scanQRCode({
    //   needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    //   scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    //   success: function(res) {
    //     console.log(res)
    //     var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
    //   }
    // });
    // console.log(location.href);
    wechatSdk()
    this.init();
  }
};
</script>

<style>
html,
body {
  background-color: #fff;
  font-family: sans-serif;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
img {
  vertical-align: middle;
}
.out {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.little {
  transform: scale(0.8);
}
.upDown {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.leftRight {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
