<template>
  <div v-wechat-title="$route.meta.title" class="container">
    <div class="nav">
      <img src="@/assets/left.png" class="upDown" @click="$router.go(-1)">
      编辑商品
      <div class="right">
        <span @click="add(1)">上架</span>
        <a @click="add(0)">下架</a>
      </div>
    </div>
    <div class="item" style="border-bottom:1px solid #ddd">
      <van-field v-model="formData.goodTitle" label="商品标题" placeholder="请输入商品标题"/>
    </div>
    <div class="item" style="background:#fff">
      <span>商品类别</span>
      <select v-model="formData.goodType">
        <option value="" disabled selected style="display:none;" class="font">请选择商品类别</option>
        <option :value="item.id" v-for="(item,i) in cates" :key="i">{{item.name}}</option>
      </select>
    </div>
    <div class="line"></div>
    <div class="photos">
      <div class="title">
        商品主图
        <span>最多4张</span>
      </div>
      <van-uploader
        v-model="formData.image"
        multiple
        :max-count="4"
        :after-read="(file)=>onRead(file,'image')"
        @delete="(file,i)=>del(file,i,'image')"
      />
    </div>
    <div class="photos">
      <div class="title">
        商品详情
        <span>选填</span>
      </div>
      <van-uploader
        v-model="formData.descImage"
        multiple
        :after-read="(file)=>onRead(file,'descImage')"
        @delete="(file,i)=>del(file,i,'image')"
      />
    </div>
    <div class="size" v-for="(item,i) in formData.list" :key="i">
      <div class="item">
        <van-field v-model="item.name" label="规格:" placeholder="请输入您的规格"/>
      </div>
      <div class="item money">
        <van-field v-model="item.money" label="规格价格:" placeholder="请输入您的规格价格" type="number"/>
      </div>
      <div class="item">
        <van-field v-model="item.stock" label="规格库存:" placeholder="请输入您的规格库存" type="number"/>
      </div>
      <div class="item photos" style="border:none">
        <div class="title">规格类型主图</div>
        <van-uploader :after-read="(file)=>onRead(file,'one',i)">
          <img :src="url+item.image" alt="" style="width:50px" v-if="item.image">
          <div class="upload" v-else>
            <van-icon name="plus"/>
          </div>
        </van-uploader>
      </div>
    </div>
    <div class="btm">
      <div class="btn" @click="addSize">+新增规格</div>
    </div>
  </div>
</template>

<script>
import { addGood, getAllGoodType, goodDetail } from "@/api/bussiness";
import { uploadImg } from "@/utils/upload";
import { UPLOAD_DOMAIN } from "@/utils/const";
export default {
  data() {
    return {
      show: false,
      url: UPLOAD_DOMAIN,
      cates: [],
      formData: {
        descImage: [],
        goodStatus: "",
        goodTitle: "",
        goodType: "",
        id: "",
        image: [],
        list: [
          {
            image: "",
            money: "",
            name: "",
            stock: "",
            id: ""
          }
        ]
      }
    };
  },
  methods: {
    async onRead(file, type, i) {
      if (type === "one") {
        let url = await uploadImg(file);
        this.formData.list[i].image = url;
      } else {
        let length = this.formData[type].length;
        if (Array.isArray(file)) {
          for (let i = 0; i < file.length; i++) {
            let url = await uploadImg(file[i]);
            this.formData[type][length - 2].url = url;
            length++;
            
          }
        } else {
          let url = await uploadImg(file);
          this.formData[type][this.formData[type].length - 1].url = url;
        }
      }
    },
    async del(file, i, type) {
      console.log(this.formData[type])
      this.formData[type].splice(i.index, 1);
      
    },
    addSize() {
      this.formData.list.push({
        image: "",
        money: "",
        name: "",
        stock: "",
        id: ""
      });
    },
    add(t) {
      let arr = [],
        arr2 = [];
      for (let i = 0; i < this.formData.descImage.length; i++) {
        try {
          arr.push(this.formData.descImage[i].url.replace(UPLOAD_DOMAIN, ""));
        } catch (error) {}
      }
      console.log(arr);
      for (let i = 0; i < this.formData.image.length; i++) {
        try {
          arr2.push(this.formData.image[i].url.replace(UPLOAD_DOMAIN, ""));
        } catch (error) {}
      }
      let obj = { ...this.formData };
      obj.image = arr2.toString();
      obj.descImage = arr.toString();
      obj.goodStatus = t;
      let flag = true;
      for (let i = 0; i < obj.list.length; i++) {
        obj.list[i].money = obj.list[i].money * 100;
      }

      console.log(obj);
      if (!obj.goodTitle || !obj.image || !obj.descImage || !obj.goodType) {
        flag = false;
      }
      for (let i = 0; i < obj.list.length; i++) {
        if (
          !obj.list[i].image ||
          !obj.list[i].stock ||
          !obj.list[i].name ||
          !obj.list[i].money
        ) {
          flag = false;
        }
      }

      if (flag) {
        if (t) {
          this.$dialog
            .confirm({
              title: "是否上架"
            })
            .then(() => {
              addGood(obj).then(res => {
                this.$toast({
                  message: res.message
                });
                this.$router.push({
                  path: "/goodsManage"
                });
              });
            })
            .catch(() => {
              // on cancel
            });
        } else {
          addGood(obj).then(res => {
            this.$toast({
              message: res.message
            });
            this.$router.push({
              path: "/goodsManage"
            });
          });
        }
      } else {
        this.$toast({
          message: "请完善商品信息"
        });
      }
    },
    init() {
      getAllGoodType().then(res => {
        this.cates = res.data;
      });
      if (this.$route.query.id) {
        goodDetail({ goodId: this.$route.query.id }).then(res => {
          try {
            let arr1 = res.data.descImage.split(",");
            let arr11 = [];
            for (let i = 0; i < arr1.length; i++) {
              arr11.push({ url: UPLOAD_DOMAIN + arr1[i], isImage: true });
            }
            console.log(arr11)
            let arr2 = res.data.image.split(",");
            let arr22 = [];
            for (let i = 0; i < arr2.length; i++) {
              arr22.push({ url: UPLOAD_DOMAIN + arr2[i], isImage: true });
            }
            this.formData = { ...res.data };
            this.formData.descImage = arr11;
            for (let i = 0; i < this.formData.list.length; i++) {
              this.formData.list[i].money = this.formData.list[i].money / 100;
            }
            this.formData.image = arr22;
            console.log(this.formData);
          } catch (error) {}
        });
      }
    }
  },

  mounted() {
    console.log(this);
    this.init();
  }
};
</script>
<style scoped lang="scss">
@import "./style/index.scss";
.item {
  span {
    line-height: 45px;
    font-size: 14px;
    margin-left: 16px;
    margin-right: 5px;
  }
}
.font {
  color: #666;
}
</style>
<style scoped>
select {
  border: none;
  outline: none;
  height: 45px;
  width: 70%;
  background: transparent;
}
>>> .van-popup {
  background: transparent;
}
>>> .van-uploader__upload {
  width: 55px;
  height: 55px;
  background: rgba(242, 242, 242, 1);
  border-radius: 5px;
  border: none;
}
>>> .van-uploader__preview-image {
  width: 55px;
  height: 55px;
  margin-right: 10px;
}
>>> .van-uploader__preview-delete {
  color: #ff3b30;
  right: 0px;
}
>>> .van-field__label {
  width: auto;
  font-weight: 600;
  color: #000;
  margin-right: 10px;
}
.money >>> .van-field__control {
  color: #ff3b30;
}
</style>