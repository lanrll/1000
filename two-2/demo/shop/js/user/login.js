window.onload = function(){
  document.querySelector('#login').onclick = function(e){
    let username = document.querySelector('#loginUsername').value;
    let password = document.querySelector('#loginPassword').value;
    console.log(username,password)
    myTool.get('http://localhost/demo/shop/api/user/login.php', {username, password}, function(resp){
      console.log(resp)
      if(resp.code === 200){
        alert(resp.body.msg);
        var userinfo = {username, password};
        myTool.setCookie('userinfo', JSON.stringify(userinfo), {path: '/'});
        // location.href = 'http://localhost/demo/user';
        document.querySelector('#close').click();
      }
    })
    e.preventDefault();
  }
}