import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {withRouter} from "react-router-dom"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@withRouter
 class Main extends Component {
  go=({item,key})=>{
      console.log(this.props)
      this.props.history.push(key)
  }
  render() {
    return (
      <div>
          <Layout>
            <Header className="header">
                <div style={{color:"#FFF"}}>
                我的管理系统
                </div>
            </Header>
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                selectedKeys={this.props.location.pathname}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="/home/dashboard" onClick={this.go}>仪表盘</Menu.Item>
                    <Menu.Item key="/home/list" onClick={this.go}>信息管理</Menu.Item>
                    <Menu.Item key="/home/setting" onClick={this.go}>设置</Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                {this.props.children}
                </Content>
            </Layout>
            </Layout>
        </Layout>
      </div>
    )
  }
}
export default Main