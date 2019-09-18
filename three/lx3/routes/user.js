const router = require('express').Router();
const userModel = require('../models/users')

router.get('/list', (req, res) => {
  userModel.find().then(data => {
    res.send({
      code: 0,
      msg: '操作成功',
      data
    })
  }).catch(e => {
    res.send({
      code: 1,
      msg: '操作失败',
      e
    })
  })
})

router.post('/registry', (req, res) => {
  let {
    username,
    pwd
  } = req.body
  // console.log(req.body)
  if (!username || !pwd) {
    res.send({
      code: 3,
      msg: '参数有误'
    });
    return;
  }
  let data = [{
    username,
    pwd
  }]
  userModel.find({
    username
  }).then(result => {
    if(result.length == 0){
      userModel.insertMany(data).then(result => {
        res.send({
          code: 0,
          msg: '操作成功'
        })
      }).catch(e => {
        res.send({
          cosde: 1,
          msg: '操作失败'
        })
      })
    }else{
      res.send({
        code: 2,
        msg: '用户名已注册',
        body: result.length
      })
    }
  }).catch(e => {
    console.log(e)
  })
})

router.post('/login', (req, res) => {
  let {
    username,
    pwd
  } = req.body
  console.log(req.body)
  if (!username || !pwd) {
    res.send({
      code: 3,
      msg: '参数有误'
    });
    return;
  }
  userModel.find({
    username,
    pwd
  }).then(result => {
    if(result.length != 0){
      res.send({
        code: 0,
        msg: "登录成功"
      })
    }else{
      res.send({
        code: 1,
        msg: '登录失败'
      })
    }
  }).catch(e => {
    console.log(e)
  })
})


module.exports = router