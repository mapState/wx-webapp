<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      购物车
      <span :class="{active:status}" @click="status=!status">{{status?'编辑':'完成'}}</span>
    </div>
    <div class="owner">
      <div class="upDown one">
        <van-checkbox
          v-model="checked"
          checked-color="#ffab3c"
          @click="result.length==list.length?$refs.checkboxGroup.toggleAll(false):$refs.checkboxGroup.toggleAll(true)"
        ></van-checkbox>
      </div>
      <img
        :src="url+detail.storeImageUrl"
        class="upDown two"
        @click.stop="toNext('/merchantsList/merchantsDetail',detail.id)"
      />
      <span @click.stop="toNext('/merchantsList/merchantsDetail',detail.id)">{{detail.name}}</span>
      <img
        src="@/assets/jian.png"
        class="upDown three"
        @click.stop="toNext('/merchantsList/merchantsDetail',detail.id)"
      />
    </div>
    <van-checkbox-group
      v-model="result"
      ref="checkboxGroup"
      checked-color="#ffab3c"
      @change="check"
    >
      <div class="item" v-for="(item,i) in list" :key="i">
        <div class="upDown one">
          <van-checkbox :name="item.id"></van-checkbox>
        </div>
        <img :src="url+item.image" class="upDown" />
        <div class="name">{{item.goodTitle}}</div>
        <div class="size">规格:{{item.name}}</div>
        <div class="money">￥{{item.money/100}}</div>
        <div class="right">
          <van-stepper v-model="item.count" @change="(e)=>cartAdd(e,item)" />
        </div>
      </div>
      <empty msg="暂无数据" v-show="list.length==0" />
      <div style="height:60px"></div>
    </van-checkbox-group>

    <div class="bottom">
      <div class="upDown one">
        <van-checkbox
          v-model="checked"
          checked-color="#ffab3c"
          @click="result.length==list.length?$refs.checkboxGroup.toggleAll(false):$refs.checkboxGroup.toggleAll(true)"
        ></van-checkbox>
      </div>全选
      <div class="mid upDown" v-show="status">
        <div class="total">
          合计:
          <span>￥24</span>
        </div>
        <div class="tip">不含运费</div>
      </div>
      <div class="right1" v-if="status" @click.stop="submit()">结算</div>
      <div class="right2" v-else :class="{right2A:result.length>0}" @click="cartDel">删除</div>
    </div>
  </div>
</template>

<script>
import { goodCart, getAllGoodType, updateCount, cartDel } from "@/api/user";
import { UPLOAD_DOMAIN } from "@/utils/const";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      url: UPLOAD_DOMAIN,
      checked: false,
      value: 1,
      result: [],
      status: true,
      list: [],
      detail: {},
      ids: ""
    };
  },
  methods: {
    toNext(msg, id) {
      console.log(this.$route.query.id)
      this.$router.push({
        path: msg,
        query: {
          id,
          
        }
      });
    },
    check(e) {
      if (e.length == this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    getList() {
      goodCart({ busiUserId: this.$route.query.id }).then(res => {
        this.list = res.data.list;
        this.detail = res.data.busiInfo;
      });
    },
    cartAdd(e, item) {
      updateCount({ cartId: item.id, count: item.count }).then(res => {});
    },
    cartDel() {
      cartDel([...this.result]).then(res => {
        this.getList();
      });
    },
    submit() {
      if (this.result.length > 0) {
        this.$router.push({
          path: "/orderDetail",
          query: {
            ids: JSON.stringify(this.result),
            busiUserId:this.$route.query.busiUserId
          }
        });
      } else {
        this.$toast({
          message: "请选择商品"
        });
      }
    },
    init() {
      this.getList();
    }
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
</style>
<style scoped>
>>> .van-checkbox__icon .van-icon {
  border-color: #999;
}
</style>