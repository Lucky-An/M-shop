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