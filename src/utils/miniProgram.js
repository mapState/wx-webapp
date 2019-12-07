
// import wx from "weixin-js-sdk";
// import { wechatSign } from "@/api/common";
// // 跳转微信小程序
// export function toMiniProgram(obj, arr = []) {
//     wechatSign().then(res => {
//         const { appId, timestamp, nonceStr, signature } = res.data;
//         wx.config({
//             debug: false,
//             appId,
//             timestamp,
//             nonceStr,
//             signature,
//             jsApiList: ["invokeMiniProgramAPI"]
//         });
//         wx.ready(() => {
//             wx.miniProgram.navigateTo({ url: "/pages/index/main.html" });
//         });
//     });
// }