<template>
  <div class="search">
    <header class="header">
      <div class="left">
        <van-icon name="search" class="iconSearch" size="18" />
        <input type="text" v-model="searchInputData" @input="changeInput" />
        <van-icon
          name="clear"
          class="iconClear"
          v-if="searchInputData"
          @click="clearSearchInputData"
          size="18"
        />
      </div>
      <div class="right" @click="toHome">取消</div>
    </header>
    <div v-if="!searchInputData.length">
      <div class="m-searchSuggestions" v-if="recommendList.hotKeywordVOList">
        <div class="title">{{title}}</div>
        <div class="list">
          <div
            class="listItem"
            :class="{active:item.highlight === 1}"
            v-for="(item,index) in recommendList.hotKeywordVOList"
            :key="index"
          >{{item.keyword}}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="searchAutoList">
        <div class="searchAutoItem" v-for="(item,index) in searchList" :key="index">
          <div class="text">{{item}}</div>
          <van-icon name="arrow" color="#333" size="18" />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getFindSearch, getSearchAutoComplete } from "../../axios";
import throttle from "lodash/throttle";
export default {
  name: "Search",
  data() {
    return {
      searchInputData: "",
      title: "热门搜索",
      recommendList: {},
      searchList: []
    };
  },
  components: {},
  mounted() {
    getFindSearch().then(value => {
      this.recommendList = value.data.data;
    });
  },
  methods: {
    // 清空搜索框
    clearSearchInputData() {
      this.searchInputData = "";
    },
    // input框改变事件

    changeInput: throttle(function() {
      let keywordPrefix = this.searchInputData;
      getSearchAutoComplete(keywordPrefix).then(value => {
        this.searchList = value.data.data;
      });
    }, 200),
    // 回到首页
    toHome() {
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style lang='less' scoped>
.search {
  height: 100vh;
  background-color: rgb(238, 238, 238);
  .header {
    height: 88px;
    padding: 0 30px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    .left {
      box-sizing: border-box;
      width: 604px;
      height: 56px;
      padding: 0 20px;
      background-color: rgb(244, 244, 244);
      display: flex;
      align-items: center;
      .iconSearch {
        margin-right: 16px;
      }
      input {
        width: 470px;
        height: 39px;
        border: 0;
        font-size: 24px;
        background-color: rgb(244, 244, 244);
      }
    }
    .right {
      font-size: 28px;
      height: 44px;
      line-height: 44px;
      margin-left: 20px;
    }
  }
  .m-searchSuggestions {
    box-sizing: border-box;
    height: 357px;
    margin: 0 0 20px;
    padding: 0 30px 30px;
    background-color: rgb(255, 255, 255);
    .title {
      height: 90px;
      line-height: 90px;
      color: #999;
      font-size: 28px;
    }
    .list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      // align-items: b;
      .listItem {
        font-size: 24px;
        border: 1px solid #333;
        padding: 5px 10px;
        height: 30px;
        line-height: 30px;
        margin-right: 20px;
        margin-bottom: 20px;
        &.active {
          border: 1px solid red;
          color: red;
        }
      }
    }
  }
  .searchAutoList {
    background-color: rgb(255, 255, 255);
    .searchAutoItem {
      height: 104px;
      line-height: 104px;
      margin: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(247, 247, 247);
      .text {
        font-size: 28px;
        color: #333;
      }
    }
  }
}
</style>