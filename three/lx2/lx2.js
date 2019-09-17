const express = require('express');
const app = express();
const duank = 8882;
const bodyParser = require('body-parser');
app.get('/user/list', (rep, res) => {
  console.log(rep.query)
  if(!rep.query.pageSize || !rep.query.page){
    res.send('请求参数有错');
    return;
  }
  res.send({pageSize: rep.query.pageSize, page: rep.query.page})
})

app.listen(duank, () => {
  console.log('server is on ' + duank)
})
