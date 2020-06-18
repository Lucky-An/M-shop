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
        console.log("-------------------vuex获取的没有处理的数据，观察是否有code和data------------------------")
        console.log(result)
        if (result.status === 200) {
            commit("updatedHomeData", result.data)
        }
    }
}

const getters = {
    kingKongModule: state => {
        if (state.homeData.kingKongModule) {
            console.log(state.homeData.kingKongModule)
            return state.homeData.kingKongModule
        }
    },
    policyDescList: state => {
        if (state.homeData.policyDescList) {
            return state.homeData.policyDescList
        }
    },
    indexActivityModule: state => {
        if (state.homeData.indexActivityModule) {
            return state.homeData.indexActivityModule
        }
    },
    // ! 全部榜单数据
    categoryHotSellModule: state => {
        if (state.homeData.categoryHotSellModule) {
            return state.homeData.categoryHotSellModule
        }
    },
    // ! 榜单数据前两条
    categoryBeforeTwoList: state => {
        if (state.homeData.categoryHotSellModule) {
            console.log("榜单前两条数据")
            console.log(state.homeData.categoryHotSellModule.categoryList.slice(0, 2))
            return state.homeData.categoryHotSellModule.categoryList.slice(0, 2)
        }
    },
    // ! 榜单后八条数据
    categoryAfterEightList: state => {
        if (state.homeData.categoryHotSellModule) {
            console.log("榜单前两条数据")
            console.log(state.homeData.categoryHotSellModule.categoryList.slice(2))
            return state.homeData.categoryHotSellModule.categoryList.slice(2)
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}