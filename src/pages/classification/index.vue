<template>
  <div>
    <!-- 头部按钮 -->
    <header class="header">
      <div class="bumInput">
        <van-icon name="search" size="22" />
        <span>搜索商品，共{{total}}款好物</span>
      </div>
    </header>
    <!-- 主要内容区域 -->
    <div class="main">
      <div class="left">
        <LeftScroll :navList="navList"></LeftScroll>
      </div>
      <div class="right">
        <RightScroll :productList="productList"></RightScroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftScroll from "./LeftScroll";
import RightScroll from "./RightScroll";
import { getClassificationData } from "../../axios/index";
export default {
  name: "classification",
  data() {
    return {
      total: 33419,
      productList: []
    };
  },
  computed: {
    navList: function() {
      let result = [];
      if (this.productList.length) {
        this.productList.forEach(item => {
          let name = item.name;
          let id = item.id;
          let obj = { name, id };
          result.push(obj);
        });
      }
      return result;
    }
  },
  components: { LeftScroll, RightScroll },
  mounted() {
    getClassificationData().then(value => {
      this.productList = value.data;
    });
  },
  methods: {
    // 请求数据
    // setClassification() {
    //   let result = {};
    //   let getInitData = async () => {
    //     result = await getClassificationData();
    //     console.log("里面的");
    //     console.log(result);
    //   };
    //   getInitData();
    //   console.log("外边的");
    //   console.log(result);
    //   return result;
    // }
  }
};
</script>

<style lang='less' scoped>
.header {
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(237, 237, 237);
  // box-sizing: border-box;
  .bumInput {
    display: flex;
    width: 690px;
    height: 56px;
    line-height: 56px;
    background: rgb(237, 237, 237);
    border-radius: 10px;
    font-size: 28px;
    align-items: center;
    justify-content: center;
  }
}
.main {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: space-between;
  .left {
    width: 162px;
    height: calc(100vh - 200px);
    padding: 40px 0;
    box-sizing: border-box;
  }
  .right {
    flex: 1;
    height: calc(100vh - 200px);
    padding: 40px 0;
    border-left: 2px solid rgb(237, 237, 237);
    box-sizing: border-box;
  }
}
</style>