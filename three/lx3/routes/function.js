const router = require('express').Router();
const funcModel = require('../models/functions')

// var cla = 0;
let cal = new Promise((resolve, reject) => {
  funcModel.find().then(data => {
    cla = Math.ceil(data.length/4)
    resolve(cla)
  })
})
var num = 0
cal.then(item => {
  console.log(item)
  router.get('/prev', (req, res) => {
    if(num > 0){
      num--
      console.log(num)
      funcModel.find().skip(4*num).limit(4).then(data => {
        res.send({
          code: 0,
          msg: '显示成功',
          data
        })
        return;
      }).catch(e => {
        res.send({
          code: 1,
          msg: '显示失败'
        })
      })
    }else{
      return;
    }
  })
  router.get('/next',(req, res) => {
    if(num < item-1) {
      num++ 
      console.log(num)
      funcModel.find().skip(4*num).limit(4).then(data => {
        res.send({
          code: 0,
          msg: '显示成功',
          data
        })
        return;
      }).catch(e => {
        res.send({
          code: 1,
          msg: '显示失败'
        })
      })
    }else{
      return;
    }
  })
})
router.get('/list', (req, res) => {
  num = 0;
  funcModel.find().skip(0).limit(4).then(data => {
    res.send({
      code: 0,
      msg: '显示成功',
      data
    })
    return;
  }).catch(e => {
    res.send({
      code: 1,
      msg: '显示失败'
    })
  })
})

module.exports = router