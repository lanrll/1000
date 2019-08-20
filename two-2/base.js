var myTool = {
    /** 
     * 封装一个获取外部样式的方法
    * @param obj   <DOM object> 获取样式的DOM元素
    * @param attr  <string>     要获取的属性的名称
    * @return      <string>     样式属性值
    *  */ 
    getStyle: function ( obj, attr){
        if (obj.currentStyle) {
            return obj.currentStyle[attr]
        } else{
            return getComputedStyle( obj, false)[attr]        
        }
    },

    /** 
     * 设置元素的样式
    * @param obj  <DOM object> 要设置样式的DOM元素
    * @param attr <object>     设置样式的键值对  比如： {left: '100px', top: '200px'}
    *  */
    css: function (obj, attr) {
        for (var key in attr) {
        obj.style[key] = attr[key] 
        }
    },

    /** 
     * 给一个元素添加事件监听
    * @param obj   <DOM object>  条件事件监听的DOM元素
    * @param type  <string>      要监听的事件类型（不带‘on’）
    * @param fn    <function>    事件处理函数
    * @param isCapture <boolean> 是否捕获（true代表在捕获阶段处理事件，false代表在冒泡阶段处理，默认为false）
    *  */
    on: function( obj, type, fn, isCapture){
        // 判断isCapture是否被传递，如果没传值是undefined，这个时候就应该赋值为false，否则就等于传递进来的值
        isCapture = isCapture === undefined ? false : isCapture
        if(obj.attachEvent){ var box = document.querySelector('#box')
        box.onclick = function(){
          myTool.move(box, 'left', 500, 3000)
        }
            obj.attachEvent('on' + type,fn)
        }else{
            obj.addEvevtListener(type, fn, isCapture)
        }
    },

    /**
     * 让元素在固定时间内某个属性匀速运动到某个点
     * @param obj      <Dom object>   要运动的元素    
     * @param attr     <string>       运动的属性名
     * @param end      <number>       运动终点
     * @param duration <number>       运动持续时间，单位ms
     * @param fn       <function>     回调函数，动画结束后调用
     */
    move: function(obj, attr, end, duration, fn){
        clearInterval(obj.timer)
        var start = parseInt(this.getStyle(obj, attr))
        var distance = end - start
        var step = parseInt(duration/30)
        var speed = distance/step
        var n = 0
        obj.timer = setInterval( function(){
            n++
            obj.style[attr] = start + n*speed + 'px'
            if(n === step){
                clearInterval(obj.timer)
                obj.style[attr] = end + 'px'
                fn && fn()
            }
        },30)
    },

    /**
     * 缓冲运动
     * @param obj      <Dom object>   要运动的元素    
     * @param attr     <string>       运动的属性名
     * @param end      <number>       运动终点
    //  * @param duration <number>       运动持续时间，单位ms
     * @param fn       <function>     回调函数，动画结束后调用
     */
    slowMove: function(obj, attr, end, fn){
        clearInterval(obj.timer)
        var start = parseInt(this.getStyle(obj, attr))
        obj.timer = setInterval(() => {
            var distance = end - start
            var speed = distance > 0 ? Math.ceil(distance/10) : Math.floor(distance/10)
            start += speed
            obj.style[attr] = start + 'px'
            if(start === end){
                clearInterval(obj.timer)
            }
        }, 30);
    },

    /**
     * 随机数 
    * @param min    <number>    随机的最小数
    * @param max    <number>    随机的最大数
    * @return       <number>    随机数
    * */
    randomNum: function( min, max){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*min+1)
                break;
            case 2:
                return parseInt(Math.random()*(max-min+1)+min)
                break;
            default:
                return 0
                break;
        }
    },

    /** 
     * 获取浏览器宽高
     * @return  <object>    { width, height}
     */
    getBodySize: function(){
        return{
            width: document.documentElement.clientWidth || document.body.clientWidth,
            height: document.documentElement.clientHeight || document.body.clientHeight
        }
    },
    
    /** 取cookie
     * @param key   <string>    要取的cookie的名称 
     * @return  <string>    要取的cookie的值
     */
    getCookie(key){
        var str = document.cookie;
        var arr = str.split('; ');
        var obj = {};
        arr.forEach(item => {
            var subArr = item.split('=');
            obj[subArr[0]] = decodeURIComponent(subArr[1]);
        })
        return obj[key];
    },

    /**设置修改cookie
     * @param key <string>  要设置的cookie的名称
     * @param value <string>    要设置的cookie的值
     * @param option <string>   {expires, path}
     */
    setCookie(key, value, option){
        var str = key + '=' + encodeURIComponent(value);
        if(option){
            if(option.expires){
                var date = new Date();
                date.setDate(date.getDate() + option.expires);
                str += ';expires=' + date.toUTCString() ;
            }
            if(option.path){
                str += ';path=' + option.path ;
            }
        }
        document.cookie = str;
    },

    /**删除cookie
     * @param key <string> 要删除的cookie的名称
     */
    delCookie(key){
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    },

    //判断当前浏览器类型
    isBrowser: function () {
        var userAgent = navigator.userAgent;
        //微信内置浏览器
        if(userAgent.match(/MicroMessenger/i) == 'MicroMessenger') {
            return "MicroMessenger";
        }
        //QQ内置浏览器
        else if(userAgent.match(/QQ/i) == 'QQ') {
            return "QQ";
        }
        //Chrome
        else if(userAgent.match(/Chrome/i) == 'Chrome') {
            return "Chrome";
        }
        //Opera
        else if(userAgent.match(/Opera/i) == 'Opera') {
            return "Opera";
        }
        //Firefox
        else if(userAgent.match(/Firefox/i) == 'Firefox') {
            return "Firefox";
        }
        //Safari
        else if(userAgent.match(/Safari/i) == 'Safari') {
            return "Safari";
        }
        //IE
        else if(!!window.ActiveXObject || "ActiveXObject" in window) {
            return "IE";
        }
        else {
            return "未定义:"+userAgent;
        }
    }
}