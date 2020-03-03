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
    wechatSdk()
    // login({
    //   openId: "56845648456",
    //   name: "zxx",
    //   logoUrl: "dfdf"
    // });
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
