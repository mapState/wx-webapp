import request from '@/utils/request'

export function wechatSign(data) {
    return request({
        url: '/wechat/sign.htm',
        method: 'post',
        data
    })
}


export function upload(data,config) {
    return request({
        url: '/front/file/upload',
        method: 'post',
        data,
        config
    })
}
