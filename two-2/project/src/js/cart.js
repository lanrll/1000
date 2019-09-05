require(['./config'], () => {
  require(['template','indexHeader', 'footer'], (template) => {
    class cart{
      constructor(){
        this.init();
      }
      init(){
        let cart = localStorage.getItem('cart')
        let num = 0;
        if(cart){
          cart = JSON.parse(cart);
          num = cart.reduce((res, shop) => {
            res += shop.num;
            return res;
          }, 0)
          $('#productNum').html(num);
          let str = template('productShowOne', {cart})
          $('.singleProductShow').html(str)
          this.productPriceTotal();
        }
      }

      productPriceTotal(){
        let num = 0;
        for(let i=0; i<$('.productSuowOne').length; i++){
          num += $('.singleProductNum')[i].value * $('.singleProductPrice i')[i].innerHTML
        }
        $('#productPriceTotal').html(num);
      }
    }
    return new cart();
  })
})