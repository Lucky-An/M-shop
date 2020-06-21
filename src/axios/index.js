import http from "./http"
import Majax from './Majax'


// http 请求针对基础路径为/api的请求
export const getIndexData = () => {
    return http.get("/indexdata")
}

export const getClassificationData = () => {
    return http.get("/classification")
}
// 值得买页面轮播图数据
export const getKnowNavWap = () => {
    return Majax.get("/topic/v1/know/navWap.json")
}
// 瀑布流首屏数据
// https://m.you.163.com/topic/v1/find/recManual.json
export const getFirstRecManual = () => {
    return Majax.get("/topic/v1/find/recManual.json")
}

// 瀑布流分页数据请求
// https://m.you.163.com/topic/v1/find/recAuto.json
export const getFindRecAuto = (data) => {
    return Majax.get(
        "/topic/v1/find/recAuto.json", {
            params: data
        }
    )
}
// 搜索页推荐数据
// https://m.you.163.com/xhr/search/init.json
export const getFindSearch = (data) => {
    return Majax.get(
        "/xhr/search/init.json"
    )
}
// 搜索页  关键词搜索事件
// https://m.you.163.com/xhr/search/searchAutoComplete.json
export const getSearchAutoComplete = (data) => {
    return Majax.get(`/xhr/search/searchAutoComplete.json?keywordPrefix=${data}`)
}