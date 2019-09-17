const express = require('express');
const app = express()
const duank = 8882;
var num = 0;
app.use((rep, res, next) => {
  num++;
  console.log('第'+num+'次访问！')
  next();
})
app.get('/', (rep, res) => {
  res.send('你值得拥有')
})

app.listen(duank, () => {
  console.log('server is on ' + duank)
})
