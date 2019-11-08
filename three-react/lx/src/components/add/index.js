import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd';
import {add} from '../../api'
@Form.create()
class AddForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
           add(values.username,values.age).then((res)=>{
               if(res.data.status===0){
                   this.props.history.push("/home/list")
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
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input
              placeholder="name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your age!' }],
          })(
            <Input
              placeholder="age"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            添加
          </Button>
        </Form.Item>
      </Form>
      </Card>
    );
  }
}
export default AddForm;