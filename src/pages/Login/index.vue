<template>
  <div class="login">
    <header class="header">
      <van-icon name="wap-home-o" size="26" @click="toHome" />
      <span>网易严选</span>
      <van-icon name="search" size="26" class="search" @click="toSearch" />
      <van-icon name="shopping-cart-o" size="26" @click="toShopCart" />
    </header>
    <div v-if="!loginMethod">
      <div class="logoWrap">
        <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
      </div>
      <div class="btnWrap">
        <div class="btnPhone">
          <div class="container">
            <van-icon name="phone-o" size="22" color="#ffffff" />
            <div class="text" @click="changeLoginMethod('phone')">手机号快捷登录</div>
          </div>
        </div>
        <div class="btnEmail">
          <div class="container">
            <van-icon name="envelop-o" size="22" color="#dd1a21" />
            <div class="text">邮箱快捷登录</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="phoneLogin">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
        </div>
        <div class="m-cnt">
          <input class="phoneNumber" v-model="phoneNumber" placeholder="请输入你的手机号" type="text" />
          <div class="captcha">
            <input class="captchaNumber" v-model="captchaNumber" placeholder="请输入验证码" type="text" />
            <div class="getBtn">获取验证码</div>
          </div>
          <div class="loginRedBtn" @click="logintoWangYi">登录</div>
          <div class="termsOfService">
            <input type="checkbox" v-model="isAgree" class="check" name id />
            <div class="text">
              <span>我同意</span>
              <span class="blue">《服务条款》</span>
              <span>和</span>
              <span class="blue">《网易隐私政策》</span>
            </div>
          </div>
          <div class="otherLogin" @click="changeLoginMethod('')">其他登录方式></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Notify } from "vant";
export default {
  name: "Login",
  data() {
    return {
      loginMethod: "",
      phoneNumber: "",
      captchaNumber: "",
      isAgree: ""
    };
  },
  components: {},
  methods: {
    // 切换登录方式
    changeLoginMethod(value) {
      this.loginMethod = value;
    },
    // 登录按钮触发
    logintoWangYi() {
      if (!this.isAgree) {
        Notify("请同意用户条款");
        return;
        // !(/^1[3456789]\d{9}$/.test(phone))
      } else if (!/^1[3456789]\d{9}$/.test(this.phoneNumber)) {
        Notify("请输入正确的手机号码");
        return;
      } else if (!/^\d{6}$/.test(this.captchaNumber)) {
        Notify("验证码格式不正确");
      } else {
        // Notify("你他娘终于输入正确了");
        localStorage.setItem("phone", this.phoneNumber);
        this.$router.replace({ name: "Personal" });
        // let phone = localStorage.getItem("phone");
        // console.log(phone);
      }
    },
    toHome() {
      this.$router.replace("/home");
    },
    toSearch() {
      this.$router.replace("/search");
    },
    toShopCart() {
      this.$router.replace({ name: "ShopCart" });
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  background-color: rgb(241, 245, 244);
  height: calc(100vh);
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
    background-color: rgb(250, 250, 250);
    border-bottom: 1px solid black;
    .search {
      margin-left: 100px;
    }
    span {
      margin-left: 170px;
    }
  }
  .logoWrap {
    height: 482px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 268px;
      height: 90px;
    }
  }
  .btnWrap {
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    .btnPhone {
      width: 670px;
      height: 94px;
      background-color: #dd1a21;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          font-size: 26px;
          color: #fff;
        }
      }
    }
    .btnEmail {
      width: 670px;
      height: 94px;
      //   background-color: #fff;
      box-sizing: border-box;
      border: 1px solid #dd1a21;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          font-size: 26px;
          color: #dd1a21;
        }
      }
    }
  }
  .phoneLogin {
    height: calc(100vh - 101px);
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    .logo {
      height: 90px;
      margin-top: 56px;
      overflow: hidden;
      img {
        display: block;
        width: 268px;
        height: 90px;
        margin: 0 auto;
      }
    }
    .m-cnt {
      padding: 0 20px;
      text-align: center;
      margin-top: 100px;
      .phoneNumber {
        width: 670px;
        height: 92px;
        border: 0;
        font-size: 32px;
        border-bottom: 1px solid #333;
      }
      .captcha {
        width: 670px;
        height: 92px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        border: 0;
        font-size: 32px;
        border-bottom: 1px solid #333;
        .captchaNumber {
          width: 380px;
          height: 92px;
          border: 0;
        }
        .getBtn {
          width: 164px;
          height: 54px;
          line-height: 54px;
          border-radius: 20px;
          border: 0.5px solid #333;
        }
      }
      .loginRedBtn {
        width: 670px;
        height: 92px;
        margin-left: 20px;
        background-color: rgb(246, 0, 0);
        color: rgb(255, 255, 255);
        line-height: 92px;
        text-align: center;
        font-size: 36px;
        margin-top: 100px;
      }
      .termsOfService {
        width: 670px;
        height: 92px;
        margin-left: 20px;
        line-height: 92px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .check {
          margin-right: 20px;
        }
        .blue {
          color: royalblue;
        }
      }
      .otherLogin {
        text-align: center;
        font-size: 36px;
        margin-top: 40px;
      }
    }
  }
}
</style>