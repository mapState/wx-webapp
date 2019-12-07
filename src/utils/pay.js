

import { pay, submit } from "@/api/pay";
import { weChatPay } from "@/utils/weChatPay";
import { device, formatUrl } from "@/utils/utils";
import { Toast } from 'vant';
export function payMoney(type, bizType, bizId, url,groupId) {
    if (type == 3 && device().weChat) {
        Toast({
            message: "请在浏览器中打开"
        });
    } else if (type == 7 && !device().weChat) {
        Toast({
            message: "请在微信中打开"
        });
    } else {
        submit({
            bizType: bizType,
            groupId,
            bizId: bizId || 0
        }).then(res => {
            if (res.code == 200) {
                let returnUrl = "";
                if (bizType == 30) {
                    returnUrl = formatUrl('/bigVip');
                } else {
                    returnUrl = formatUrl('/bigVip/bookGive');
                }
                console.log(returnUrl)
                pay({
                    orderId: res.data.id,
                    payType: type,
                    returnUrl: url || returnUrl
                }).then(res => {
                    if (res.code == 200) {
                        if (type == 3) {
                            const div = document.createElement("div");
                            div.innerHTML = res.data.orderInfo; //此处form就是后台返回接收到的数据
                            document.body.appendChild(div);
                            document.forms[0].submit();
                        } else {
                            if(bizType==62){
                                weChatPay(res.data.params, url)
                            }else{
                                weChatPay(res.data.params, returnUrl)
                            }
                            
                        }
                    }
                });
            }
        });
    }
}