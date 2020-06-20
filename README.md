# m-shop说明书

1. 配置移动端适配lib-flexible`自动适应屏幕大小`px2rem-loader  `解决了px转化rem麻烦的问题` 

   ```shell
   npm install px2rem-loader  lib-flexible --save 
   ```

   `vue.config.js`

   ```javascript
   const px2rem = require('postcss-px2rem')
   
   const postcss = px2rem({
     remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
   })
   
   module.exports = {
     css: {
       loaderOptions: {
         postcss: {
           plugins: [
             postcss
           ]
         }
       }
     }
   }
   ```

   `main.js`

   ```javascript
   import 'lib-flexible/flexible'
   ```

2. 配置less

   ```shell
   npm install less less-loader --save-dev
   ```

3. 配置vue-router

   `npm install vue-router`

4. 配置Vant

   `npm i vant -S`

   实现按需引入

   `tabBar`

5. 开始干首页

   1. 引入`npm install better-scroll --save`

   2. 在需要使用better-scroll的界面

      **需要给ul的父元素高度和overflow：hidden,给ul和ul的父元素都需要给display：flex，ul需要white-space: nowrap，li元素需要inline-block**

      ```html
          <div class="wrapper" ref="wrapper">
            <ul class="content">
              <li>推荐</li>
              <li>推荐</li>
            </ul>
            <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
          </div>
      ```

      ```javascript
        mounted() {
          this.initScroll();
        },
        methods: {
          initScroll() {
            this.$nextTick(() => {
              let navScroll = new BScroll(this.$refs.wrapper, {
                click: true,
                scrollX: true
              });
            });
          }
        }
      ```

      ```less
      .wrapper {
        overflow: hidden;
        display: flex;
        width: 80%;
        .content {
          white-space: nowrap;
          display: flex;
          li {
            display: inline-block;
            margin: 0 20px;
          }
        }
      }
      ```

   3. 关闭eslint检查

      `vue.config.js`

      ```javascript
      lintOnSave: false,
      ```

   4. 引入弹出层

   5. 引入Swipe, SwipeItem

   6. 引入倒计时组件CountDown 

   7. 配axios

      1. 引入axios

      2. 新建axios文件夹

      3. `http.js`

         ```javascript
         import axios from 'axios'
         
         const http = axios.create({
             baseURL: "/api",
             timeout: 2000
         })
         
         // * 配置请求拦截器
         http.interceptors.request.use((config) => {
             return config
         })
         // * 响应拦截器
         http.interceptors.response.use(
             value => {
                 return value
             },
             err => {
                 return Promise.reject(err.message)
             }
         )
         
         
         export default http
         ```

      4. `index.js`

         ```javascript
         import http from "./http"
         
         
         // http 请求针对基础路径为/api的请求
         export const getIndexData = () => {
             return http.get("/indexdata")
         }
         getIndexData().then(
             value => {
                 console.log(value)
             }
         )
         ```

      5. 配置跨域

         `vue.config.js`

         ```javascript
         const px2rem = require('postcss-px2rem')
         
         const postcss = px2rem({
             remUnit: 75 //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
         })
         
         module.exports = {
             // 关闭eslint校验
             lintOnSave: false,
             // 移动端适配
             css: {
                 loaderOptions: {
                     postcss: {
                         plugins: [
                             postcss
                         ]
                     }
                 }
             },
             devServer: {
                 open: true,
                 host: "localhost",
                 port: 8080,
                 https: false,
                 // ! 上边的配置需要对应项目的配置
                 proxy: {
                     '/api': { //拿到所有/api的请求   跨4000的域名
                         target: 'http://localhost:4000',
                         ws: true,
                         changeOrigin: true, //! 允许跨域
                         pathRewrite: {
                             "^/api": "" //因为真实的接口，没有/api这一层  所以发请求时要去掉
                         }
                     },
                     '/foo': {
                         target: '<other_url>'
                     }
                 }
             }
         }
         ```

      6. 引入vuex管理数据
      
         `npm install vuex --save`
      
         1. 新建`store`文件夹
         2. 新建`index.js`文件
         3. 新建`module`文件夹，并在其中新建`recommend.js`
         4. 在`main.js`中引入`store`并挂载
      
         `index.js`
      
         ```javascript
         import Vue from 'vue'
         import Vuex from 'vuex'
         import recommend from './module/recommend'
         
         Vue.use(Vuex);
         
         export default new Vuex.Store({
             modules: {
                 recommend
             }
         })
         ```
      
         `recommend.js`
      
         ```javascript
         import {
             getIndexData
         } from '../../axios/index'
         const state = {
             homeData: {}
         }
         
         const mutations = {
             updatedHomeData(state, data) {
                 state.homeData = data
             }
         }
         
         const actions = {
             async getHomeData({
                 commit
             }) {
                 const result = await getIndexData()
                 console.log(result)
                 if (result.status === 200) {
                     commit("updatedHomeData", result.data)
                 }
             }
         }
         
         const getters = {}
         
         export default {
             state,
             mutations,
             actions,
             getters
         }
         ```
      
      7. 用到了mapGetters
      
      8. 开始搞分类
      
      9. 分类两个滑屏
      
      10. 抽离左右组件
      
      11. 子组件撑不开better-scorll高度没有滑动效果，
      
          解决办法：子元素最后一个给margin-bottom撑开父元素
      
          &:last-child{margin-bottom:300px}
      
      12. 切换菜单事件绑定到父元素上子元素借助data-id  利用事件委派切换选中状态
      
      13. flex多列布局space-between 最后如果元素个数不够可能会导致布局中间空白
      
          解决方案
      
          给父元素添加如下代码
      
          ```less
          &:last-child::after {
                content: "";
                height: 1px;
                width: 150px;
                display: block;
              }
          ```
      
      14. 监视器监视$route 即使给了`immediate: true`  页面首次跳转到达具有监视器的界面也不会触发事件
      
      15. 完成值得买页面瀑布流
      
          以两列布局来讲瀑布流基本布局为
      
          整体flex布局   水平排列为两列   每列内部flex布局垂直排布   数据奇数下标放到第一列偶数下标放到第二列。
      
      16. 接下来请求网易真实接口，配置真实接口跨域
      
          `vue.config.js`
      
          ```javascript
          '/m': {
                          target: 'http://m.you.163.com',
                          ws: true,
                          changeOrigin: true, //! 允许跨域
                          pathRewrite: {
                              "^/m": "" //因为真实的接口，没有/m这一层  所以发请求时要去掉
                          }
                      }
          ```
      
      17. 封装网易真实接口axios请求
      
          在axios文件夹新建`Majax.js`
      
          ```javascript
          import axios from 'axios'
          
          const Majax = axios.create({
              baseURL: "/m",
              timeout: 2000
          })
          
          // * 配置请求拦截器
          Majax.interceptors.request.use((config) => {
              return config
          })
          // * 响应拦截器
          Majax.interceptors.response.use(
              value => {
                  return value
              },
              err => {
                  return Promise.reject(err.message)
              }
          )
          
          
          export default Majax
          ```
      
          在axios文件夹中的`index.js`中引入`Majax`
      
      18. 

