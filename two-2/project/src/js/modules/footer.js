define(['jquery'], () => {
  class footer{
    constructor(){
      this.init().then(() => {

      })
    }
    init(){
      return new Promise(resolve => {
        $('footer').load('/html/modules/footer.html', resolve);
      })
    }
  }
  return new footer();
})