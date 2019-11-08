import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd';
import {login} from '../../api'
@Form.create()
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
             login(values.username,values.password).then((res)=>{
                    console.log(res)
                if(res.data.status===0 && res.data.data.login){
                    sessionStorage.setItem("token",res.data.data.token);
                    sessionStorage.setItem("user",values.username);
                    this.props.history.push("/")
                }
             })
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card bordered={false} title="我的管理系统" className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
      </Card>
    );
  }
}


export default NormalLoginForm;