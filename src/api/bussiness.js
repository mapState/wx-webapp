import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login.htm',
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
export function advert() {
    return request({
        url: '/front/busi/advert',
        method: 'get'
    })
}