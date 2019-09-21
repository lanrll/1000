const express = require("express");
const app = express();
const bodtP = require("body-parser");
require('./common/db')
const funcRouter = require('./routes/function');
app.use(bodtP.urlencoded({extended: false}));
app.use(bodtP.json());
app.use('/', express.static('./html'));
app.use('/api/func', funcRouter)
app.listen(8282, () => {
  console.log('server is on 8282')
})