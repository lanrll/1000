var iNow = 0;
var dateList = document.querySelector('#dateList')
var prev = document.querySelector('#prev')
var next = document.querySelector('#next')
var title = document.querySelector('h4');

prev.onclick=function(){
  iNow--;
  calendar(iNow);
}

next.onclick = function(){
  iNow++;
  calendar(iNow);
}
calendar(iNow);
function  calendar(n) {
  var date = new Date();
  var nowDate = date.getDate();
  date.setMonth(date.getMonth()+n, 1)
  var year = date.getFullYear();
  var month = date.getMonth()+1
  title.innerHTML = year+'年'+month+"月"
  var week = date.getDay();
  date.setMonth(date.getMonth()+1, 0);
  var allDays = date.getDate();
  var str = ''
  for( i= 0; i<week ; i++){
    str += '<li></li>'
  }
  for( j=1; j <= allDays; j++){
    if(n > 0){
      if( (week+j)%7 === 0 || (week+j)%7 === 1){
        str += '<li class="sun">' +j+ "</li>"
      }else {
        str += '<li>' +j+ '</li>'
      }
    }else if( n < 0){
      str += '<li class="ccc">'+j+'</li>';
    }else{
      if(j < nowDate){
        str += "<li class='ccc'>" +j+ '</li>'
      }else if(j===nowDate){
        str += '<li class="red">' +j+ '</li>'
      }else if((week+j)%7 === 0 || (week+j)%7 ===1){
        str += '<li class="sun">' +j+ '</li>'
      }else{
        str += '<li>' +j+ '</li>'
      }
    }
  }
  dateList.innerHTML = str
}