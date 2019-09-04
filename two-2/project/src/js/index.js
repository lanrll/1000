require(['./config'], () => {
  require(['template','url','indexHeader','indexBanner','indexProduct','footer'], (template,url) => {
    class Index{
      constructor(){
        this.getProductShowData();
      }
      getProductShowData(){
        new Promise(resolve => {
          $.get(`${url.rapBaseUrl}/shopList`, resp => {
            resolve(resp)
            console.log(resp)
          }).then(resp => {
            if(resp.code === 200){
              console.log(resp)
              let {url, title, desc} = resp.images[0];
              console.log({url, title, desc})
              let str = template('officeProductShow', {...resp});
              $('#productShow').html(str)
            }
          })
        })
      }
    }
    return new Index(); 
  })
})