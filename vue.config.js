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
            '/m': {
                target: 'http://m.you.163.com',
                ws: true,
                changeOrigin: true, //! 允许跨域
                pathRewrite: {
                    "^/m": "" //因为真实的接口，没有/m这一层  所以发请求时要去掉
                }
            }
        }
    }
}