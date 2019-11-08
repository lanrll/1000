const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
                proxy(
                    '/hd',
                    {
                        target: 'http://localhost:4000',
                        changeOrigin: true,
                        "pathRewrite":{
                            "^/hd":""
                        }
                    }
                )
            )
        }
