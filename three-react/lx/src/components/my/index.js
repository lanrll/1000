import React, { Component } from 'react'
import { Table, Card,Button,Modal,message } from 'antd';
import {getPageList,remove,quit} from '../../api'

export default class List extends Component {
  constructor(props){
    super(props);
		this.state ={
			user:sessionStorage.getItem('user')
		}
  }
	quit(){
		// this.props.history.push('')
		quit().then(res => {
			if(res.data.status == 0){
				sessionStorage.setItem('user','')
				sessionStorage.setItem('token','')
				this.setState({
					user:''
				})
			}
		})
	}
	goLogin(){
		this.props.history.push('/login')
	}
	goReg(){
		this.props.history.push('/reg')
	}
  render() {
		// console.log(sessionStorage.getItem('user'))
		// console.log(this.state)
    return (
      <div>
          <Card bordered={false} title="个人中心" >
						{
							this.state.user ? 
							(<p>欢迎{this.state.user}
							<br/>
							<Button type="danger" onClick={this.quit.bind(this)}>注销</Button>
							</p>) : (<p>你还未登录!!!,
							<br/>
							<Button type="primary" onClick={this.goLogin.bind(this)} >去登录</Button>
							<br/><Button  type="primary" onClick={this.goReg.bind(this)}>去注册</Button></p>)
						} 
           </Card>
      </div>
    )
  }
}
