import Vue from 'vue'
import Router from 'vue-router'

const home = ()=>import("@/views/user/home")
const wallet = ()=>import("@/views/user/wallet")
const addressChange = ()=>import("@/views/user/addressChange")
const mobile = ()=>import("@/views/user/mobile")
const set = ()=>import("@/views/user/set")
const addressList = ()=>import("@/views/user/addressList")
const free = ()=>import("@/views/user/free")
const freeList = ()=>import("@/views/user/freeList")
const merchantsList = ()=>import("@/views/user/merchantsList")
const pay = ()=>import("@/views/user/pay")
const mine = ()=>import("@/views/user/mine")
const reward = ()=>import("@/views/user/reward")
const merchantsDetail = ()=>import("@/views/user/merchantsList/merchantsDetail")

Vue.use(Router)
export default new Router({
	routes: [
		{ path: '/home', component: home, meta: { title: '众奖联盟' } },
		{ path: '/wallet', component: wallet, meta: { title: '余额' } },
		{ path: '/mobile', component: mobile, meta: { title: '更换手机' } },
		{ path: '/set', component: set, meta: { title: '设置' } },
		{ path: '/merchantsList', component: merchantsList, meta: { title: '商家列表' }},
		{ path: '/pay', component: pay, meta: { title: '商家支付' }},
		{ path: '/reward', component: reward, meta: { title: '抽奖' }},
		{ path: '/free', component: free, meta: { title: '我的免单' }},
		{ path: '/mine', component: mine, meta: { title: '我的' }},
		{ path: '/addressList', component: addressList, meta: { title: '管理地址' }},
		{ path: '/addressChange', component: addressChange, meta: { title: '管理地址' }},
		{ path: '/freeList', component: freeList, meta: { title: '消费过的商家' }},
		{ path: '/merchantsList/merchantsDetail', component: merchantsDetail, meta: { title: '商家详情' }},
	]
})
