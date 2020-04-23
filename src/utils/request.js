// const axios = window.axios
import axios from 'axios';
import store from '../store';
import { Toast } from 'vant';
import router from '../router'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://192.168.0.122:8080/prize', // url = base url + request url
  // baseURL: 'http://192.168.1.128:8080/prize', // url = base url + request url
  baseURL: 'http://hxkjzjlm.top/prize', // url = base url + request url
  withCredentials: true,// send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code != 200) {
      if (res.code == 300) {
        Toast({
          message: res.message,
          duration: 1000
        });
      }
      if (res.code == 400) {
        router.app.$router.push({
          path: '/login'
        });
      }
      if (res.code == 401) {
        router.app.$router.push({
          path: '/login',
          query:{
            where:1
          }
        });
      }
      if (res.code == 600) {
        router.app.$router.push({
          path: '/login',
          query:{
            pay:1
          }
        });
      }
      // Toast({
      //   message: res.message,
      //   duration: 1000
      // });

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
