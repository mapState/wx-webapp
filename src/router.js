import Vue from 'vue'
import Router from 'vue-router'

const s1 = () => import("@/views/success/s1.vue")
const s2 = () => import("@/views/success/s2.vue")
const s3 = () => import("@/views/success/s3.vue")
const s4 = () => import("@/views/success/s4.vue")
const s5 = () => import("@/views/success/s5.vue")
const s6 = () => import("@/views/success/s6.vue")

// 创客
const dHome = () => import("@/views/promoters/dHome")
const regist = () => import("@/views/promoters/regist")
const totalMoney = () => import("@/views/promoters/totalMoney")
const totalBuss = () => import("@/views/promoters/totalBuss")
const team = () => import("@/views/promoters/team")
const cDetail = () => import("@/views/promoters/cDetail")
const tHome = () => import("@/views/promoters/tHome")
const totalRed = () => import("@/views/promoters/totalRed")





// 商家
const come = () => import("@/views/business/come")
const addGoods = () => import("@/views/business/addGoods")
const cates = () => import("@/views/business/cates")
const cards = () => import("@/views/business/cards")
const login = () => import("@/views/business/login")
const workbench = () => import("@/views/business/workbench")
const bussOrder = () => import("@/views/business/bussOrder")
const bussOrderDetail = () => import("@/views/business/bussOrderDetail")
const split = () => import("@/views/business/split")
const send = () => import("@/views/business/send")
const bussSet = () => import("@/views/business/bussSet")
const psd = () => import("@/views/business/psd")
const bussDetail = () => import("@/views/business/bussDetail")
const goodsManage = () => import("@/views/business/goodsManage")



// 用户
const area = () => import("@/views/user/area")
const home = () => import("@/views/user/home")
const search = () => import("@/views/user/search")
const setMobile = () => import("@/views/user/setMobile")
const feedback = () => import("@/views/user/feedback")
const speak = () => import("@/views/user/speak")
const success = () => import("@/views/user/success")
const words = () => import("@/views/user/words")
const orderDetail = () => import("@/views/user/orderDetail")
const goods = () => import("@/views/user/goods")
const carts = () => import("@/views/user/carts")
const buy = () => import("@/views/user/buy")
const order = () => import("@/views/user/order")
const record = () => import("@/views/user/record")
const recharge = () => import("@/views/user/recharge")
const tiXian = () => import("@/views/user/tiXian")
const detail = () => import("@/views/user/detail")
const myMarchants = () => import("@/views/user/myMarchants")
const wallet = () => import("@/views/user/wallet")
const addressChange = () => import("@/views/user/addressChange")
const mobile = () => import("@/views/user/mobile")
const set = () => import("@/views/user/set")
const addressList = () => import("@/views/user/addressList")
const free = () => import("@/views/user/free")
const freeList = () => import("@/views/user/freeList")
const merchantsList = () => import("@/views/user/merchantsList")
const pay = () => import("@/views/user/pay")
const mine = () => import("@/views/user/mine")
const reward = () => import("@/views/user/reward")
const chouJiang = () => import("@/views/user/chouJiang")
const merchantsDetail = () => import("@/views/user/merchantsList/merchantsDetail")

