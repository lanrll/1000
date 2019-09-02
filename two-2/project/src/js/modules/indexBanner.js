define(['jquery'], () => {
  class indexBanner{
    constructor(){
      this.init().then(() => {
        this.liWidth = $('.banner .trans li').eq(0).width();
        this.len = $('.banner' )
      })
    }
    init(){
      return new Promise(resolve => {
        $('.banner').load('/html/modules/indexBanner.html', resolve);
      })
    }

  }
  return new indexBanner();
});