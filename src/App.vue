<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar class="thisTabBar" route active-color="#DD1A21" inactive-color="#666">
      <van-tabbar-item replace to="/home">
        <van-icon name="wap-home-o" size="22" />
        <div class="iconText">首页</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/classification">
        <van-icon name="qr" size="22" />
        <div class="iconText">分类</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/favorite">
        <van-icon name="photo-o" size="22" />
        <div class="iconText">值得买</div>
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopCart">
        <van-icon name="shopping-cart-o" size="22" />
        <div class="iconText">购物车</div>
      </van-tabbar-item>
      <van-tabbar-item class="thisTabbarItem" replace to="/personal">
        <van-icon name="user-circle-o" size="22" />
        <div class="iconText">个人</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scope>
* {
  margin: 0;
  padding: 0;
}
.thisTabBar {
  height: 98px;
  text-align: center;
}
.thisTabbarItem {
  // width: 20%;
  text-align: center;
}
.iconText {
  font-size: 24px;
}
</style>
