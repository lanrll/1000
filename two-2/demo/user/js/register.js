window.onload = function(){
  document.querySelector('#btn').onclick = function(e){
    let username = document.querySelector('#username').value;
    let passward = document.querySelector('#password').value;
    myTool.get('../api/user/register.php', {username, passward}, function(resp){
      if(resp.code === 200){
        alert(resp.body.msg);
        location.href = 'http://localhost/demo/user';
      }
    })
    e.preventDefault();
  }
}