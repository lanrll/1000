const fs = require('fs')
fs.readdir('./2019-9-16', (err, res) => {
  if (err) console.log(err);
  console.log(res);
  res.forEach(res => {
    fs.readdir(`./2019-9-16/${res}`, (err, result) => {
      if (err) console.log(err);
      // console.log(result)
      if(result.length === 0){
        fs.rmdir(`./2019-9-16/${res}`, err => {
          if(err) console.log(err);
        })
      }else{
        console.log(result.length)
      }
    })
  })
})