// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    kw:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    // console.log(this.data.kw)
    app.globalData.db.collection('pro').where({
      address:app.globalData.db.RegExp({
        regexp: this.data.kw,
        options: 'i',
      })
    }
      ).get().then(res => {
      // console.log(res)
      this.setData({
        list:res.data
      })
    })
  },
  change(e){
    // console.log(e)
    this.setData({
      kw:e.detail.value
    })
    if (e.detail.value == ''){
      this.getData()
    }
  },
  search(){
    // console.log(this.data.kw)
    this.getData()
  },
  go(e){
      let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})