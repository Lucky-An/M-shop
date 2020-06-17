import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'lib-flexible/flexible.js'


import {
  Tabbar,
  TabbarItem,
  Icon,
  Popup,
  Swipe,
  SwipeItem,
  CountDown
} from "vant";
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon);
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(CountDown)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')