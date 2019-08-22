window.onload = function(){
  document.querySelector('#btn').onclick = function(e){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username,password)
    myTool.get('../api/user/login.php', {username, password}, function(resp){
      console.log(resp)
      if(resp.code === 200){
        alert(resp.body.msg);
        var userinfo = {username, password};
        myTool.setCookie('userinfo', JSON.stringify(userinfo), {path: '/'});
        location.href = 'http://localhost/demo/user';
      }
    })
    e.preventDefault();
  }
}