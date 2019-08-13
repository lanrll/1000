var tools = {
  /** 封装一个获取外部样式的方法
   * @param obj   <DOM object> 获取样式的DOM元素
   * @param attr  <string>     要获取的属性的名称
   * @return      <string>     样式属性值
   *  */ 
  getStyle: function (obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr]
    } else {
      return getComputedStyle(obj, false)[attr]
    }
  },

  /** 设置元素的样式
   * @param obj  <DOM object> 要设置样式的DOM元素
   * @param attr <object>     设置样式的键值对  比如： {left: '100px', top: '200px'}
   *  */
  css: function (obj, attr) {
    for (var key in attr) {
      obj.style[key] = attr[key] 
    }
  },

  /** 给一个元素添加事件监听
   * @param obj   <DOM object>  条件事件监听的DOM元素
   * @param type  <string>      要监听的事件类型（不带‘on’）
   * @param fn    <function>    事件处理函数
   * @param isCapture <boolean> 是否捕获（true代表在捕获阶段处理事件，false代表在冒泡阶段处理，默认为false）
   *  */
  on: function (obj, type, fn, isCapture) {
    // 判断isCapture是否被传递，如果没传值是undefined，这个时候就应该赋值为false，否则就等于传递进来的值
    isCapture = isCapture === undefined ? false: isCapture
    if (obj.attachEvent) {
      obj.attachEvent('on' + type, fn)
    } else {
      obj.addEventListener(type, fn, isCapture)
    }
  },

  /** 获取浏览器宽高
   * @return <object> { width, height }
   *  */
  getBodySize: function () {
    return {
      width: document.documentElement.clientWidth || document.body.clientWidth,
      height: document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  
  /** 让元素在固定时间内某个属性匀速运动到某个点
   * @param obj      <DOM object>  要运动的那个元素
   * @param attr     <string>      运动的属性名称
   * @param end      <number>      运动终点
   * @param duration <number>      运动持续时间，单位ms
   * @param fn       <function>    回调函数，动画结束之后调用的函数
   * 
   */
  move: function (obj, attr, end, duration, fn) {
    clearInterval(obj.timer)
    // 获取起点值
    var start = parseInt(this.getStyle(obj, attr))
    // 计算总距离
    var distance = end - start
    // 计算总步数
    var steps = parseInt(duration / 30)
    // 计算速度（px/30ms）
    var speed = distance / steps
    // 记录当前是第几步
    var n = 0
    obj.timer = setInterval(function () {
      // 往前运动一步
      n++
      // 起始值加上当前步数乘以速度
      obj.style[attr] = start + n * speed + 'px'
      if (n === steps) {
        clearInterval(obj.timer)
        // 因为js的小数运算可能不精确，为了稳定，再赋一次值
        obj.style[attr] = end + 'px'
        // 代表动画结束
        // fn有效才调用
        // if (fn) fn()
        fn && fn()
      }

    }, 30)
  }
}
 