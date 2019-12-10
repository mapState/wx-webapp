<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <img src="@/assets/succ.png" />
    <div>发表成功</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    init() {}
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
img {
  display: block;
  width: 70px;
  margin: 0 auto;
  padding-top: 80px;
  margin-bottom: 23px;
}
div {
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  text-align: center
}
</style>
<style scoped>
</style>