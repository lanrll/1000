require(['./config'], () => {
  require(['template','indexHeader', 'footer'], (template) => {
    class cart{
      constructor(){
        // let carts = localStorage.getItem('cart');
        // this.cart = JSON.parse(carts)
        // this.num = 0;
        // var linum = 0 ;
        // this.cart.forEach( shop => {
        //   linum += shop.check ? +1 : -1;
        // })
        // this.num = linum;
        // console.log(this.num)
        this.init();
        this.deltelProduct();
        this.checksChange();
        this.allCheckChange();
        // this.num = 0;
      }
      init(){
        let cart = localStorage.getItem('cart')
        let num = 0;
        if(cart){
          $('.noOne').hide();
          this.cart = JSON.parse(cart)
          this.num = 0;
          var linum = 0 ;
          this.cart.forEach( shop => {
            linum += shop.check ? +1 : -1;
          })
          this.num = linum;
          console.log(this.num)
          num = this.cart.reduce((res, shop) => {
            res += shop.num;
            return res;
          }, 0)
          $('#productNum').html(num);
          if(this.num == this.cart.length){
            $('#allCheck').prop('checked', true)
          }else{
            $('#allCheck').prop('checked', false)
          }
          let str = template('productShowOne', {cart: this.cart})
          $('.singleProductShow').html(str)
          this.deltelProduct();
          this.checksChange();
          this.allCheckChange();
          this.productPriceTotal();
        }
      }

      checksChange(){
        const _this = this;
        $('.checks').on('change', function(){
          const id = Number($(this).parents('.productSuowOne').attr('data-id'))
          _this.cart = JSON.parse(localStorage.getItem('cart'))
          _this.cart = _this.cart.map(shop => {
            if(shop.id === id) shop.check = $(this).prop('checked')
            return shop;
          })
          _this.num += $(this).prop('checked') ? +1 : -1;
          $('#allCheck').prop('checked', _this.num === _this.cart.length)
         console.log(_this.num)
          localStorage.setItem('cart', JSON.stringify(_this.cart));
          _this.productPriceTotal();
        })
      }

      allCheckChange(){
        const _this = this;
        $('#allCheck').on('change', function(){
          let cart = localStorage.getItem('cart')
          if(cart){
            _this.cart = JSON.parse(cart)
            console.log(_this.cart)
            _this.cart.forEach(shop => {
              shop.check = $(this).prop('checked')
            })
            $('.checks').prop('checked', $(this).prop('checked'))
            _this.num = $(this).prop('checked') ? _this.cart.length : 0;
            localStorage.setItem('cart', JSON.stringify(_this.cart));
            _this.productPriceTotal();
          }
        })
      }

      deltelProduct(){
        const _this = this;
        $('.deleteProduct').on('click', function() {
          _this.cart = JSON.parse(localStorage.getItem('cart'))
          const id = Number($(this).parents('.productSuowOne').attr('data-id'));
          _this.cart = _this.cart.filter(shop => {
            return shop.id != id ;
          })
          localStorage.setItem('cart', JSON.stringify(_this.cart))
          _this.init();
        })
      }

      productPriceTotal(){
        let cart = localStorage.getItem('cart');
        if(cart){
          this.cart = JSON.parse(cart);
          let allMoney = this.cart.reduce((money, shop) => {
            if(shop.check) money += shop.num * shop.price;
            return money;
          }, 0)
          $('#productPriceTotal').html(allMoney);
        }else{
          $('#productPriceTotal').html(0);
        }
      }
    }
    return new cart();
  })
})