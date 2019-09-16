const http = require('https')
const cheerio = require('cheerio')
const web = 'https://www.bootcss.com/'
const fs = require('fs')
const url = require('url')

http.get(web, res => {
  if(res.statusCode === 200){
    let content = ''
    res.on('data', chunk => {
      console.log('donging...');
      content += chunk;
    })
    res.on('end' ,() => {
      fs.appendFile('./index.html', content,err => {
        if(!err) console.log('成功')
      })
      const document = cheerio.load(content)
      let a = document('.row a')
      let hrefs = [];
      // console.log(a)
      a.each((index, item) => {
        let href = document(item).attr('href')
        if(!url.parse(href).protocol){
          href =  'https://www/bootcss.com' + href
        }
        hrefs.push(href)
      })
      console.log(hrefs)
    })
  }
})
