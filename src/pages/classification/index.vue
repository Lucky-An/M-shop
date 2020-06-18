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
        <LeftScroll></LeftScroll>
      </div>
      <div class="right">
        <RightScroll></RightScroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftScroll from "./LeftScroll";
import RightScroll from "./RightScroll";
export default {
  name: "classification",
  data() {
    return {
      total: 33419
    };
  },
  components: { LeftScroll, RightScroll },
  mounted() {
    // this.initScroll();
  },
  methods: {}
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
    // .wrapper {
    //   overflow: hidden;
    //   height: calc(100vh - 280px);
    //   display: flex;
    //   flex-direction: column;
    //   .content {
    //     display: flex;
    //     flex-direction: column;
    //     li {
    //       width: 100%;
    //       height: 60px;
    //       display: inline-block;
    //       text-align: center;
    //       // position: relative;
    //     }
    //   }
    // }
  }
  .right {
    flex: 1;
    height: calc(100vh - 200px);
    padding: 40px 0;
    border-left: 2px solid rgb(237, 237, 237);
    box-sizing: border-box;
    // .wrapper {
    //   overflow: hidden;
    //   height: calc(100vh - 280px);
    //   display: flex;
    //   flex-direction: column;
    //   .content {
    //     display: flex;
    //     flex-direction: column;
    //     li {
    //       width: 100%;
    //       height: 60px;
    //       display: inline-block;
    //       text-align: center;
    //       // position: relative;
    //     }
    //   }
    // }
  }
  // background: red;
}
</style>