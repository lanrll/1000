var express = require('express');
var router = express.Router();
var mongoose = require("../db/connect")
const crypto = require('crypto'); //加密模块 
const jwt = require("jsonwebtoken");
var User = mongoose.model("users",{"username":String,"password":String},"users");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册
/**
 * @api {post} /reg 注册用户
 * @apiName registeruser
 * @apiGroup register
 *
 * @apiParam {String} username User's name
 * @apiParam {String} password User's password
 *
 * @apiSuccess {Number} status 0 成功   -1 失败

 */
router.post("/reg",(req,res)=>{  // /users/reg
	let {username,password} = req.body;
	User.find({username}).then((response)=>{
		if(response.length>0){  //表示用户已经存在
			res.json({
				status:-1
			})
		}
		else{
			const hash = crypto.createHmac('sha256', password)  //对password进行加密
                   .update('haha')
                   .digest('hex');
			new User({username,password:hash}).save().then(()=>{ //注册
				res.json({
					status:0
				})
			})
		}
	})
	
})
//退出
router.post("/quit",(req,res)=>{
	req.session.user=null;
	if(req.cookies.token){
		res.cookie("token","")
	}
	res.json({
		status:0
	})
})
//得到用户名
router.post('/user',(req,res)=>{
	res.json({
		user:req.session.user?"你好"+ req.session.user:""
	})
})
//登录
router.post("/login",(req,res)=>{
	let {username,password} = req.body;
	console.log(username,password)

	const hash = crypto.createHmac('sha256', password)  //对password进行加密
                   .update('haha')
                   .digest('hex');
    User.find({username,password:hash}).then((response)=>{
    	  if(response.length>0){
    	  	req.session.user = username;  //把登录成功的用户名放到session里
    	  	//制作令牌
    	  	var token = jwt.sign({username,time:Date.now()},"haha",{expiresIn:10000});
    	  	res.cookie("token",token);
    	  	res.json({   //登录成功
    	  		status:0,
    	  		data:{
    	  			login:true,
    	  			token
    	  		}
    	  	})
    	  }
    	  else
    	  {
    	  	res.json({  //登录失败
    	  		status:0,
    	  		data:{
    	  			login:false
    	  		}
    	  	})
    	  }
    })
})
module.exports = router;
