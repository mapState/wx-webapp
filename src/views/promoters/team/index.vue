<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="person" v-for="(item,i) in data" :key="i">
      <div>
        <img :src="url+item.image" />{{item.realName}}
      </div>
      <div>
        <div>
          {{item.total}}
          <div class="name">推广商家</div>
        </div>
        <div>
          {{item.money/100}}
          <div class="name">商家总营业额</div>
        </div>
        <div>
          {{item.giveTotal}}
          <div class="name">贡献金额</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groupList, updateImage } from "@/api/mak";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      url: UPLOAD_DOMAIN,
      data:[]
    };
  },
  methods: {
    groupList() {
      groupList().then(res=>{
        this.data=res.data
      })
    }
  },

  mounted() {
    this.groupList();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
</style>
<style scoped>
</style>