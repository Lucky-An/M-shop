<template>
  <div>
    <!-- 头部 -->
    <header>
      <img src="../../static/images/logo.png" alt="网易严选" />
      <div class="bumInput">
        <van-icon name="search" />
        搜索商品共{{allCount}}款好物
      </div>
      <div class="loginBtn">登陆</div>
    </header>
    <!-- 滑屏导航 -->
    <div class="scrollView">
      <div class="wrapper" ref="wrapper">
        <ul class="content" v-if="kingKongModule">
          <li :class="{actived:isActive===0}" @click="changeActiveIndex(0)">推荐</li>
          <li
            v-for="(item,index) in kingKongModule.kingKongList"
            :class="{actived:isActive===index+1}"
            @click="changeActiveIndex(index+1)"
            :key="index"
          >{{item.text}}</li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
      <div class="down">
        <van-icon name="arrow-down" @click="showNavPopUp" />
        <van-popup
          v-model="NavPopUpShow"
          class="customizePopUp"
          overlay-class="zhezhao"
          position="top"
          :style="{ height: '30%' }"
        >内容</van-popup>
      </div>
    </div>
    <!-- 主要内容区域 -->
    <div class="main">
      <div class="mainScroll" ref="mainScroll">
        <ul class="content">
          <li class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img
                  src="http://yanxuan-miaobi.nos-jd.163yun.com/1486002_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                  alt
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://yanxuan-miaobi.nos-jd.163yun.com/1486002_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                  alt
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://yanxuan-miaobi.nos-jd.163yun.com/1486002_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                  alt
                />
              </van-swipe-item>
              <van-swipe-item>
                <img
                  src="http://yanxuan-miaobi.nos-jd.163yun.com/1486002_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                  alt
                />
              </van-swipe-item>
            </van-swipe>
          </li>
          <li v-if="isRecommend">
            <RecommendCom></RecommendCom>
          </li>
          <li v-else>
            <NavOther></NavOther>
          </li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import RecommendCom from "../../components/recommendComponent";
import NavOther from "../../components/navOther";
import { getIndexData } from "../../axios/index";
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      allCount: 33487,
      NavPopUpShow: false,
      isRecommend: true,
      isActive: 0
    };
  },
  computed: {
    ...mapGetters(["kingKongModule"])
  },
  components: {
    RecommendCom,
    NavOther
  },
  beforeMount() {
    this.initScroll();
  },
  mounted() {
    this.$store.dispatch("getHomeData");

    console.log(this.kingKongModule);
  },

  methods: {
    // 滑屏
    initScroll() {
      this.$nextTick(() => {
        let navScroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX: true
        });
        let mainScroll = new BScroll(this.$refs.mainScroll, {
          click: true,
          scrollY: true,
          bounce: false
        });
      });
    },
    // 导航下拉事件   弹出层展现
    showNavPopUp() {
      console.log("弹出层出现了");
      this.NavPopUpShow = true;
    },
    // 改变nav选中index
    changeActiveIndex(index) {
      this.isActive = index;
      // 修改子组件显示状态
      if (index === 0) {
        this.isRecommend = true;
      } else {
        this.isRecommend = false;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.actived::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #dd1a21;
}
header {
  width: 100%;
  height: 87.97px;
  // background: red;
  // padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 138px;
    height: 40px;
  }
  .bumInput {
    width: 442px;
    height: 56px;
    border-radius: 23px;
    background: #ededed;
    color: #666;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginBtn {
    width: 74px;
    height: 40px;
    border: 1px solid #dd1a21; /*px*/
    color: #dd1a21;
    text-align: center;
    border-radius: 23px;
  }
}
.scrollView {
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 28px;
  .wrapper {
    overflow: hidden;
    display: flex;
    flex: 1;
    .content {
      white-space: nowrap;
      display: flex;
      li {
        width: 144px;
        height: 60px;
        display: inline-block;
        text-align: center;
        position: relative;
      }
    }
  }
  .down {
    height: 60px;
    width: 100px;
    text-align: center;
    font-size: 40px;
    .customizePopUp {
      margin: 80px 0;
    }
    .zhezhao {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
.main {
  background-color: rgb(238, 238, 238);
  .mainScroll {
    overflow: hidden;
    height: calc(100vh - 260px);
    display: flex;
    flex-direction: column;
    .content {
      display: flex;
      flex-direction: column;
      .swiper {
        width: 100%;
        // height: 60px;
        .my-swipe {
          height: 350px;
          .van-swipe-item {
            height: 350px;
            img {
              height: 350px;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>