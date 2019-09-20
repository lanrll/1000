const express = require('express');
const app = express();
const ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/func')

app.get('/', (req, res) => {
  let data = [{
    id: 1,
    title: 'ffffas',
    desc: '吼'
  }, {
    id: 2,
    title: 'sdfajksldgn',
    desc: '十多个法律和'
  }]
  res.render('index', {list: data})
})
app.listen(80, () => {
  console.log('server is on 80')
})