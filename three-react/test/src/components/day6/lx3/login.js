import React, { Component } from 'react'
import axios from 'axios'
export default class login extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            user:'',
            pwd: '',
        }
    }
    user(e){
        this.setState({
            user:e.target.value
        })
    }
    pass(e){
        this.setState({
            pwd: e.target.value
        })
    }
    login(){
        let {user,pwd} = this.state
        console.log(this.props.history)
        axios({
            url:"http://47.100.93.47:7879/user/login",
            method: 'POST',
            data:{
                'username':user,
                'pwd':pwd,
            }
        }).then(res => {
            console.log(res)
            if(res.data.code == 0){
                localStorage.setItem('token',res.data.token)
                this.props.history.go(-1)
            }else{
                
            }
        })
        // this.props.history.goBack()
    }
    qiut(){
        axios('http://47.100.93.47:7879/user/quit').then(res => {
            console.log(res)
            localStorage.removeItem('token')
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.user} onChange={this.user.bind(this)}/>
                <br/>
                <input type="password" value={this.state.pwd} onChange={this.pass.bind(this)} />
                <br/>
                <input type="button" value="登录" onClick={this.login.bind(this)}/>
                <input type="button" value="退出" onClick={this.qiut.bind(this)} />
            </div>
        )
    }
}
