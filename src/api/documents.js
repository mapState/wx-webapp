import request from '@/utils/request'
// const dev = 'http://documenttest.koudaitiku.net';
const dev = 'http://documents.koudaitiku.com';
const pro = 'http://documents.koudaitiku.com';

const proFlag = location.href.match('koudaitiku.com');
const Host = proFlag ? pro : dev


export function logout() {
    return request({
        url: Host + '/logout.htm',
        method: 'post'
    })
}

export function refreshTaskRecord() {
    return request({
        url: Host + '/refreshTaskRecord.htm',
        method: 'post'
    })
}

export function getDownloadCode() {
    return request({
        url: Host + '/getDownloadCode.htm',
        method: 'get'
    })
}

export function getTaskList() {
    return request({
        url: Host + '/getTaskList.htm',
        method: 'get'
    })
}

export function doTask(data) {
    return request({
        url: Host + '/doTask.htm',
        method: 'post',
        data
    })
}
export function auditComplete(data) {
    return request({
        url: Host + '/auditComplete.htm',
        method: 'post',
        data
    })
}

export function taskComplete(data) {
    return request({
        url: Host + '/taskComplete.htm',
        method: 'post',
        data
    })
}

export function getCount() {
    return request({
        url: Host + '/getCount.htm',
    })
}
export function login(data) {
    return request({
        url: Host + '/login.htm',
        method: 'post',
        data
    })
}
export function getUser() {
    return request({
        url: Host + '/getUser.htm',
    })
}
export function catalog(params) {
    return request({
        url: Host + '/catalog.htm',
        method: 'get',
        params
    })
}

export function getDocumentByCatalog(params) {
    return request({
        url: Host + '/getDocumentByCatalog.htm',
        method: 'get',
        params
    })
}