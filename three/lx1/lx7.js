'use strict';
const nodemailer = require('nodemailer');
const base = require('../base.js');
let num = base.randomNum(1000, 10000);
// create reusable transporter object using the default SMTP transport
// 邮箱服务器配置

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user:'1020722526@qq.com', // generated ethereal user
        pass: 'qpulwykwqgmebbbi' // generated ethereal password
    }
});

// send mail with defined transport object
let info =  transporter.sendMail({
    from: '"lxh" <1020722526@qq.com>', // sender address
    to: '1020722526@qq.com', // list of receivers
    subject: '学习发送邮件', // Subject line
    text: 'Hello world?', // plain text body
    html: `<h1>Hello world?</h1>
          <br>
          <p>验证码</p>
          <h2>${num}</h2>
          ----html` // html body
}).then(result=>{
    console.log(result)
})