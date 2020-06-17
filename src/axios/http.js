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