require(['./config'], () => {
  require(['template','url','indexHeader', 'footer','zoom','fly'], (template,url) => {
    class details{
      constructor(){
        this.addToCart();
        this.getDetailsData().then(resp => {
          let str = template('productDetails', {...resp.product})
          $('main').html(str)
          this.details = {...resp.product, id: this.id}
          this.shopCartNum();
          this.pictureSwitching();
          this.zoom();
        })
      }
      getDetailsData(){
        this.id = Number(window.location.search.slice(4))
        return new Promise(resolve => {
          $.get(`${url.rapBaseUrl}/singleProduct`, {id: this.id}, resp => {
            resolve(resp);
          })
        })
      }

      zoom () {
        $(".zoom-img").elevateZoom({
          gallery: 'gal1imagesList', //ul父级盒子的id
          cursor: 'pointer',
          borderSize: '1',
          galleryActiceClass: 'active',
          borderColor: '#f2f2f2'
        })
      }

      addToCart(){
        $('main').on('click', '#addToCart', e => {
          this.fly(e);
          
          let cart = localStorage.getItem('cart')
          if(cart){
            cart = JSON.parse(cart)
            const is = cart.some(shop => {
              return shop.id === this.id
            })
            if(is){
              cart = cart.map(shop => {
                if(shop.id === this.id) shop.num++
                return shop
              })
            }else{
              cart.push({...this.details, num: 1})
            }
            localStorage.setItem('cart', JSON.stringify(cart))
          }else{
            let arr = [{...this.details, num: 1}];
            localStorage.setItem('cart', JSON.stringify(arr))
          }
        })
      }

      fly(e){
        const _this = this
        $(`<div style="width:20px;height:20px;backgroud:red" class="point"></div>`).fly({
          start:{
            left: e.clientX,  //开始位置（必填）#fly元素会被设置成position: fixed
            top: e.clientY,  //开始位置（必填）
          },
          end:{
            left: $('.shopCart').offset().left, //结束位置（必填）
            top: $('.shopCart').offset().top - $(window).scrollTop()  //结束位置（必填）
          },
          autoPlay: true, //是否直接运动,默认true
          speed: .8, //越大越快，默认1.2
          vertex_Rtop: 10, //运动轨迹最高点top值，默认20
          onEnd: function(){
            this.destroy()
            _this.shopCartNum()
          } //结束回调
        });
      }

      shopCartNum(){
        let cart = localStorage.getItem('cart');
        let num = 0;
        if(cart){
          cart = JSON.parse(cart);
          num = cart.reduce((res, shop) => {
            res += shop.num;
            return res;
          }, 0)
          $('#shopCart').html(num);
        }
      }

      pictureSwitching(){
        var sign = true;
        let _this = this;
        $('main').on('click', '#imagesRight', () => {
          if(sign){
            $('#imagesList').animate({
              left: -$('#imagesList li').width()*5 + 'px'
            },function() {
              sign = false;
            })
          }
        })
        $('main').on('click', '#imagesLeft', () => {
          if(!sign){
            $('#imagesList').animate({
              left: '0px'
            },function() {
              sign = true;
            })
          }
        })
        $('main').on('click', '#smallImage', function()  {
          $('#mediumImage').attr('src',$(this).attr('src'))
          _this.zoom();
        })
      }
    }
    return new details();
  })
})