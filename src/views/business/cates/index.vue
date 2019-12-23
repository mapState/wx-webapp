<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)" />
      分类管理
    </div>
    <div class="cates">
      <!-- <div class="item">
        XXX分类
        <img src="@/assets/cha.png" />
      </div>-->
      <div
        class="item"
        v-for="(item,i) in cates"
        :key="i"
        @click="del(item.id)"
        :class="{active:item.id==cate}"
      >
        {{item.name}}
        <img src="@/assets/cha.png" />
      </div>
    </div>
    <div class="add" @click="addCate">+新增分类</div>
    <van-popup v-model="show">
      <div class="new">
        <div class="title">新增分类</div>
        <input type="text" placeholder="输入分类名称" v-model="typeName" />
        <div class="sure" @click="add">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { addGoodType, getAllGoodType, removeGoodType } from "@/api/bussiness";
import empty from "@/components/empty";
export default {
  components: {
    empty
  },
  data() {
    return {
      show: false,
      cate: "",
      typeName: "",
      cates: []
    };
  },
  methods: {
    getAllGoodType() {
      getAllGoodType().then(res => {
        this.cates = res.data;
      });
    },
    addCate(){
      this.typeName=''
      this.show=true
    },
    init() {
      this.getAllGoodType();
    },
    del(typeId) {
      removeGoodType({typeId}).then(res => {
        this.getAllGoodType();
        this.$toast({
          message: res.message
        });
      });
    },
    add() {
      if (this.typeName) {
        addGoodType({ typeName: this.typeName }).then(res => {
          this.show = false;
          this.getAllGoodType();
        });
      } else {
        this.$toast({
          message: "类名不能为空"
        });
      }
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
</style>