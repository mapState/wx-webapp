import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login.htm',
        method: 'post',
        data
    })
}

export function loginBySmsCode(data) {
    return request({
        url: '/loginBySmsCode.htm',
        method: 'post',
        data
    })
}

export function loginBySmsCodeAndInviteCode(data) {
    return request({
        url: '/loginBySmsCodeAndInviteCode.htm',
        method: 'post',
        data
    })
}


export function check(data) {
    return request({
        url: '/vip/check.htm',
        method: 'post',
        data
    })
}

export function address(data) {
    return request({
        url: '/vip/address.htm',
        method: 'post',
        data
    })
}

export function tasks(data) {
    return request({
        url: '/vip/tasks.htm',
        method: 'post',
        data
    })
}



export function vipDesc(data) {
    return request({
        url: '/vipDesc/content.htm',
        method: 'post',
        data
    })
}
export function vipDetail(data) {
    return request({
        url: '/vip/detail.htm',
        method: 'post',
        data
    })
}
export function sendCode(data) {
    return request({
        url: '/sendCode.htm',
        method: 'post',
        data
    })
}
export function vipInfo(data) {
    return request({
        url: '/home/vipInfo.htm',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/logout.htm',
        method: 'post'
    })
}
export function donate() {
    return request({
        url: '/donate.htm',
        method: 'post'
    })
}