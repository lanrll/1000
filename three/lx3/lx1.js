const dbServer = require('./db/connect')
dbServer.then(msg => {
  console.log(msg)
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json());
  
  const userRouter = require('./routes/user')
  app.use('/users', userRouter)
  const funcRouter = require('./routes/function')
  app.use('/func', funcRouter)
  
  app.use('/',express.static('./src'))
  app.listen(8282, () =>{
    console.log('server success')
  })
}).catch(err => {
  console.log(err);
})