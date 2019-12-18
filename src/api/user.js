import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/front/cus/login',
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
        url: '/front/cus/platBonusDetail',
        method: 'get',
        params
    })
}
export function rankYesterday(params) {
    return request({
        url: '/front/cus/yesterday/platBonusDetail',
        method: 'get',
        params
    })
}
export function totalRank(params) {
    return request({
        url: '/front/cus/all/platBonusDetail',
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
export function addressList(params) {
    return request({
        url: '/front/cus/console/address/list',
        method: 'get',
        params
    })
}
export function addressUpdate(data) {
    return request({
        url: '/front/cus/console/address/update',
        method: 'post',
        data
    })
}
export function balance(params) {
    return request({
        url: '/front/cus/console/balance',
        method: 'get',
        params
    })
}
export function balanceCash(data) {
    return request({
        url: '/front/cus/console/balanceCash',
        method: 'post',
        data
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
export function collectSearch(params) {
    return request({
        url: '/front/cus/console/collect/search',
        method: 'get',
        params
    })
}

export function indexSearch(data) {
    return request({
        url: '/front/cus/index/search',
        method: 'post',
        data
    })
}
export function sendPhoneU(params) {
    return request({
        url: '/front/cus/console/phone/sendPhone',
        method: 'get',
        params
    })
}
export function typeSearch(data) {
    return request({
        url: '/front/cus/type/search',
        method: 'post',
        data
    })
}
export function phoneSetC(params) {
    return request({
        url: '/front/cus/console/phone/set',
        method: 'get',
        params
    })
}
export function getBusiInfo(params) {
    return request({
        url: '/front/cus/getBusiInfo',
        method: 'get',
        params
    })
}
export function getGoodType(params) {
    return request({
        url: '/front/cus/getGoodType',
        method: 'get',
        params
    })
}
export function myorder(data) {
    return request({
        url: '/front/cus/order/myorder',
        method: 'post',
        data
    })
}
export function prizeRecord(params) {
    return request({
        url: '/front/cus/console/prize/record',
        method: 'get',
        params
    })
}
export function detailSet(data) {
    return request({
        url: '/front/cus/console/detail/set',
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

export function consumeSearch(data) {
    return request({
        url: '/front/cus/consume/search',
        method: 'post',
        data
    })
}
export function copywriting(params) {
    return request({
        url: '/front/cus/copywriting',
        method: 'get',
        params
    })
}
export function typeA(params) {
    return request({
        url: '/front/cus/typeA',
        method: 'get',
        params
    })
}
export function typeB(params) {
    return request({
        url: '/front/cus/typeB',
        method: 'get',
        params
    })
}
export function notice(params) {
    return request({
        url: '/front/cus/notice',
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
export function freeOrder(params) {
    return request({
        url: '/front/cus/freeOrder',
        method: 'get',
        params
    })
}
export function lineOrder(params) {
    return request({
        url: '/front/cus/lineOrder',
        method: 'get',
        params
    })
}
export function bonusRollData(params) {
    return request({
        url: '/front/cus/bonusRollData',
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
export function payDetail(params) {
    return request({
        url: '/front/cus/payDetail',
        method: 'get',
        params
    })
}
export function collect(params) {
    return request({
        url: '/front/cus/collect',
        method: 'get',
        params
    })
}
export function platBonus(params) {
    return request({
        url: '/front/cus/plat/bonus',
        method: 'get',
        params
    })
}
export function collectStatus(params) {
    return request({
        url: '/front/cus/collect/status',
        method: 'get',
        params
    })
}
export function freeDetail(params) {
    return request({
        url: '/front/cus/free/detail',
        method: 'get',
        params
    })
}
export function freeRecord(params) {
    return request({
        url: '/front/cus/free/record',
        method: 'get',
        params
    })
}
export function phoneAuth(params) {
    return request({
        url: '/front/cus/console/phone/auth',
        method: 'get',
        params
    })
}
export function recordWait(params) {
    return request({
        url: '/front/cus/free/record/wait',
        method: 'get',
        params
    })
}
export function recordAlready(params) {
    return request({
        url: '/front/cus/free/record/already',
        method: 'get',
        params
    })
}
export function addressFindById(params) {
    return request({
        url: '/front/cus/console/address/findById',
        method: 'get',
        params
    })
}
export function qrcode(data) {
    return request({
        url: '/front/cus/order/qrcode',
        method: 'post',
        data,
        responseType: "arraybuffer"
    })
}
export function goodConfirm(params) {
    return request({
        url: '/front/cus/good/confirm',
        method: 'get',
        params
    })
}
export function goodsList(data) {
    return request({
        url: '/front/cus/good/list',
        method: 'post',
        data
    })
}
export function getAllGoodType(params) {
    return request({
        url: '/front/busi/getAllGoodType',
        method: 'get',
        params
    })
}