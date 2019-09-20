// socket服务端
var express = require('express')
var app = express()
// require('http').createServer() 创建web服务器,同时应用express框架,返回web服务器对象
var http = require('http').createServer(app); 
var io = require('socket.io')(http); // 创建socket.io实例并应用在web服务器上
app.use('/',express.static(__dirname+'/client'))
// 监听客户端连接事件
io.on('connection', function(socket){
    // socket代表的是当前客户端与服务端通讯对象
  socket.on('enter',(name)=>{
    console.log('有人进来了：'+name)
    socket.username = name  // 将当前用户名绑定在当前socket对象上
    socket.emit('systemInfo','欢迎您：'+name)  // 一对一发消息
    socket.broadcast.emit('systemInfo',name+'进入了房间!') // 广播消息
  })

  socket.on('chating',(msg)=>{
    socket.emit('chating','我说：'+msg)
    socket.broadcast.emit('chating',socket.username+'说：'+msg) // 广播消息
  })

  socket.on('disconnect',()=>{
      console.log(socket.username+'有人下线了!')
  })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});