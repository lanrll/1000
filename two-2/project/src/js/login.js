require(['./config'], () => {
  require(['jquery', 'cookie'], () => {
    class login {
      constructor() {
        this.$titleone = $('#titleone');
        this.$titletwo = $('#titletwo');
        this.$name = $('#name');
        this.$password = $('#password');
        this.$login = $('#login');
        this.$resgister = $('#register');
        this.ressign;
        this.loginsign;
        this.init()
      }
      init() {
        let _this = this
        $.cookie.raw = false;
        $.cookie.json = true;
        $.cookie('i', 'asd', {
          expires: 7,
          path: '/'
        })
        // console.dir($.cookie)
        // console.log($.cookie('i'))
        // console.log(JSON.parse($.cookie('userinfo')))
        console.log(window.location.search.slice(1))
        if (window.location.search.slice(1) == 0) {
          _this.loginShow()
        } else {
          _this.resgisterShow()
        }
        _this.$titleone.on('click', () => {
          _this.loginShow()
        })
        _this.$titletwo.on('click', () => {
          _this.resgisterShow()
        })
      }
      loginShow(){
        this.$titletwo.removeClass('ac')
        this.$titleone.removeClass('bc')
        this.$titletwo.addClass('bc')
        this.$titleone.addClass('ac')
        this.$resgister.hide();
        this.$login.show();
        this.login();
      }
      resgisterShow(){
        this.$titleone.removeClass('ac')
        this.$titletwo.removeClass('bc')
        this.$titleone.addClass('bc')
        this.$titletwo.addClass('ac')
        this.$login.hide();
        this.$resgister.show();
        this.resgister();
      }
      login(){
        this.$login.on('click', () => {
          let userinfo = [],
              logininfo = [];
          if (this.$name.val() != '' && this.$password.val() != '') {
            if($.cookie('userinfo')){
              userinfo = JSON.parse($.cookie('userinfo'))
              console.log(userinfo)
              userinfo.forEach((item) => {
                if(this.$name.val() == item.name) {
                  if(this.$password.val() == item.password){
                    this.ressign = true;
                  }else{
                    this.ressign = false
                  }
                }
              })
            }else{
              this.ressign = false;
            }
            console.log( this.ressign)
            if (this.ressign){
              logininfo = [{name: this.$name.val(), password: this.$password.val()}]
                $.cookie('logininfo', JSON.stringify(logininfo),{
                  expires: 7,
                  path: '/'
                } )
                if(confirm('欢迎登录Microsoft！去逛逛！！！')){
                  console.log(JSON.parse($.cookie('logininfo')));
                  location.href = 'http://localhost:611/index.html';
                  // break;
                }
              }else{
                alert('账号密码输入出错或用户未注册！')
              }
            }else{
              alert('存在未输入！请输入！')
            }     
        })
      }
      resgister(){
        this.$resgister.on('click', () => {
          let userinfo = [];
          if (this.$name.val() != '' && this.$password.val() != '') {
            if($.cookie('userinfo')){
              userinfo = JSON.parse($.cookie('userinfo'))
              console.log(userinfo)
              userinfo.forEach((item) => {
                console.log(item.name)
                if(this.$name.val() == item.name) {
                  this.ressign = true;
                }else{
                  this.ressign = false
                }
              })
            }else{
              this.ressign = false;
            }
            if (this.ressign){
                alert('用户名已注册，请重新输入！')
              }else{
                userinfo =  [...userinfo, {name:this.$name.val(), password: this.$password.val()}]
                console.log(userinfo)
                $.cookie('userinfo', JSON.stringify(userinfo),{ expires: 7,
                  path: '/'
                })
                alert('注册成功了！')
              }
            }else{
              alert('存在未输入！请输入！')
            }     
        })
      }
    }
    new login()
  })
})