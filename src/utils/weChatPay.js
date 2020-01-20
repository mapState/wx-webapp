
import { GetCookie, device, getUrlParam } from './utils'
import { consoleDetail } from "@/api/user";
const monitor = location.href.match(/koudaitiku.com/);
const DEVELOP = 'http://api4.koudaitiku.net';
const PRODUCT = 'http://api4.koudaitiku.com';
const HOST = monitor ? PRODUCT : DEVELOP;
import { wechatSdk } from "@/utils/wechatSdk";
// 微信授权
export function weChatAuth() {
  let d = device();
  if (d.weChat&& GetCookie('cusToken') === null) {
    location.href = `http://hxkjzjlm.top/prize/front/cus/auth?url=${window.encodeURIComponent(location.href)}`;
  }
  else {
    
    return null;
  }
}
export function weChatPay(params, returnUrl) {
  console.log(params)
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
