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