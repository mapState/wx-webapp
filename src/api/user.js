import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login.htm',
        method: 'post',
        data
    })
}

export function advert(params) {
    return request({
        url: '/front/cus/advert',
        method: 'get',
        params
    })
}
export function platBonusDetail(params) {
    return request({
        url: '/front/cus/all/platBonusDetail',
        method: 'get',
        params
    })
}
export function bonusPool(params) {
    return request({
        url: '/front/cus/bonusPool',
        method: 'get',
        params
    })
}
export function bonus(params) {
    return request({
        url: '/front/cus/busi/bonus',
        method: 'get',
        params
    })
}
export function cartGetByIds(params) {
    return request({
        url: '/front/cus/cart/cartGetByIds',
        method: 'get',
        params
    })
}
export function getGoodByDetailId(params) {
    return request({
        url: '/front/cus/cart/getGoodByDetailId',
        method: 'get',
        params
    })
}
export function console(params) {
    return request({
        url: '/front/cus/console',
        method: 'get',
        params
    })
}
export function addressList(data) {
    return request({
        url: '/front/cus/console/address/list',
        method: 'post',
        data
    })
}
export function addressUpdate(data) {
    return request({
        url: '/front/cus/console/address/update',
        method: 'post',
        data
    })
}
export function balance(data) {
    return request({
        url: '/front/cus/console/balance',
        method: 'post',
        data
    })
}
export function balanceCash(params) {
    return request({
        url: '/front/cus/console/balanceCash',
        method: 'get',
        params
    })
}
export function balanceDetails(params) {
    return request({
        url: '/front/cus/console/balanceDetails',
        method: 'get',
        params
    })
}
export function consoleDetail(params) {
    return request({
        url: '/front/cus/console/detail',
        method: 'get',
        params
    })
}
export function collectSearch(data) {
    return request({
        url: '/front/cus/console/collect/search',
        method: 'post',
        data
    })
}
export function detailSet(data) {
    return request({
        url: '/front/cus/console/detail/set',
        method: 'post',
        data
    })
}
export function sendPhone(data) {
    return request({
        url: '/front/cus/console/phone/sendPhone',
        method: 'post',
        data
    })
}
export function phoneSet(data) {
    return request({
        url: '/front/cus/console/phone/set',
        method: 'post',
        data
    })
}
export function prizeRecord(data) {
    return request({
        url: '/front/cus/console/prize/record',
        method: 'post',
        data
    })
}
export function cusConsume(params) {
    return request({
        url: '/front/cus/consume',
        method: 'get',
        params
    })
}
export function cusConsume(params) {
    return request({
        url: '/front/cus/consume',
        method: 'get',
        params
    })
}
export function consumeSearch(params) {
    return request({
        url: '/front/cus/consume/search',
        method: 'get',
        params
    })
}
export function copywriting(params) {
    return request({
        url: '/front/cus/copywriting',
        method: 'get',
        params
    })
}
export function evaluateList(params) {
    return request({
        url: '/front/cus/evaluate/list',
        method: 'get',
        params
    })
}
export function publish(params) {
    return request({
        url: '/front/cus/evaluate/publish',
        method: 'get',
        params
    })
}
export function publish(params) {
    return request({
        url: '/front/cus/evaluate/publish',
        method: 'get',
        params
    })
}