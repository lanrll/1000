//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    let arr = []
    wx.getStorageSync('logs').map(item => {
      let str = new Date(item)
      arr.push(str.toLocaleString())
    })
    // console.log(getCurrentPages())
    // console.dir(wx.getStorageSync('logs'))
    // console.dir(arr)
    // console.log(this.data)
  }
})
