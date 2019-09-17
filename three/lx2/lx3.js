const express = require('express');
const app = express();
const duank = 8882;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/user/login', (rep, res) => {
  console.log(rep.body)
  let username = rep.body.name;
  let pwd = rep.body.pwd;
  if(!username || !pwd){
    res.send({code: 1, msg:'用户名或密码未填写！！！'});
    return;
  }
  if(username != 'admin' || pwd !='456'){
    res.send({code: 1, msg:'用户名或密码有误！！！'});
    return;
  }
  res.send('登录成功')
})

app.listen(duank, () => {
  console.log('server is on ' + duank)
})
