<template>
  <div>
    <div class="wrapper" ref="leftWrapper">
      <ul class="content">
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  name: "LeftScroll",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.initScroll();
  },
  methods: {
    // 滑屏
    initScroll() {
      this.$nextTick(() => {
        let navScroll = new BScroll(this.$refs.leftWrapper, {
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
    flex-direction: column;
    li {
      width: 100%;
      height: 60px;
      display: inline-block;
      text-align: center;
      // position: relative;
    }
  }
}
</style>