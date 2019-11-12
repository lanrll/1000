// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        text:'asdgf',
        id:1,
        flag:true
      },{
        text: 'aoipjx',
        id:2,
        flag:true
      }
    ],
    model:2,
    sign:true,
    length:true
  },
  input(e){
    this.setData({
      value:e.detail.value
    })
  },
  add(){
    this.setData({
      list:[...this.data.list,{id:++this.data.model,text:this.data.value,flag:true}],
      str:'',
      sign:true
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
  change(e){
    console.log(e.detail.value)
    let arr = e.detail.value
    let is = false
    console.log(arr.indexOf('all'))
    if (arr.indexOf('all') !== -1){
      // console.log(2)
      this.data.list.map(item => {
        item.flag = true
      })
    }else{
      this.data.list.map(item => {
        item.flag = false
      })
    }
    this.setData({
      list: this.data.list
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  (options) => {
    // console.log(this.globalData)
    getApp().globalData.db.collection("user").get().then((res) => {
      console.log(res);
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