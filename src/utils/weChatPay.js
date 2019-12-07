
import {GetCookie,device} from './utils'
const monitor = location.href.match(/koudaitiku.com/);
const DEVELOP = 'http://api4.koudaitiku.net';
const PRODUCT = 'http://api4.koudaitiku.com';
const HOST = monitor ? PRODUCT : DEVELOP;
// 微信授权
export function weChatAuth() {
    let d = device();
    if (d.weChat && GetCookie('_wxoid') === null) {
        location.href = `${HOST}/wechat/authorize.htm?url=${window.encodeURIComponent(location.href)}`;
    }
    else {
        return null;
    }
}
export function weChatPay(params,returnUrl) {
    function onBridgeReady() {
        WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          params,
          res => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              window.location.href = returnUrl;
            } else if (
              res.err_msg == "get_brand_wcpay_request:fail"
            ) {
            }
          }
        );
      }
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            onBridgeReady,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent(
            "WeixinJSBridgeReady",
            onBridgeReady
          );
          document.attachEvent(
            "onWeixinJSBridgeReady",
            onBridgeReady
          );
        }
      } else {
        onBridgeReady();
      }
}
