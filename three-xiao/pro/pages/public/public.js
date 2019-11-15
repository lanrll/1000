// pages/public/public.
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {  //交易的信息
      address: '点击选中，要勾选哦~',
      type: "sell"
    },
    flag: true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  choose() {
    wx.chooseLocation({
      success: (res) => {
        this.data.info.address = res.address;
        this.data.info.longitude = res.longitude;
        this.data.info.latitude = res.latitude;
        this.setData({
          info: this.data.info,
        })
      }
    })
  },
  change(e) {
    var type = e.target.dataset.type;
    this.data.info[type] = e.detail.value;
    this.setData({
      info: this.data.info,
    })
  },
  publish() {
    //表单验证
    console.log(this.data.info.desc)
    if (!this.data.info.desc) {
      wx.showToast({
        title: '必填联系方式',
        icon: 'loading',
        duration: 1500,
        mask: true,
      })
      return;
    }
    app.globalData.db.collection("pro").add({
      data: this.data.info
    }).then((res) => {
      console.log(res);
      if (res.errMsg === "collection.add:ok") {
        this.setData({
          flag: false
        })
      }
    })
  },
  go() {
    wx.navigateBack({
      delta: 1,
    })
  }

})