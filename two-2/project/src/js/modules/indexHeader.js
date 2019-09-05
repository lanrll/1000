define(['jquery','bootstrap'], () => {
  class indexHeader {
    constructor(){
      this.num = 0;
      this.init().then(() => {
        this.downMenu();
        this.search();
        this.searchCancle();
      });
    };
    init(){
      return new Promise(resolve => {
        $('header').load('/html/modules/indexHeader.html', resolve);
      })
    };
    downMenu(){
      $('#downMenu').on('click', () => {
        if( this.num%2 === 0){
          $('.allProduct').css({display: 'block'})
          $('#downMenu').css({background: '#F2F2F2'});
        }else{
          $('.allProduct').css({display: 'none'});
          $('#downMenu').css({background: '#ffffff'});
        }
        this.num++;
      })
    }
    search(){
      $('#searchout').on('click', () => {
        $('.userLogin,.shopCar,#searchout').css({display: 'none'});
        $('.login form').css({display: 'block'});
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
        $('.userLogin,.shopCar,#searchout').css({display: 'block'});
        $('.login form').css({display: 'none'});
      })
    }
  };
  return new indexHeader();
});