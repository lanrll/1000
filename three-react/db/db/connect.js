const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/goodsmanage', {useNewUrlParser: true},(err)=>{
	if(!err){
		console.log("连接成功");
	}
	else{
		console.log("连接失败")
	}
});

module.exports = mongoose;