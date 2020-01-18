
import wx from "weixin-js-sdk";
import { wechatSign } from "@/api/common";
// 跳转微信小程序
export function toMiniProgram(obj, arr = []) {
    wechatSign().then(res => {
        const { appId, timestamp, nonceStr, signature } = res.data;
        wx.config({
            debug: false,
            appId,
            timestamp,
            nonceStr,
            signature,
            jsApiList: ["invokeMiniProgramAPI"]
        });
        wx.ready(() => {
            wx.getLocation({
                type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    console.log(res);
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度
                }
            });
        });
    });
}