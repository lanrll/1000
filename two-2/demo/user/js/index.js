window.onload = function(){
  let userinfo = myTool.getCookie('username');
  if(userinfo){
    userinfo = JSON.parse(userinfo);
    document.querySelector('.inlogin').style.display = 'none';
    document.querySelector('.islogin').style.display = 'block';
    document.querySelector('#username').innerHTML = userinfo.username;
  }
  document.querySelector('#logout').onclick = function(){
    if(confirm('sure?')){
      myTool.setCookie('userinfo', '', {expires: -1, patg: '/'});
      document.querySelector('.unlogin').style.display = 'block';
      document.querySelector('.islogin').style.display = 'none';
    }
  }
}