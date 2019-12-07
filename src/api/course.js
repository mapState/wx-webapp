import request from '@/utils/request'

export function custom(data) {
    return request({
        url: '/course/custom.htm',
        method: 'post',
        data
    })
}

export function types(data) {
    return request({
        url: '/course/types.htm',
        method: 'post',
        data
    })
}

export function categories(data) {
    return request({
        url: '/course/categories.htm',
        method: 'post',
        data
    })
}
export function filter(data) {
    return request({
        url: '/v2/course/filter.htm',
        method: 'post',
        data
    })
}


export function courseList(data) {
    return request({
        url: '/v2/course/list.htm',
        method: 'post',
        data
    })
}