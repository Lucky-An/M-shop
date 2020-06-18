<template>
  <div>
    <div class="wrapper" ref="rightWrapper">
      <ul class="content">
        <!-- <li>123</li> -->
        <img :src="currentList.imgUrl" alt />
        <div class="productItem" v-for="item in currentList.subCateList" :key="item.id">
          <img :src="item.wapBannerUrl" alt />
          <div class="text">{{item.name}}</div>
        </div>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  name: "RightScroll",
  data() {
    return {
      currentList: {}
    };
  },
  components: {},
  props: ["productList"],
  mounted() {},
  watch: {
    productList: {
      handler: function(val) {
        this.initScroll();
        this.currentList = this.productList[0];
      },
      deep: true
    },
    $route: {
      handler: function(val, oldvalue) {
        console.log("首次加载");
        if (this.$route.query.id) {
          let id = this.$route.query.id;
          let index = this.productList.findIndex(value => value.id === id);
          this.currentList = this.productList[index];
        }
      }
    }
  },
  methods: {
    // 滑屏
    initScroll() {
      this.$nextTick(() => {
        let navScroll = new BScroll(this.$refs.rightWrapper, {
          click: true,
          scrollY: true
        });
      });
    }
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  overflow: hidden;
  height: calc(100vh - 280px);
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 528px;
      height: 192px;
      margin: 20px auto;
    }
    .productItem {
      width: 150px;
      height: 216px;
      img {
        display: block;
        width: 144px;
        height: 144px;
      }
      .text {
        text-align: center;
      }
    }
    &:last-child::after {
      content: "";
      height: 1px;
      width: 150px;
      display: block;
    }
    // li {
    //   width: 100%;
    //   height: 60px;
    //   display: inline-block;
    //   text-align: center;
    //   // position: relative;
    // }
  }
}
</style>