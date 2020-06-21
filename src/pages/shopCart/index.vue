<template>
  <div class="shopCarContainer">
    <div class="header">
      <span class="title">购物车</span>
      <div class="right">
        <div class="Coupon">领券</div>
        <span>编辑</span>
      </div>
    </div>
    <ul class="desc">
      <li class="item">30天无忧退货</li>
      <li class="item">48小时快速退款</li>
      <li class="item">满99元免邮费</li>
    </ul>
    <div class="cartList">
      <div class="notShop">
        <img
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
          alt
        />
        <div>去添加点什么吧</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "ShopCar"
};
</script>

<style lang="less" scoped>
.shopCarContainer {
  .header {
    // width: 100%;
    height: 88px;
    background-color: #fff;
    padding: 0 30px;
    line-height: 88px;
    .title {
      font-size: 36px;
      float: left;
    }
    .right {
      float: right;
      margin-right: 50px;
      display: flex;
      .Coupon {
        width: 70px;
        height: 38px;
        background-color: salmon;
        line-height: 38px;
        margin-top: 25px;
        margin-right: 20px;
        text-align: center;
        color: #fff;
        position: relative;
        &::after,
        &::before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          top: 50%;
          transform: translateY(-50%) translateX(-2px);
        }
        &::before {
          right: -4px;
        }
      }
      span {
        font-size: 30px;
      }
    }
  }
  .desc {
    width: 100%;
    height: 70px;
    background-color: #eee;
    display: flex;
    line-height: 70px;
    justify-content: space-around;
  }
  .cartList {
    .notShop {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;
      font-size: 30px;
      color: #7f7f7f;
      img {
        width: 248px;
        height: 248px;
      }
    }
  }
}
</style>
