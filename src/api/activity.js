import request from '@/utils/request'

export function browse(data) {
    return request({
        url: '/newAd/browse.htm',
        method: 'post',
        data
    })
}
export function comment(data) {
    return request({
        url: '/newAd/comment.htm',
        method: 'post',
        data
    })
}
export function giveThumb(data) {
    return request({
        url: '/newAd/giveThumb.htm',
        method: 'post',
        data
    })
}