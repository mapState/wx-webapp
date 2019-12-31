import request from '@/utils/request'

export function makLogin(data) {
    return request({
        url: '/front/mak/login',
        method: 'post',
        data
    })
}
export function feedback(data) {
    return request({
        url: '/front/cus/feedback',
        method: 'post',
        data
    })
}
export function makAdd(data) {
    return request({
        url: '/front/mak/add',
        method: 'post',
        data
    })
}
export function balanceCashm(data) {
    return request({
        url: '/front/mak/console/balanceCash',
        method: 'post',
        data
    })
}
export function console(params) {
    return request({
        url: '/front/mak/console',
        method: 'get',
        params
    })
}
export function turnover(params) {
    return request({
        url: '/front/mak/turnover',
        method: 'get',
        params
    })
}
export function moneyList(params) {
    return request({
        url: '/front/mak/money/list',
        method: 'get',
        params
    })
}
export function cashList(params) {
    return request({
        url: '/front/mak/cash/list',
        method: 'get',
        params
    })
}
export function updateImage(params) {
    return request({
        url: '/front/mak/updateImage',
        method: 'get',
        params
    })
}