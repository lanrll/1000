const express = require('express');
const app = express();
const uploadRouter = require('./routes/upload')
app.use('/', express.static('./src'));
app.use('/uploads', express.static('./uploads'));
app.use('/api/common',uploadRouter);
app.listen(8282, () =>{
  console.log('server is success')
})