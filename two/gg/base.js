var myTool = {
    /** 封装一个获取外部样式的方法
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

    /** 设置元素的样式
    * @param obj  <DOM object> 要设置样式的DOM元素
    * @param attr <object>     设置样式的键值对  比如： {left: '100px', top: '200px'}
    *  */
    css: function( obj, attr){
        for( var key in attr){
            obj.style[key] = attr[key]
        }
    },

    /** 给一个元素添加事件监听
    * @param obj   <DOM object>  条件事件监听的DOM元素
    * @param type  <string>      要监听的事件类型（不带‘on’）
    * @param fn    <function>    事件处理函数
    * @param isCapture <boolean> 是否捕获（true代表在捕获阶段处理事件，false代表在冒泡阶段处理，默认为false）
    *  */
    on: function( obj, type, fn, isCapture){
        // 判断isCapture是否被传递，如果没传值是undefined，这个时候就应该赋值为false，否则就等于传递进来的值
        isCapture = isCapture === undefined ? false : isCapture
        if(obj.attachEvent){
            obj.attachEvent('on' + type,fn)
        }else{
            obj.addEvevtListener(type, fn, isCapture)
        }
    },

    /**随机数 
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

    /** 获取浏览器宽高
     * @return  <object>    { width, height}
     */
    getBodySize: function(){
        return{
            width: document.documentElement.clientWidth || document.body.clientWidth,
            height: document.documentElement.clientHeight || document.body.clientHeight
        }
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