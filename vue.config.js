module.exports = {
    //...
    publicPath: './',
    //...
    devServer: {
        host: '127.0.0.1',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        disableHostCheck: true,
        open: true,
        hot: true, // 热重载
        port: '8081',
        proxy: {
            "/apis": {
                target: `http://www.alchemy.com/`,
                ws: false,//关闭socket链接
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,
                pathRewrite: {
                    "^/apis": '/'
                },
            }
        }
    },
}