<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="item" v-for="(item,i) in list" :key="i" @click="detailSet(item.id)">
      <div class="name">
        {{item.name}}
        <span>{{item.phone}}</span>
      </div>
      <div class="detail">
        <span v-show="item.moren">默认</span>
        {{item.regionAddress+' '+item.address}}
      </div>
      <div class="right upDown" @click.stop="toNext('/addressChange',item.id)">编辑</div>
    </div>

    <div class="sub" @click="toNext('/addressChange')">新增地址</div>
  </div>
</template>

<script>
import { addressList } from "@/api/user";
import { consoleDetail, detailSet } from "@/api/user";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      old: "",
      list: [],
      new: ""
    };
  },
  methods: {
    ...mapActions(["getAddressId"]),
    toNext(msg, id) {
      this.$router.push({
        path: msg,
        query: {
          id
        }
      });
    },
    getAddressList() {
      addressList().then(res => {
        this.list = res.data;
      });
    },
    detailSet(addressId) {
      if (this.$route.query.ids) {
        this.getAddressId(addressId);
        this.$router.go(-1);
      } else {
        detailSet({ addressId }).then(res => {
          this.$router.go(-1);
        });
      }
    },
    init() {
      this.getAddressList();
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
>>> .van-popup {
  background: transparent;
}
>>> .van-field__label {
  width: auto;
}
</style>