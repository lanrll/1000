const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection
let mong = new Promise((resolve, reject) => {
  connection.on('open', err => {
    resolve('Success!!!')
  })
  connection.on('error', err => {
    reject('Failure!!!') 
  })
})
module.exports = mong