const http = require('http');
const config = require('./config');
const fs = require('fs');

http.createServer((req, resp) => {
  // console.log(req.url);
  if(req.url !== '/favicon.ico'){
    var filePath = config[req.url] ? req.url : '404';
    fs.readFile(config[filePath], (err, data) => {
      if(err) throw err;
      resp.end(data);
    })
  }
}).listen(2019)