import request from '@/utils/request'

export function addrList(data) {
    return request({
        url: '/addr/list.htm',
        method: 'post',
        data
    })
}

export function addrSave(data) {
    return request({
        url: '/addr/save.htm',
        method: 'post',
        data
    })
}

export function addrEdit(data) {
    return request({
        url: '/addr/detail.htm',
        method: 'post',
        data
    })
}

export function addrRemove(data) {
    return request({
        url: '/addr/remove.htm',
        method: 'post',
        data
    })
}


