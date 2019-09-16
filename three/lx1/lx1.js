const fs = require('fs')
let filePath = '../../two-2/images'
fs.readdir(filePath, (err, files) => {
  if(err) console.log(err);
  files.forEach(file => {
    // file.split('.')
    // console.log(file.split('.')[1])
    if(file.split('.')[1] === 'jpg'){
      fs.readFile(`${filePath}/${file}`, (err, result) => {
        if(err) console.log(err);
        console.log(file)
        console.log(result);
      })
    }
  })
})