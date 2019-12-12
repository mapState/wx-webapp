<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="person">
      <div>
        <img src="@/assets/cover.png"/>张三
      </div>
      <div>
        <div>
          112
          <div class="name">推广商家</div>
        </div>
        <div>
          112
          <div class="name">商家总营业额</div>
        </div>
        <div>
          112
          <div class="name">贡献金额</div>
        </div>
      </div>
    </div>
    <div class="person">
      <div>
        <img src="@/assets/cover.png"/>张三
      </div>
      <div>
        <div>
          112
          <div class="name">推广商家</div>
        </div>
        <div>
          112
          <div class="name">商家总营业额</div>
        </div>
        <div>
          112
          <div class="name">贡献金额</div>
        </div>
      </div>
    </div>
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
@import "./style/index.scss";
</style>
<style scoped>
</style>