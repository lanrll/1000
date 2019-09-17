const express = require('express');
const app = express()
const duank = 8882
app.get('/', (rep, res) => {
  res.send('你值得拥有')
})

app.listen(duank, () => {
  console.log('server is on ' + duank)
})
