define(['jquery','bootstrap','cookie'], () => {
  class indexHeader {
    constructor(){
      this.menuNum = 0;
      this.searchNum = 0
      this.init().then(() => {
        this.downMenu();
        this.search();
        this.searchCancle();
        this.islogin();
      });
    };
    init(){
      return new Promise(resolve => {
        $('header').load('/html/modules/indexHeader.html', resolve);
      })
    };
    islogin(){
      if($.cookie('logininfo')){
        $('.oneLogin').hide();
        $('.alreadyLogin').show();
        let logininfo = JSON.parse($.cookie('logininfo'));
        console.log(logininfo);
        $('#signOut').on('click', () => {
          if(confirm('suer?')){
            if($.removeCookie('logininfo')){
              alert('成功退出')
              $('.oneLogin').show();
              $('.alreadyLogin').hide();
            }
          }
        })
      }else{
        $('.oneLogin').show();
        $('.alreadyLogin').hide();
      }

    }
    downMenu(){
      $('#downMenu').on('click', () => {
        if( this.menuNum%2 === 0){
          $('.allProduct').show()
          $('#downMenu').css({background: '#F2F2F2'});
        }else{
          $('.allProduct').hide();
          $('#downMenu').css({background: '#ffffff'});
        }
        this.menuNum++;
      })
    }
    search(){
      $('#searchout').on('mousedown', () => {
        if(this.searchNum%2 === 0){
          $('.userLogin,.shopCar,#searchout').hide();
          $('.login form').show()
          this.searchNum++
        }
        $('#keyWord').on('keyup', () => {
          $.getJSON(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${$('#keyWord').val()}&cb=?`,resp => {
            console.log(resp)
            $('form ul').html('');
            for(let i=0; i<resp.s.length; i++){
              $(`<li>${resp.s[i]}</li>`).appendTo($('form ul'));
            };
            $('form ul li').on('mousedown', function() {
              $('#keyWord').val('');
              $('#keyWord').val($(this).html());
            });
            $('#keyWord').on('blur', function(){
              $('form ul li').remove();
            })
          })
        })
      })
    }
    searchCancle(){
      $('.cancle').on('click', () => {
        $('#keyWord').val('');
        $('.userLogin,.shopCar,#searchout').show();
        $('.login form').hide()
        this.searchNum++
      })
      // $(document).not($('.login form,#searchout')).on('click', () => {
      //   if (this.searchNum%2 === 1) {
      //     $('.cancle').triggerHandler('click');
      //   }else{
      //   }
      //   console.log(this.searchNum)
      // })
    }
  };
  return new indexHeader();
});