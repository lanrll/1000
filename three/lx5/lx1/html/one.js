$(document).ajaxSend(function(event,xhr,settings){
  xhr.setRequestHeader('token', localStorage.getItem('token'));
})