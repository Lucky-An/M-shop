<template>
  <div class="recommendContainer">
    <!-- 三个口号 -->
    <ul class="g-grow">
      <li class="item" v-for="(item,index) in policyDescList" :key="index">
        <van-icon name="gold-coin-o" size="14" color="#dd1a21" />
        <span>{{item.desc}}</span>
      </li>
    </ul>
    <!-- 10类货种 -->
    <ul class="productList" v-if="kingKongModule">
      <li class="productItem" v-for="(item,index) in kingKongModule.kingKongList" :key="index">
        <img :src="item.picUrl" alt />
        <div class="text">{{item.text}}</div>
      </li>
    </ul>
    <!-- 新人首单 -->
    <div class="firstOrder">
      <img
        src="https://yanxuan-item.nosdn.127.net/673ce075457f8823b3eb26cc64685557.png?imageView&thumbnail=168x0&quality=75"
        alt
      />
    </div>
    <!-- 收单推荐 -->
    <div class="firstOrderRecommend">
      <img
        src="https://yanxuan.nosdn.127.net/5f9be39b227adc0ef19c6ba65f411119.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt
      />
      <img
        src="https://yanxuan.nosdn.127.net/5f9be39b227adc0ef19c6ba65f411119.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt
      />
      <img
        src="https://yanxuan.nosdn.127.net/5f9be39b227adc0ef19c6ba65f411119.png?quality=75&type=webp&imageView&thumbnail=250x0"
        alt
      />
    </div>
    <!-- 新人专享礼 -->
    <div class="m-freshmanModule">
      <div class="moduleTitle">——新人专享礼——</div>
      <div class="moduleContent">
        <div class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
          </div>
        </div>
        <div class="right" v-if="indexActivityModule">
          <div class="top">
            <div class="title">{{indexActivityModule[0].title}}</div>
            <div class="subTitle">{{indexActivityModule[0].subTitle}}</div>
            <img :src="indexActivityModule[0].showPicUrl" alt="新人福利" />
          </div>
          <div class="bottom">
            <div class="title">{{indexActivityModule[1].title}}</div>
            <div class="tag">{{indexActivityModule[1].tag}}</div>
            <img
              src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div class="m-categoryHotSellModule">
      <div class="title">类目热销榜</div>
      <div class="content">
        <div class="twoList clearfix" v-if="categoryBeforeTwoList">
          <div class="left">
            <div class="text">{{categoryBeforeTwoList[0].categoryName}}</div>
            <div class="line"></div>
            <img :src="categoryBeforeTwoList[0].showPicUrl" alt />
          </div>
          <div class="right">
            <div class="text">{{categoryBeforeTwoList[1].categoryName}}</div>
            <div class="line"></div>
            <img :src="categoryBeforeTwoList[1].showPicUrl" alt />
          </div>
        </div>
        <div class="tenList">
          <div class="tenListItem" v-for="(item,index) in categoryAfterEightList" :key="index">
            <div class="text">{{item.categoryName}}</div>
            <img :src="item.showPicUrl" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 限时购 -->
    <div class="m-flashSaleModule">
      <div class="title clearfix">
        <div class="left">
          <div class="text">限时购</div>
          <div class="my-Countdown">
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
        <div class="right">
          <div class="text">更多</div>
          <van-icon name="arrow" size="22" />
        </div>
      </div>
      <div class="content">
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
        <div class="sixListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/30675175e43b251492efdbebd1ef34fe.png?quality=75&type=webp&imageView&thumbnail=216x216"
            alt
          />
          <div class="price">$17.9</div>
        </div>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="m-newItemModule">
      <div class="title clearfix">
        <div class="left">新品首发</div>
        <div class="right">
          <div class="text">更多</div>
          <van-icon name="arrow" size="22" />
        </div>
      </div>
      <div class="content">
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
        <div class="productListItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330"
            alt
          />
          <div class="text">体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30体积缩小约百分之30</div>
          <div class="price">￥1999</div>
          <div class="activity">不可用券红包</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
export default {
  name: "recommendCom",
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  computed: {
    ...mapGetters([
      "kingKongModule",
      "policyDescList",
      "indexActivityModule",
      "categoryHotSellModule",
      "categoryBeforeTwoList",
      "categoryAfterEightList"
    ])
  },
  components: {}
};
</script>

