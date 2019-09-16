const fs = require('fs')
concent = 'isArr()\n sort()\n push()\n join()\n forEach()\n indexOf()\n'
fs.appendFile('./arr.text', concent, err => {
  if(err){
    console.log(err)
  }else{
    console.log(true)
  }
})