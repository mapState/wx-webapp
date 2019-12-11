<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="tabbar">
      <van-tabbar v-model="nav" active-color="#FF3B30" inactive-color="#999">
        <van-tabbar-item to="/workbench">
          <span>工作台</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[0].active : icon[0].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/bussOrder">
          <span>订单管理</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[1].active : icon[1].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/goodsManage">
          <span>商品管理</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[2].active : icon[2].inactive"
          />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      icon: [
        {
          active: "http://q0y16l1rk.bkt.clouddn.com/FvN7Uvdh9sIl2u3072xnAG_SnUoW",
          inactive: "http://q0y16l1rk.bkt.clouddn.com/Fq0o0pK2V9MYX-5TGvqGSU5lDV4h"
        },
        {
          active: "http://q0y16l1rk.bkt.clouddn.com/Fm5UebUpM7MAEksFvuuvfPClcRBx",
          inactive: "http://q0y16l1rk.bkt.clouddn.com/FuyQ_cGQH8gh8npdvLJLAV4OmeRG"
        },
        {
          active: "http://q0y16l1rk.bkt.clouddn.com/FjRAwXXIE3U3AwbUgCwbwujhrgZw",
          inactive: "http://q0y16l1rk.bkt.clouddn.com/FjRAwXXIE3U3AwbUgCwbwujhrgZw"
        }
      ],
      nav:this.active
    };
  },
  methods: {
    init() {}
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped>
>>> .van-tabbar {
  border-top: 1px solid #ddd;
}
.tabbar {
  height: 50px;
}
</style>