// pages/lag/lag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageNo:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(pageNo=1){
    wx.request({
      url: 'https://m.lagou.com/listmore.json?pageNo='+pageNo+'&pageSize=15',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // console.log(res)
        this.setData({
          list: [...this.data.list, ...res.data.content.data.page.result]
        },() => {
          console.log(this.data.list)
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getMore(){
    this.setData({
      pageNo:++this.data.pageNo
    },()=>{
      this.getData(this.data.pageNo)
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