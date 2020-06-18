import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './module/recommend'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        recommend
    }
})