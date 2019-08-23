window.onload = function(){
  // var yiLogin = function(){
    let userinfo = myTool.getCookie('userinfo');
    if(userinfo){
      userinfo = JSON.parse(userinfo);
      document.querySelector('#modal-227581').style.display = 'none';
      document.querySelector('#modal-227582').style.display = 'none';
      document.querySelector('#yiLogin').style.display = 'block';
      document.querySelector('#yiLoginUsernam').innerHTML = userinfo.username;
    }

    document.querySelector('#login').onclick = function(e){
      var username = document.querySelector('#loginUsername').value;
      var password = document.querySelector('#loginPassword').value;
      console.log(username,password)
      myTool.get('api/user/login.php', {username, password}, function(resp){
        console.log(resp)
        if(resp.code === 200){
          alert(resp.body.msg);
          var userinfo1 = {username, password};
          myTool.setCookie('userinfo', JSON.stringify(userinfo1), {path: '/'});
          document.querySelector('#close1').click();
          let userinfo = myTool.getCookie('userinfo');
          console.log(userinfo);
          if(userinfo){
            userinfo = JSON.parse(userinfo);
            document.querySelector('#modal-227581').style.display = 'none';
            document.querySelector('#modal-227582').style.display = 'none';
            document.querySelector('#yiLogin').style.display = 'block';
            document.querySelector('#yiLoginUsernam').innerHTML = userinfo.username;
          }
        }
      })
      e.preventDefault();
    }
  // }
  document.querySelector('#modal-227583').onclick = function(){
    if(confirm('sure?')){
      myTool.setCookie('userinfo', '', {expires: -1, path: '/'});
      document.querySelector('#modal-227581').style.display = 'block';
      document.querySelector('#modal-227582').style.display = 'block';
      document.querySelector('#yiLogin').style.display = 'none';
    }
  }

  document.querySelector('#register').onclick = function(e){
    var username = document.querySelector('#regiserUsername').value;
    var password = document.querySelector('#registerPassword').value;
    console.log(username, password);
    myTool.get('api/user/register.php', {username, password}, function(resp){
      if(resp.code === 200){
        alert(resp.body.msg);
        document.querySelector('#close2').click();
      }
    });
    e.preventDefault();
  }

}