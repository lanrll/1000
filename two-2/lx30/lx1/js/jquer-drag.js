// class Drag{
//   constructor(selector, titleSelector){
//     this.div = document.querySelector(selector)
//     this.title = titleSelector ? this.div.querySelector(titleSelector) : this.div
//     this.init()
//   }
//   init(){
//     this.title.onmousedown = e => {
//       let disX = e.offsetX,
//           disY = e.offsetY;
//       document.onmousemove = e => {
//         let left = e.clientX - disX,
//             top = e.clientY - disY;
//         this.move({left, top})
//       }
//       document.onmouseup = function(){
//         document.onmousemove = null
//       }
//       e.preventDefault()
//     }
//   }
//   move(posObj){
//     if(posObj.left < 0) posObj.left = 0;
//     if(posObj.top < 0) posObj.top = 0;
//     if(posObj.left > myTool.getBodySize().width - this.div.offsetWidth)
//       posObj.left = myTool.getBodySize().width - this.div.offsetWidth
//     if(posObj.top > myTool.getBodySize().height - this.div.offsetHeight)
//       posObj.top = myTool.getBodySize().height - this.div.offsetHeight
//     posObj.left += 'px'
//     posObj.top += 'px'
//     myTool.css(this.div ,posObj)
//   }
// }
$.fn.extend({
  Drag: function(selector){
    // this.on('mousedown', e => {
    var sel = selector ? selector : this
    $(sel).on('mousedown', e => {
      let disX = e.offsetX,
          disY = e.offsetY;
      $(document).on('mousemove', e => {
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        
        if(left < 0) left = 0;
        if(top < 0) top = 0;
        if(left > $(document).width() - $(this).width()) 
          left = $(document).width() - $(this).width();
        if(top > $(document).height() - $(this).height())
          top = $(document).height() - $(this).height();
        $(this).css({left, top})
      })
      $(document).on('mouseup', function(){
        $(document).off('mousemove');
      })
      // $(document).on('mouseup', function(){
      //   $(this).off();
      // })
      e.preventDefault();
    })
    return this;
  }
})