Vue.use(Router)
export default new Router({
	routes: [
		{ path: '/s1', component: s1,meta: { title: '商家入驻 ' }},
		{ path: '/s2', component: s2,meta: { title: '支付 ' }},
		{ path: '/s3', component: s3,meta: { title: '订单拆分 ' }},
		{ path: '/s4', component: s4,meta: { title: '我要反馈 ' }},
		{ path: '/s5', component: s5,meta: { title: '发表评价 ' }},
		{ path: '/s6', component: s6,meta: { title: '创客注册 ' }},
		{ path: '/totalRed', component: totalRed, meta: { title: '已结算分红' } },
		{ path: '/area', component: area, meta: { title: '选择城市' } },
		{ path: '/team', component: team, meta: { title: '团队人员' } },
		{ path: '/cDetail', component: cDetail, meta: { title: '分红提现记录' } },
		{ path: '/totalMoney', component: totalMoney, meta: { title: '总营业额' } },
		{ path: '/dHome', component: dHome, meta: { title: '创客登录' } },
		{ path: '/tHome', component: tHome, meta: { title: '创客登录' } },
		{ path: '/totalBuss', component: totalBuss, meta: { title: '店铺详情' } },
		{ path: '/regist', component: regist, meta: { title: '创客注册' } },
		{ path: '/send', component: send, meta: { title: '我要发货' } },
		{ path: '/search', component: search, meta: { title: '众奖联盟' } },
		{ path: '/addGoods', component: addGoods, meta: { title: '商品管理' } },
		{ path: '/cates', component: cates, meta: { title: '商品管理' } },
		{ path: '/goodsManage', component: goodsManage, meta: { title: '商品管理' } },
		{ path: '/bussDetail', component: bussDetail, meta: { title: '收入明细' } },
		{ path: '/psd', component: psd, meta: { title: '修改密码' } },
		{ path: '/bussSet', component: bussSet, meta: { title: '商家工作台' } },
		{ path: '/come', component: come, meta: { title: '商家入驻' } },
		{ path: '/split', component: split, meta: { title: '订单拆分' } },
		{ path: '/bussOrder', component: bussOrder, meta: { title: '订单管理' } },
		{ path: '/bussOrderDetail', component: bussOrderDetail, meta: { title: '订单详情' } },
		{ path: '/cards', component: cards, meta: { title: '商家入驻' } },
		{ path: '/workbench', component: workbench, meta: { title: '商家工作台' } },
		{ path: '/login', component: login, meta: { title: '商家登录' } },
		{ path: '/home', component: home, meta: { title: '众奖联盟' } },
		{ path: '/speak', component: speak, meta: { title: '发表评价' } },
		{ path: '/feedback', component: feedback, meta: { title: '我要反馈' } },
		{ path: '/success', component: success, meta: { title: '发表评价' } },
		{ path: '/words', component: words, meta: { title: '评价' } },
		{ path: '/orderDetail', component: orderDetail, meta: { title: '确定订单' } },
		{ path: '/goods', component: goods, meta: { title: '商品详情' } },
		{ path: '/carts', component: carts, meta: { title: '我的购物车' } },
		{ path: '/buy', component: buy, meta: { title: '购买商品' } },
		{ path: '/order', component: order, meta: { title: '我的订单' } },
		{ path: '/record', component: record, meta: { title: '消费记录' } },
		{ path: '/tiXian', component: tiXian, meta: { title: '提现' } },
		{ path: '/recharge', component: recharge, meta: { title: '充值' } },
		{ path: '/detail', component: detail, meta: { title: '余额明细' } },
		{ path: '/myMarchants', component: myMarchants, meta: { title: '收藏的商家' } },
		{ path: '/chouJiang', component: chouJiang, meta: { title: '抽奖奖励' } },
		{ path: '/wallet', component: wallet, meta: { title: '余额' } },
		{ path: '/mobile', component: mobile, meta: { title: '更换手机' } },
		{ path: '/setMobile', component: setMobile, meta: { title: '绑定手机' } },
		{ path: '/set', component: set, meta: { title: '设置' } },
		{ path: '/merchantsList', component: merchantsList, meta: { title: '商家列表' } },
		{ path: '/pay', component: pay, meta: { title: '商家支付' } },
		{ path: '/reward', component: reward, meta: { title: '抽奖' } },
		{ path: '/free', component: free, meta: { title: '我的免单' } },
		{ path: '/mine', component: mine, meta: { title: '我的' } },
		{ path: '/addressList', component: addressList, meta: { title: '管理地址' } },
		{ path: '/addressChange', component: addressChange, meta: { title: '管理地址' } },
		{ path: '/freeList', component: freeList, meta: { title: '消费过的商家' } },
		{ path: '/merchantsList/merchantsDetail', component: merchantsDetail, meta: { title: '商家详情' } },
	]
})
