const express = require('express')
const app = express()
// cookie不能是跨域传递的，所以当前端和后端程序不在同一个服务器时，就不能使用session会话来记录用户登录状态，使用令牌方式
const session = require('express-session')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// __dirname获取到当前目录的绝对路径
app.use('/',express.static(__dirname+'/html'))
app.use(session({
    secret:'831813jaakakd18138318',//签名的密钥,自己产生的字符串，必填
    cookie:{
        path:'/'
    },
    resave:true,// 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized:true //无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}))
// 当session配置后，就通过req.session来操作(读，写))当前会话的内容
app.use((req,res,next)=>{
    // console.log(req.path)
    let whiteNames = ['/user/login','/user/quit'] //不需要用户登录则能请求的接口
    if(whiteNames.indexOf(req.path) != -1){
        next()
        return;
    }
    // 用户认证
    if(!req.session.username){
        res.send({code:-1,msg:'请先登录'})
        return
    }
    next()
})
app.post('/user/login',(req,res)=>{
    let {username,pwd} = req.body
    if(username == 'admin' && pwd=="123"){
        req.session.username = username  //向当前会话中写入内容
        req.session.loginTime = Date.now()
        res.send({code:0,msg:'登录成功'})
    }else{
        res.send({code:1,msg:'登录失败'})
    }
})

// 用户必须登录之后才能请求/product/list接口
app.get('/product/list',(req,res)=>{
    res.send({code:0,msg:'产品列表'})
})

app.get('/user/quit',(req,res)=>{
    //退出
    req.session.destroy()  //清除当前会话的内容
    res.send({code:0,msg:'退出成功'})
})

app.listen(8282,()=>{
    console.log('server is on 8282')
})