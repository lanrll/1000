const express = require('express');
const app = express();
const path = require('path');
const duank = 8882;
app.use('/lx5', express.static('./lx5'))

app.listen(duank, () => {
  console.log('server is on ' + duank)
})