const location = {
  initMap(id, cb) {
    let mapObj = new AMap.Map(id, {})
    mapObj.plugin(["AMap.CitySearch"], function () {
      //实例化城市查询类
      var citysearch = new AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity();
      AMap.event.addListener(citysearch, "complete", function (result) {
        if (result && result.city && result.bounds) {
          var cityinfo = result.city;
          // console.log('当前城市是：',cityinfo)
          cb(cityinfo.slice(0, -1))
        }
      });
      AMap.event.addListener(citysearch, "error", function (result) {
        console.log(result.info);
      });
    });
  },
  coordinate(id, cb) {
    let mapObj = new AMap.Map(id,{});
    mapObj.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        maximumAge: 0, //定位结果缓存0毫秒，默认：0
        convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, //显示定位按钮，默认：true
        buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete',function(res) {
            // console.log(res)
            cb(res)
      }); //返回定位信息
      AMap.event.addListener(geolocation, 'error',function(res) {
        console.log(res)
  }); //返回定位出错信息
    });
  },
  distance(val1,val2){
    return AMap.GeometryUtil.distance(val1, val2);
  }
}
export default location
