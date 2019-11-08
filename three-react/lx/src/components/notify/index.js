import React, { Component } from 'react'
import { List, Avatar,Card, Button,Badge,Spin } from 'antd';
import {connect} from 'react-redux'
 import actionCreator from '../../store/actionCreator'
 var mapState=(state)=>({
     length:state.data.filter((item)=>!item.read).length,
     data:state.data,
     loading:state.loading
 })
@connect(mapState,actionCreator)
 class Notify extends Component {
  render() {
     
      let {data,length} = this.props;
      console.log(this.props)
    return (
      <div>
         <Spin spinning={this.props.loading}>
          <Card bordered={false} title="通知中心"  extra={<Button disabled={length===0} onClick={()=>this.props.allRead()}>标记为所有已读</Button>}>
           <List  itemLayout="horizontal" dataSource={data}
						renderItem={item => (
						<List.Item extra={<Button onClick={this.props.readById.bind(this,item.id)}>标位已读</Button>}>
						<List.Item.Meta
						avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						title={<a href="https://ant.design">{item.title} <Badge dot={!item.read} /></a>}
						description="Ant Design, a design language for background applications, is refined by Ant UED Team"
					/>
      </List.Item>
    )}
  />
     </Card>
     </Spin>
      </div>
    )
  }
}

export default Notify
