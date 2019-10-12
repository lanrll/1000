module.exports = {
    devServer:{
        proxy: {
            '/api1':{
                target:'http://10.7.182.125:8089',
                changeOrigin: true,
                pathRewrite: {
                    '/api1': ''
                }
            }
            
        }
    }
}