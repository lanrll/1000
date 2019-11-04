import React, { Component } from 'react'
import mobileP from './phone.scss'

export default class mobilePhone extends Component {
    render() {
        return (
            <div>
                <div className="main_title hd">
                    <ul>
                        <li className="on">账户密码</li>
                        <li>手机验证码</li>
                    </ul>
                </div>
                <div className="hd">
                    <div className="main">
                        <div>
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
                        </div>
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
