import request from '@/utils/request'

export function wechatSign(data) {
    return request({
        url: '/wechat/sign.htm',
        method: 'post',
        data
    })
}
export function teacherHot(data) {
    return request({
        url: '/teacher/hot.htm',
        method: 'post',
        data
    })
}
export function headTeacher(data) {
    return request({
        url: '/headTeacher/detail.htm',
        method: 'post',
        data
    })
}

export function adList(data) {
    return request({
        url: '/ad/list.htm',
        method: 'post',
        data
    })
}

export function upload(data,config) {
    return request({
        url: 'http://res4.koudaitiku.com/image/upload.htm',
        method: 'post',
        data,
        config
    })
}
export function groupNew(data) {
    return request({
        url: '/groupNew/detail.htm',
        method: 'post',
        data
        
    })
}