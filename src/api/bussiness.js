import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/front/busi/login',
        method: 'post',
        data
    })
}
export function passwordSet(data) {
    return request({
        url: '/front/busi/console/password/set',
        method: 'post',
        data
    })
}
export function sendPhone(data) {
    return request({
        url: '/front/busi/console/phone/sendPhone',
        method: 'post',
        data
    })
}
export function getGoodType() {
    return request({
        url: '/front/busi/getGoodType',
        method: 'get'
    })
}
export function phoneSet() {
    return request({
        url: '/front/busi/console/phone/set',
        method: 'get'
    })
}
export function advert() {
    return request({
        url: '/front/busi/advert',
        method: 'get'
    })
}
export function busiAuth(data) {
    return request({
        url: '/front/busi/auth',
        method: 'post',
        data
    })
}
export function busiConsole() {
    return request({
        url: '/front/busi/console',
        method: 'get',
        
    })
}
export function busiIncomeDetails(params) {
    return request({
        url: '/front/busi/incomeDetails',
        method: 'get',
        params
    })
}
export function busiLineOrder(params) {
    return request({
        url: '/front/busi/lineOrder',
        method: 'get',
        params
    })
}
export function busiFreeOrder(params) {
    return request({
        url: '/front/busi/freeOrder',
        method: 'get',
        params
    })
}
export function busiBonusPool(params) {
    return request({
        url: '/front/busi/bonusPool',
        method: 'get',
        params
    })
}
export function getBusiInfo(params) {
    return request({
        url: '/front/busi/getBusiInfo',
        method: 'get',
        params
    })
}
export function orderDetail(params) {
    return request({
        url: '/front/busi/orderDetail',
        method: 'get',
        params
    })
}
export function orderList(params) {
    return request({
        url: '/front/busi/orderList',
        method: 'get',
        params
    })
}
export function orderSplit(params) {
    return request({
        url: '/front/busi/orderSplit',
        method: 'get',
        params
    })
}
export function removeGoodType(params) {
    return request({
        url: '/front/busi/removeGoodType',
        method: 'get',
        params
    })
}
export function addGood(params) {
    return request({
        url: '/front/busi/addGood',
        method: 'get',
        params
    })
}
export function selfGoods(params) {
    return request({
        url: '/front/busi/selfGoods',
        method: 'get',
        params
    })
}
export function sendGoods(params) {
    return request({
        url: '/front/busi/sendGoods',
        method: 'get',
        params
    })
}
export function updateBusiInfo(params) {
    return request({
        url: '/front/busi/updateBusiInfo',
        method: 'get',
        params
    })
}
export function busiQrcode() {
    return request({
        url: '/front/busi/qrcode',
        method: 'get',
        responseType: "arraybuffer"
    })
}