<template>
  <div>
    <div class="productListItem">
      <div class="title">口碑好物</div>
      <div class="subTitle">口碑好物</div>
      <div class="list">
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
export default {
  name: "productItemInfo",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
.productListItem {
  padding: 0 10px;
  margin-top: 20px;
  // width: 100%;
  background-color: rgb(255, 255, 255);
  .title {
    width: 100%;
    height: 32px;
    line-height: 32px;
    font-size: 32px;
    text-align: center;
    padding-top: 30px;
    color: #333333;
  }
  .subTitle {
    width: 100%;
    height: 26px;
    line-height: 26px;
    font-size: 15px;
    text-align: center;
    // margin: 20px 0;
    padding: 10px 0;
    color: #999;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .productListItem {
      width: 340px;
      height: 614px;
      img {
        width: 340px;
        height: 340px;
        background-color: rgb(245, 245, 245);
      }
      .text {
        width: 340pxpx;
        height: 78px;
        line-height: 39px;
        overflow: hidden;
        font-size: 28px;
        // 两行省略文本
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .price {
        width: 340px;
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
        font-size: 18px;
        color: #dd1a21;
        padding: 0 8px;
        border-radius: 12px;
      }
    }
  }
}
</style>