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
        <van-tabbar-item to="/roomOrder">
          <span>店内消费</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[2].active : icon[2].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/goodsManage">
          <span>商品管理</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[3].active : icon[3].inactive"
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
          active: "http://cdn.pike8.top/FvN7Uvdh9sIl2u3072xnAG_SnUoW",
          inactive: "http://cdn.pike8.top/Fq0o0pK2V9MYX-5TGvqGSU5lDV4h"
        },
        {
          active: "http://cdn.pike8.top/Fm5UebUpM7MAEksFvuuvfPClcRBx",
          inactive: "http://cdn.pike8.top/FuyQ_cGQH8gh8npdvLJLAV4OmeRG"
        },
        {
          active: "http://cdn.pike8.top/FoGb_kBwfZX72V4Hs7k91XFICVDH",
          inactive: "http://cdn.pike8.top/Fng5F1icHUZAio4_D8lcpINW8Nm-"
        },
        {
          active: "http://cdn.pike8.top/FjRAwXXIE3U3AwbUgCwbwujhrgZw",
          inactive: "http://cdn.pike8.top/FjRAwXXIE3U3AwbUgCwbwujhrgZw"
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