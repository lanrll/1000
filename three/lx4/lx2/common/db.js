const mongoose = require('mongoose');
mongoose.set('userCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection
connection.on('error', err => {
  console.log('连接失败！！！',err)
})
connection.on('open', err => {
  console.log('成功连接数据库！！！')
})