const router = require('express').Router();
const funcModel = require('../models/function');
router.get('/list', (req, res) => {
  let {
    pageSize,
    page,
    name
  } = req.query
  if (!pageSize) pageSize = 5;
  if (!page) page = 1;
  let skip = (page - 1) * pageSize;
  let condition = null;
  if (name) {
    condition = {
      name: {
        $regex: new RegExp(name)
      }
    }
  }
  let getTotal = funcModel.countDocuments(condition);
  let getList = funcModel.find(condition).skip(skip).limit(pageSize);
  Promise.all([getTotal, getList]).then(result => {
    let [total, list] = result;
    res.send({
      code: 0,
      msg: '查询成功',
      data: {
        list: list,
        total: total
      }
    })
  }).catch(e => {
    res.send({
      code: 1,
      msg: '查询失败'
    })
  })

  router.post('/add', (req, res) => {
    let {
      name,
      effect,
      result,
      state
    } = req.body;
    if (!name || !effect) {
      res.send({
        code: 3,
        msg: '参数有误'
      })
      return
    }
    funcModel.insertMany([{
      name,
      effect,
      result,
      state
    }]).then(result => {
      res.send({
        code: 0,
        msg: '添加成功',
        result
      })
    }).catch(e => {
      res.send({
        code: 1,
        msg: '添加失败：' + e.message
      })
    })
  })
})

module.exports = router