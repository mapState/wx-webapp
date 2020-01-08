<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="tip">*请输入您要反馈的问题，我们将尽快为您处理</div>
    <div class="text">
      <van-cell-group>
        <van-field v-model="message" rows="5" autosize type="textarea" placeholder="请输入留言" />
      </van-cell-group>
    </div>
    <div class="btn" @click="feedback">提交</div>
  </div>
</template>

<script>
import { feedback } from "@/api/user";
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    feedback() {
      feedback({ content: this.message }).then(res => {
        this.$toast({
          message: res.message
        });
      });
    },
    init() {}
  },

  mounted() {
    this.init();
  }
};
</script>
<style scoped lang="scss">
.tip {
  padding: 0 16px;
  line-height: 45px;
  font-size: 12px;
  color: rgba(255, 59, 48, 1);
  border-top: 1px solid #ddd;
}
.text {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 5px;
  padding: 20px 15px;
  width: 340px;
  margin: 0 auto;
}
.btn {
  width: 290px;
  line-height: 44px;
  background: rgba(231, 203, 155, 1);
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  position: fixed;
  bottom: 62px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<style scoped>
>>> .van-cell {
  padding: 0;
}
>>> .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
</style>