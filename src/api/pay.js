import request from '@/utils/request'

export function submit(data) {
    return request({
        url: '/order/submit.htm',
        method: 'post',
        data
    })
}

export function pay(data) {
    return request({
        url: '/order/pay.htm',
        method: 'post',
        data
    })
}