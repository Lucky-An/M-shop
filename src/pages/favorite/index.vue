<template>
  <div>
    <header class="header">
      <van-icon name="wap-home-o" size="26" @click="toHome" />
      <span>值得买</span>
      <van-icon name="search" size="26" class="search" @click="toSearch" />
      <van-icon name="shopping-cart-o" size="26" @click="toShopCart" />
    </header>
    <div class="m-swiperTab-container">
      <div class="m-swiperTab-title">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" class="title" alt />
        <span>严选好物，用心生活</span>
      </div>
      <!-- 轮播图包含块 -->
      <div class="m-swiperTab">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-if="firstNavList.length">
            <div class="item" v-for="item in firstNavList" :key="item.id">
              <img :src="item.picUrl" alt />
              <div class="mainText">{{item.mainTitle}}</div>
              <div class="subText">{{item.viceTitle}}</div>
            </div>
          </van-swipe-item>
          <van-swipe-item v-if="lastNavList.length">
            <div class="item" v-for="item in lastNavList" :key="item.id">
              <img :src="item.picUrl" alt />
              <div class="mainText">{{item.mainTitle}}</div>
              <div class="subText">{{item.viceTitle}}</div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="m-lookList">
      <!-- https://yanxuan.nosdn.127.net/7ac415ae340c9aaaf612ebae68b466b0.jpg?imageView&thumbnail=345y191.66666666666669&quality=95 -->
      <div class="column" v-if="evenWaterfallList.length">
        <div class="lookItem" v-for="item in evenWaterfallList" :key="item.topicId">
          <img :src="item.picUrl" alt />
          <div class="disc">{{item.title}}</div>
          <div class="userInfo">
            <img :src="item.avatar" alt />
            <div class="username">{{item.nickname}}</div>
            <van-icon name="eye-o" class="eyeIcon" size="16" />
            <div class="count">{{item.readCount}}</div>
          </div>
        </div>
      </div>
      <div class="column" v-if="oddWaterfallList.length">
        <div class="lookItem" v-for="item in oddWaterfallList" :key="item.topicId">
          <img :src="item.picUrl" alt />
          <div class="disc">{{item.title}}</div>
          <div class="userInfo">
            <img :src="item.avatar" alt />
            <div class="username">{{item.nickname}}</div>
            <van-icon name="eye-o" class="eyeIcon" size="16" />
            <div class="count">{{item.readCount}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getKnowNavWap, getFirstRecManual, getFindRecAuto } from "../../axios";
// import { scrollBottom } from "../../until/ScrollBottom";
export default {
  name: "favorite",
  data() {
    return {
      navList: [],
      firstNavList: [],
      lastNavList: [],
      waterfallList: [],
      oddWaterfallList: [],
      evenWaterfallList: [],
      page: 2,
      nextPageData: {}
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      let isBottom =
        this.getScrollHeight() + this.getWindowHeight() >=
        this.getDocumentHeight();
      if (isBottom) {
        this.scorllToBottom();
      }
    });
  },
  beforeMount() {
    getKnowNavWap().then(value => {
      this.navList = value.data.data.navList;
      this.firstNavList = this.navList.slice(0, 8);
      this.lastNavList = this.navList.slice(8);
    });
    getFirstRecManual().then(value => {
      let finallyList = [];

      value.data.data.forEach(result => {
        result.topics.forEach(da => {
          finallyList.push(da);
        });
      });
      this.waterfallList = finallyList;
      let oddList = [];
      // 偶数数组
      let evenList = [];
      finallyList.forEach((value, index) => {
        if (index % 2 === 1) {
          oddList.push(value);
        } else {
          evenList.push(value);
        }
      });
      this.oddWaterfallList = oddList;
      this.evenWaterfallList = evenList;
    });
  },
  mounted() {},
  components: {},
  methods: {
    // 获取可视区域高度
    getWindowHeight() {
      return document.documentElement.clientHeight;
    },
    // 获取滚动高度
    getScrollHeight() {
      return Math.max(
        document.documentElement.scrollTop,
        window.pageYOffset || 0
      );
    },
    // 文档高度
    getDocumentHeight() {
      return document.documentElement.offsetHeight;
    },
    // 触底事件触发后的逻辑
    scorllToBottom() {
      let obj = { page: this.page, size: 1 };
      getFindRecAuto(obj).then(value => {
        let newArray = value.data.data.result[0].topics;
        let waterfallList = this.waterfallList;
        this.waterfallList = waterfallList.concat(newArray);
      });
      //
      let finallyList = this.waterfallList;
      let oddList = [];
      // 偶数数组
      let evenList = [];
      finallyList.forEach((value, index) => {
        if (index % 2 === 1) {
          oddList.push(value);
        } else {
          evenList.push(value);
        }
      });
      this.oddWaterfallList = oddList;
      this.evenWaterfallList = evenList;

      //
      this.page = this.page + 1;
    },
    // 跳转到首页
    toHome() {
      this.$router.replace({ name: "Home" });
    },
    toSearch() {
      this.$router.replace({ name: "Search" });
    },
    toShopCart() {
      this.$router.replace({ name: "ShopCart" });
    }
  }
};
</script>

