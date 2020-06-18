<template>
  <div>
    <div class="wrapper" ref="leftWrapper">
      <!-- <ul class="content" v-if="navList.length"> -->
      <ul class="content" @click="changeActivedId">
        <li
          v-for="item in navList"
          :class="{actived:item.id===activeId}"
          :data-id="item.id"
          :key="item.id"
        >{{item.name}}</li>
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
    return {
      activeId: 0
    };
  },
  components: {},
  watch: {
    navList: {
      handler: function() {
        this.initScroll();
        this.activeId = this.navList[0].id;
      },
      deep: true
    }
  },
  props: ["navList"],
  mounted() {},
  methods: {
    // 滑屏
    initScroll() {
      this.$nextTick(() => {
        let navScroll = new BScroll(this.$refs.leftWrapper, {
          click: true,
          scrollY: true
        });
      });
    },
    // 点击列表数据触发
    changeActivedId(event) {
      if (event.target.dataset.id) {
        this.activeId = event.target.dataset.id * 1;
        this.$router.replace({
          path: "/classification",
          query: { id: this.activeId }
        });
      }
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
      height: 50px;
      line-height: 50px;
      font-size: 28px;
      display: inline-block;
      text-align: center;
      position: relative;
      margin: 30px 0;
      &:last-child {
        margin-bottom: 300px;
      }
    }
  }
}
.actived {
  color: #ab2b2b;
}
.actived::after {
  content: "";
  display: block;
  width: 4px;
  height: 100%;
  background: #ab2b2b;
  position: absolute;
  left: 0;
  top: 0;
}
</style>