define(['jquery','bootstrap'], () => {
  class header {
    constructor(){
      this.init();
    };
    init(){
      $('header').load('/html/modules/indexHeader.html');
    };
  };
  return new header();
});