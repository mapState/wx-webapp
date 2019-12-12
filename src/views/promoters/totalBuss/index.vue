<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="list">
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="mid">
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="time">入驻时间：2018-10-05</div>
        </div>
      </div>
      <div class="item">
        <img src="@/assets/cover.png" class="upDown" />
        <div class="mid">
          <div class="name">肉蟹煲（湖滨银泰店）</div>
          <div class="time">入驻时间：2018-10-05</div>
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