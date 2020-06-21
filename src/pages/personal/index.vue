<template>
  <div class="personalContainer">
    <div class="header">
      <div class="personal">
        <div class="avatar">
          <img src="https://yanxuan.nosdn.127.net/af28658c11743a7b8eb70875ef4215c6.jpg" alt />
        </div>
        <div class="tel">15232669627</div>
      </div>
      <div class="card">
        <div class="gift"></div>
        <div class="vipBox">
          <div class="vip"></div>
          <div class="vipdesc">
            <span class="pro">Pro会员</span>
            <span>立即试用 ></span>
          </div>
        </div>
      </div>
      <div class="header-desc">
        <span class="vipupdate">会员等级更新</span>
        <span>本期会员等级已更新，查看我的特权></span>
      </div>
    </div>
    <div class="asset">
      <div class="tt">我的资产</div>
      <ul class="assetList">
        <li class="assetItem">
          <div class="price">￥0</div>
          <div class="title">回馈金</div>
        </li>
        <li class="assetItem">
          <div class="price">0</div>
          <div class="title">回馈金</div>
        </li>
        <li class="assetItem">
          <div class="price">0</div>
          <div class="title">回馈金</div>
        </li>
        <li class="assetItem">
          <div class="price">￥0</div>
          <div class="title">回馈金</div>
        </li>
        <li class="assetItem">
          <div class="price">0</div>
          <div class="title">回馈金</div>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <ul class="list">
      <li class="item">
        <div>
          <van-icon size="30" name="orders-o" />
        </div>我的订单
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="calender-o" />
        </div>周六一起拼
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="logistics" />
        </div>售后服务
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="send-gift-o" />
        </div>邀请返利
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="bag-o" />
        </div>优先购
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="points" />
        </div>积分中心
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="gem-o" />
        </div>会员俱乐部
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="location-o" />
        </div>地址管理
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="warn-o" />
        </div>账号安全
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="service-o" />
        </div>帮助中心
      </li>
      <li class="item">
        <div>
          <van-icon size="30" name="records" />
        </div>反馈意见
      </li>
    </ul>
    <div class="logout">退出登录</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Personal"
};
</script>

<style lang="less" scoped>
.personalContainer {
  width: 100%;
  overflow: hidden;
  background-color: #f4f4f4;
  height: calc(100vh + 22vh);
  .header {
    // width: 100%;
    height: 320px;
    background-image: url("http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp");
    background-size: 100%;
    padding-left: 30px;
    position: relative;
    .personal {
      width: 510px;
      height: 270px;
      display: flex;
      align-items: center;
      .avatar {
        width: 142px;
        height: 142px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .tel {
        color: #fff;
        font-size: 36px;
        margin-left: 30px;
        margin-bottom: 20px;
      }
    }
    .card {
      width: 210px;
      height: 292px;
      position: absolute;
      top: 0;
      right: 0;
      .gift {
        width: 64px;
        height: 64px;
        background-image: url("../../static/images/personal/per.webp");
        background-size: 100%;
        background-position: 0 -200px;
        margin-left: 100px;
        margin-top: 20px;
      }
      .vipBox {
        width: 100%;
        height: 84px;
        background-color: #4f473e;
        border-radius: 50px 0 0 50px;
        display: flex;
        align-items: center;
        .vipdesc {
          display: flex;
          flex-direction: column;
          color: #f9e0c0;
          .pro {
            font-size: 26px;
          }
        }
        .vip {
          width: 56px;
          height: 56px;
          background-image: url("../../static/images/personal/per.webp");
          background-size: 100%;
          background-position: 0px -64px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
    .header-desc {
      margin-top: -30px;
      color: #fff;
      .vipupdate {
        display: inline-block;
        border: 1px solid #fff;
        font-size: 22px;
        margin-right: 20px;
      }
    }
  }
  .asset {
    // width: 100%;
    height: 285px;
    background-color: #fff;
    .tt {
      width: 100%;
      height: 105px;
      font-size: 30px;
      line-height: 105px;
      margin-left: 30px;
      border-bottom: 1px solid #f4f4f4;
    }
    .assetList {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      .assetItem {
        width: 159px;
        height: 100%;
        padding-top: 30px;
        margin-top: 20px;
        box-sizing: border-box;
        .price {
          font-size: 30px;
          font-weight: bold;
          height: 48px;
        }
        .title {
          font-size: 26px;
        }
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 20px;
    background-color: #fff;
    .icon {
      width: 50px;
      height: 50px;
      background-image: url("../../static/images/personal/per.webp");
      background-size: 100%;
    }
    .item {
      width: 33.33%;
      height: 180px;
      border-right: 1px solid rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      font-size: 26px;
      padding-top: 50px;
      &:nth-child(3) {
        border-right: none;
      }
      &:nth-child(6) {
        border-right: none;
      }
      &:nth-child(9) {
        border-right: none;
      }
      &:nth-child(10) {
        border-bottom: none;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .logout {
    width: 100%;
    height: 96px;
    background-color: #fff;
    text-align: center;
    line-height: 96px;
    font-size: 40px;
    margin-top: 40px;
  }
}
</style>
