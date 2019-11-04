import React, { Component } from 'react'
import  './user.scss'
import Header from '../public/header'

export default class userInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            sign:true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                <div className="main_title hd">
                    <ul>
                        <li className={this.state.sign ? 'on':'' } onClick={e => {this.setState({sign:true})}} >账户密码</li>
                        <li className={!this.state.sign ? 'on':'' } onClick={e => {this.setState({sign:false})}} >手机验证码</li>
                    </ul>
                </div>
                <div className="hd">
                    <div className="main">
                        {
                            this.state.sign ? (<div>
                                <div className="login-input-wrap">
                                    <div className="bold">账户</div>
                                    <input type="text" placeholder="请输入手机号/邮箱" name="" />
                                </div>
                                <div className="login-input-wrap">
                                    <div className="bold">密码</div>
                                    <input type="password" placeholder="请输入密码" name="" />
                                    <div className="can_see can_see_it"></div>
                                </div>
                                <div className="error-info"></div>
                            </div>): (<div>
                            <div className="login-input-wrap">
                                <div className="bold">手机号</div>
                                <input type="text" placeholder="请输入手机号" name="" />
                            </div>
                            <div className="login-input-wrap">
                                <div className="bold">验证码</div>
                                <input type="password" name="" />
                                <div class="vcode_parent">
                                    <span class="get_vcode">
                                        获取验证码
	                                </span>
                                </div>
                            </div>
                            <div className="error-info"></div>
                        </div>)
                        }
                        
                        <div className="login-service">
                            <div className="service-procotol">
                                <input type="checkbox"></input> 同意<span>《阿里文学用户服务协议》</span>和<span>《隐私服务协议》</span>
                            </div>
                        </div>
                        <div className="btn">
                            <div className="login-button">
                                登录
                            </div>
                        </div>
                    </div>
                </div>
                <div className="link-dom">
                    <div className="text-gray-link">忘记密码</div>
                    <div className="text-green-link">注册</div>
                </div>
            </div>
        )
    }
}
