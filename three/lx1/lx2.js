const fs = require('fs')
let date = Date.now();
// console.log(date);
fs.mkdir('./2019-9-16/'+date, (err) => {
  if(err) console.log(err)
})