<style lang='less' scoped>
.recommendContainer {
  background-color: rgb(238, 238, 238);
  .g-grow {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
    }
  }
  .productList {
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-flow: wrap;
    background-color: rgb(255, 255, 255);
    .productItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        width: 110px;
        height: 110px;
      }
      .text {
        width: 110px;
        height: 36px;
        font-size: 24px;
        text-align: center;
      }
    }
  }
  .firstOrder {
    width: 100%;
    height: 240px;
    background-image: url("https://yanxuan.nosdn.127.net/e73d6d0b28648d1204623d28ea175447.gif?imageView&quality=75");
    background-size: 100% 100%;
    position: relative;
    img {
      height: 168px;
      width: 168px;
      position: absolute;
      top: 50px;
      left: 80px;
    }
  }
  .firstOrderRecommend {
    width: 100%;
    height: 240px;
    background-color: rgb(197, 0, 0);
    display: flex;
    justify-content: space-around;
    align-content: center;
    img {
      width: 231px;
      height: 220px;
    }
  }
  // 新人专享礼
  .m-freshmanModule {
    // width: 100%;
    // height: 100px;
    padding: 0 30px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    .moduleTitle {
      height: 90px;
      font-size: 32px;
      line-height: 90px;
      text-align: center;
    }
    .moduleContent {
      height: 438px;
      // background-color: red;
      .left {
        width: 343px;
        height: 434px;
        background-color: rgb(253, 232, 207);
        float: left;
        .name {
          font-size: 32px;
          padding: 30px 0 0 30px;
        }
        .imgWrap {
          text-align: center;
          margin-top: 50px;
          img {
            width: 258px;
            height: 257px;
          }
        }
      }
      .right {
        width: 343px;
        height: 438px;
        float: right;
        .top {
          width: 343px;
          height: 215px;
          background-color: rgb(255, 225, 210);
          .title {
            font-size: 32px;
            height: 48px;
            line-height: 48px;
            position: relative;
            top: 30px;
            left: 30px;
          }
          .subTitle {
            font-size: 24px;
            height: 36px;
            line-height: 36px;
            position: relative;
            top: 30px;
            left: 30px;
          }
          img {
            width: 200px;
            height: 200px;
            position: relative;
            top: -50px;
            left: 150px;
            // z-index: 1;
          }
        }
        .bottom {
          width: 343px;
          height: 215px;
          margin-top: 8px;
          background-color: rgb(255, 235, 194);
          position: relative;
          .title {
            height: 48px;
            line-height: 48px;
            font-size: 32px;
            position: absolute;
            left: 30px;
            top: 30px;
          }
          .tag {
            width: 120px;
            height: 32px;
            line-height: 32px;
            font-size: 22px;
            background-color: #cbb693;
            color: #fff;
            border-radius: 10px;
            position: absolute;
            left: 30px;
            top: 80px;
          }
          img {
            width: 200px;
            height: 200px;
            position: absolute;
            right: 0px;
            bottom: 0px;
          }
        }
      }
    }
  }
  // ! 类目热销榜
  .m-categoryHotSellModule {
    padding: 0 30px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    .title {
      width: 100%;
      font-size: 42px;
      height: 100px;
      line-height: 100px;
    }
    .content {
      .twoList {
        .left {
          width: 340px;
          height: 200px;
          float: left;
          background-color: rgb(251, 243, 228);
          position: relative;
          .text {
            width: 84px;
            height: 42px;
            line-height: 42px;
            font-size: 28px;
            position: absolute;
            left: 30px;
            top: 50px;
          }
          .line {
            width: 48px;
            height: 4px;
            background-color: black;
            position: absolute;
            left: 30px;
            top: 94px;
          }
          img {
            height: 200px;
            width: 200px;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
        .right {
          width: 340px;
          height: 200px;
          float: right;
          background-color: rgb(234, 239, 246);
          position: relative;
          .text {
            width: 84px;
            height: 42px;
            line-height: 42px;
            font-size: 28px;
            position: absolute;
            left: 30px;
            top: 50px;
          }
          .line {
            width: 48px;
            height: 4px;
            background-color: black;
            position: absolute;
            left: 30px;
            top: 94px;
          }
          img {
            height: 200px;
            width: 200px;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
      .tenList {
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;

        .tenListItem {
          width: 165px;
          height: 180px;
          text-align: center;
          background-color: rgb(245, 245, 245);
          margin-top: 10px;
          .text {
            width: 165px;
            height: 36px;
            font-size: 24px;
            margin-top: 10px;
            text-align: center;
          }
          img {
            height: 120px;
            width: 120px;
            margin-top: 10px;
          }
        }
      }
    }
  }
  // ! 限时购
  .m-flashSaleModule {
    padding: 0 30px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    .title {
      width: 100%;
      height: 100px;
      .left {
        .text {
          font-size: 32px;
          line-height: 100px;
          color: #333;
          float: left;
        }
        .my-Countdown {
          margin-left: 30px;
          height: 100px;
          // font-size: 40px;
          // line-height: 100px;
          // vertical-align: middle;
          float: left;
          display: flex;
          align-items: center;
          .colon {
            display: inline-block;
            margin: 0 4px;
            font-size: 32px;
            color: #ee0a24;
          }
          .block {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 32px;
            text-align: center;
            background-color: #000;
            border-radius: 10px;
          }
        }
      }
      .right {
        float: right;
        font-size: 32px;
        height: 100px;
        line-height: 100px;
        display: flex;
        align-items: center;
        .text {
          float: left;
        }
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .sixListItem {
        width: 216px;
        height: 300px;
        img {
          height: 216px;
          width: 216px;
          background-color: rgb(245, 245, 245);
        }
        .price {
          width: 216px;
          height: 42px;
          padding-left: 20px;
          font-size: 28px;
          line-height: 42px;
        }
      }
    }
  }
  // ! 新品首发
  .m-newItemModule {
    padding: 0 30px;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
    .title {
      width: 100%;
      height: 100px;
      font-size: 32px;
      .left {
        float: left;
        width: 128px;
        height: 100px;
        font-size: 32px;
        line-height: 100px;
      }
      .right {
        height: 100px;
        line-height: 100px;
        font-size: 32px;
        float: right;
        display: flex;
        align-items: center;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .productListItem {
        width: 216px;
        height: 398px;
        img {
          width: 216px;
          height: 216px;
          background-color: rgb(245, 245, 245);
        }
        .text {
          width: 216px;
          height: 72px;
          line-height: 36px;
          overflow: hidden;
          font-size: 24px;
          // 两行省略文本
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .price {
          width: 83px;
          height: 48px;
          line-height: 48px;
          font-size: 32px;
          color: #dd1a21;
        }
        .activity {
          display: inline-block;
          border: 2px solid #dd1a21;
          height: 30px;
          line-height: 30px;
          font-size: 24px;
          color: #dd1a21;
          padding: 0 8px;
          border-radius: 12px;
        }
      }
    }
  }
}
</style>