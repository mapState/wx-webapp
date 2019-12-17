<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="tabbar">
      <van-tabbar v-model="nav" active-color="#FF3B30" inactive-color="#999">
        <van-tabbar-item to="/home">
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[0].active : icon[0].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/reward">
          <span>抽奖</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[1].active : icon[1].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/free">
          <span>免单</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon[2].active : icon[2].inactive"
          />
        </van-tabbar-item>
        <van-tabbar-item to="/mine">
          <span>我的</span>
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
          active: "http://cdn.pike8.top/Fqzd5sV7vy8pLUovJv9xIW7G5Mkk",
          inactive: "http://cdn.pike8.top/FghkEfI0np6jTKzXtBL49RcSv22w"
        },
        {
          active: "http://cdn.pike8.top/FkaUskcUdSOaPY-71JVtoRJYGoNS",
          inactive: "http://cdn.pike8.top/FkLnMwYADSR1dFNAt-G01XwWkAR_"
        },
        {
          active: "http://cdn.pike8.top/Fo5M88hHWQBf5SXv_b77kwMldLjZ",
          inactive: "http://cdn.pike8.top/Fmadj8cxXMCcFxF_n3Sg8BPTyCAH"
        },
        {
          active: "http://cdn.pike8.top/FvJuZIG6EpUU66dAo-Or_wrFgbfB",
          inactive: "http://cdn.pike8.top/FkPM8Pr7KsE3_dFsBYQvv1JTPnA2"
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