<style lang='less' scoped>
.header {
  // width: 100%;
  padding: 0 26px;
  height: 100px;
  // background: red;
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  line-height: 100px;
  align-items: center;
  border-bottom: 1px solid black;
  .search {
    margin-left: 100px;
  }
  span {
    margin-left: 170px;
  }
}
.m-swiperTab-container {
  height: 683px;
  width: 100%;
  position: relative;
  // https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png
  .m-swiperTab-title {
    height: 518px;
    background: url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png");
    background-size: 100% 518px;
    position: relative;
    .title {
      width: 130px;
      height: 70px;
      position: absolute;
      top: 50px;
      left: 20px;
    }
    span {
      font-size: 30px;
      color: #fff;
      position: absolute;
      top: 75px;
      left: 150px;
    }
  }
  .m-swiperTab {
    width: 710px;
    height: 540px;
    position: absolute;
    top: 140px;
    left: 20px;
    background: #fff;
    border-radius: 20px;
    .my-swipe {
      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        height: 530px;
        text-align: center;
        // background-color: #39a9ed;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: space-around;
        .item {
          width: 170px;
          img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }
          .mainText {
            height: 40px;
            color: #333;
            font-size: 28px;
            text-align: center;
          }
          .subText {
            height: 30px;
            color: #999;
            font-size: 24px;
            margin-top: 2px;
            text-align: center;
          }
        }
      }
    }
  }
}
.m-lookList {
  margin: 0 30px;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: rgb(238, 238, 238);
  .column {
    display: flex;
    flex-direction: column;
    width: 49%;
    margin-bottom: 100px;
    .lookItem {
      width: 345px;
      border-radius: 10px;
      background-color: rgb(252, 252, 252);
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
      img {
        width: 345px;
        height: auto;
        border-radius: 10px;
      }
      .disc {
        width: 345px;
        height: 50px;
        color: #333;
        font-size: 28px;
        line-height: 25px;
        overflow: hidden;
        // padding: 5px 10px;
        text-overflow: ellipsis;

        display: -webkit-box;

        -webkit-box-orient: vertical;

        -webkit-line-clamp: 2;
      }
      .userInfo {
        height: 89px;
        line-height: 89px;
        width: 343px;
        // margin-top: 60px;
        // margin-left: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 50px;
        }
        .username {
          height: 48px;
          width: 100px;
          line-height: 48px;
          font-size: 24px;
          color: #7f7f7f;
          overflow: hidden;
        }
        .eyeIcon {
          // margin-left: 60px;
        }
        .count {
          height: 32px;
          line-height: 32px;
          font-size: 24px;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>