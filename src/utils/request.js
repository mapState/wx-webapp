// const axios = window.axios
import axios from 'axios';
import { store } from '../store';
import { Toast } from 'vant';
import Qs from "qs";
const dev = 'http://api4.koudaitiku.net';
const pro = 'http://api4.koudaitiku.com';
const pre = 'http://preapi4.koudaitiku.net';
const proFlag = location.href.match('koudaitiku.com');
const preFlag = location.href.match('preembed');
let url = ''
if (proFlag) {
  url = pro;
} else if (preFlag) {
  url = pre;
} else {
  url = dev;
}
// create an axios instance
const service = axios.create({
  baseURL: url, // url = base url + request url
  withCredentials: true,// send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    try {
      config.headers.Channel = location.href.split('sourceID=')[1].split('-')[0];
    } catch (error) {
    }
    if (config.method === 'post' && config.data && config.data.constructor !== FormData) {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    if (res.code != 200) {
      if (res.msg) {
        if (res.msg == '请登录') {
        } else {
          Toast({
            message: res.msg,
            duration: 1000
          });
        }
      }
      return res
      // return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
