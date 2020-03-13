
import wx from "weixin-js-sdk";
import { wechatSign } from "@/api/common";
import { GetCookie, SetCookie } from './utils'
// 跳转微信小程序
export function wechatSdk(obj, arr = []) {
    wechatSign({ url: encodeURI(location.href) }).then(res => {
        const { appId, timestamp, nonceStr, signature } = res.data;

        wx.config({
            debug: false,
            appId,
            timestamp,
            nonceStr,
            signature,
            jsApiList: ["scanQRCode", 'getLocation', 'openLocation', 'chooseWXPay']
        });
        wx.ready(() => {
            wx.getLocation({
                type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {

                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度    
                    SetCookie('lat', latitude)
                    SetCookie('lng', longitude)
                    var map = new AMap.Map("container", {
                        resizeEnable: true,
                        center: [longitude, latitude],
                        zoom: 13
                    });
                    //获取用户所在城市信息
                    function showCityInfo() {
                        //实例化城市查询类
                        var citysearch = new AMap.CitySearch();
                        //自动获取用户IP，返回当前城市
                        citysearch.getLocalCity(function (status, result) {
                            if (status === "complete" && result.info === "OK") {
                                if (result && result.city && result.bounds) {
                                    var cityinfo = result.city;
                                    var citybounds = result.bounds;
                                    SetCookie('city', cityinfo)
                                    // map.setBounds(citybounds);
                                }
                            } else {
                                console.log(result)
                            }
                        });
                    }
                    showCityInfo();
                }
            });
        });
    });
}