var express = require('express');
var app = express();

app.post('/products/:id', (req, res, next) => {
  res.json({code:0, msg: '产品列表！！！', id: req.params.id})
})
app.get('/users/list', (req, res, next) => {
  res.json({code: 0, msg: '用户列表！！！'})
})

app.listen(8282, () => {
  console.log('server is on 8282')
})