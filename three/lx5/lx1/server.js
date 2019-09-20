const express = require('express');
const app = express();
const bodyP = require('body-parser');
app.use(bodyP.urlencoded({
  extended: false
}));
app.use(bodyP.json());
app.use('/', express.static(__dirname + '/html'));
const jwt = require('jsonwebtoken')
let secret = 'asd123'
app.use((req, res, next) => {
  let whiteNames = ['/user/login', '/user/quit'] //不需要用户登录则能请求的接口
  if (whiteNames.indexOf(req.path) != -1) {
    next()
    return;
  }
  // 用户认证
  let token = req.headers['token'] //客户端是将token值放在headers中token属性里面的
  jwt.verify(token, secret, function (err, data) {
    if (err) {
      res.send({
        code: 1,
        msg: '令牌无效!!'
      })
      return
    }
    console.log(data)
    next()
  })

})

app.post('/user/login', (req, res) => {
  let {
    username,
    pwd
  } = req.body
  if (username == 'lanr' && pwd == '123') {
    let token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: 'foobar',
      x: 10
    }, secret);
    console.log(token)
    res.send({
      code: 0,
      msg: '登录成功!!!',
      token
    })
  } else {
    res.send({
      code: 1,
      msg: '登录失败!!!'
    })
  }
})
app.get('/product/list', (req, res) => {
  res.send({
    code: 0,
    msg: '产品列表！！！'
  })
})
app.get('/user/quit', (req, res) => {

  res.send({
    code: 0,
    msg: '退出成功！！！'
  })
})
app.listen(8282, () => {
  console.log('server is on 8282')
})