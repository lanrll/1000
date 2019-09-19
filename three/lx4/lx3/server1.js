var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

app.post('/products/:id', function(req, res, next){
  res.json({code:'0',msg:'cors-post产品列表！！！', id:req.params.id})
})

app.get('/users/list', function(req, res, next){
  res.json({code: 0, msg: 'cors-get用户列表！！！'})
})

app.listen(8281, () => {
  console.log('server1 is on 8281')
})