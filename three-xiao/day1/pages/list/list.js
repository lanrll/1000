// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    list:[],
    listOut:[],
    banner:[],
    pageNum:1,
    type:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getListData(this.data.pageNum,this.data.type)
    this.getBannerData()
  },
  onChange(e){
    console.log(e)
    let type = e.detail.index
    if(type !== 0){
      type = 2
    }else{
      type = 1
    }
    this.setData({
      type:type,
      list:[],
      pageNum:1
    },() => {
      this.getListData(this.data.pageNum, this.data.type)
    })
    
  },
  getListData(pageNum=1,type=1){
    wx.request({
      url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum='+pageNum+'&pageSize=10&type='+type+'&k=4742816',
      data: '',
      header: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "156948743517136919511262" }',
        'X-Host':'mall.film-ticket.film.list'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.data.films)
        this.setData({
          list:[...this.data.list,...res.data.data.films]
        })
      },
    })
  },
  getBannerData(){
    wx.request({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=510100&k=6275690',
      data: '',
      header: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "156948743517136919511262" }',
        'X-Host': 'mall.cfg.common-banner'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // console.log(res.data.data)
        this.setData({
          banner: [...res.data.data]
        })
      },

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
    console.log(2)
    this.setData({
      list:[],
      pageNum:1
    },() => {
      this.getListData(1)
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log(1)
    this.setData({
      pageNum:++this.data.pageNum
    },() => {
    this.getListData(this.data.pageNum)
    })
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})