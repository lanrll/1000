var express = require('express');
var app = express();
const request = require('request');
app.use('/',express.static('./html'));
// app.get('/products',(req,res) => {
//   request({
//     method: 'post',
//     url: 'http://localhost:8281/product/201'
//   },function(err, response,body){
//     res.send(body)
//   })
// })
// app.get('/users',(req,res) => {
//   request({
//     method: 'get',
//     url: 'http://localhost:8281/users/list'
//   },function(err, response,body){
//     res.send(body)
//   })
// })
app.use('^/pro', (req, res) => {
  request({
    url: 'http://localhost:8281'+req.path,
    method: req.method,
    body: req.body,
    json: true,
  }, (err, response, body) => {
    res.send(body)
  })
})

app.use('^/proxy', (req, res) => {
  request({
    url: 'http://localhost:8282' + req.path,
    method: req.method,
    body: req.body,
    json: true,
  }, (err, response, body) => {
    res.send(body)
  })
})
app.get('/test',(req, res) => {
  res.json({code: 0, msg: '本服务器请求成功！！！'})
})

app.listen(8280, () => {
  console.log('server is on 8280 ')
})
