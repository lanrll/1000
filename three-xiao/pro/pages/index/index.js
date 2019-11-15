//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.width - 30) / 2,
        top: (app.globalData.height - 30) / 2 - 30,
        width: 30,
        height: 30
      },
      clickable: false
    }, {
      id: 2,
      iconPath: '/resources/center.png',
      position: {
        left: 30,
        top: (app.globalData.height - 100),
        width: 30,
        height: 30
      },
      clickable: true
    }]
  },
  //事件处理函数
  onLoad: function() {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
    this.mapCtx.moveToLocation()
  },
  onShow() {
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: this.info.bind(this)
    })
    this.getData()
  },
  info(res) {
    this.setData({
      "longitude": res.longitude,
      "latitude": res.latitude
    })
  },
  getData(){
    app.globalData.db.collection("pro").get().then((res) => {
      var arr = res.data.map((item) => {
        return {
          iconPath: "/resources/" + item.type + ".png",
          id: item._id,
          latitude: item.latitude,
          longitude: item.longitude,
          width: 30,
          height: 30
        }
      })
      this.setData({
        markers: arr
      })
    })
  },
  markertap(e){
    // console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.markerId,
    })
  },
  controltap() { //单击地图上的控制点
    this.mapCtx.moveToLocation() //移动到中心位置
  },
  go(e) { //跳转页面
    var page = e.target.dataset.page;
    wx.navigateTo({
      url: page
    })
  },
  onShareAppMessage() {
    return {
      title: "平台首页",
      path: "/pages/index/index"
    }
  }
})