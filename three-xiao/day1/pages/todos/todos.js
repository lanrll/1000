// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        text:'asdgf',
        id:1
      },{
        text: 'aoipjx',
        id:2
      }
    ],
    model:2,
    sign:true
  },
  input(e){
    this.setData({
      value:e.detail.value
    })
  },
  add(){
    this.setData({
      list:[...this.data.list,{id:++this.data.model,text:this.data.value}],
      str:''
    })
  },
  del(e){
    // console.log(e.target.dataset.id)
    let id = e.target.dataset.id
    let list = this.data.list.filter(item => id !== item.id)
    this.setData({
      list: list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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