import React, { Component } from 'react'
import { Table, Card,Button,Modal,message } from 'antd';
import {getPageList,remove} from '../../api'

export default class List extends Component {
  constructor(props){
    super(props);
    this.state={
			visible:false,
			loading:false,
			id:-1, //要删除的记录的id
      data:[],
      count:0,
      columns : [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => {
            console.log(record)
          return  (
            <span>
              <a onClick={this.remove.bind(this,record.key)}>Delete</a>
            </span>
          )
            },
        },
      ]
    }
  }
  remove(id){
      //根据id 删除记录
			this.setState({
				visible:true,
				id
			})
      // remove(id).then((res)=>{
      //     if(res.data.status===0){
      //         this.getData(1,this.state.count);
      //     }
      // })
  }
	handleOk=()=>{
	    this.setState({
	      loading:true
	    },()=>{
	       //根据id 删除记录
	      remove(this.state.id).then((res)=>{
	          if(res.data.status===0){
	              this.getData(1,this.state.count);
	          }
	      }).finally(()=>{
	        setTimeout(()=>{
	          this.setState({
	             visible:false,
	             loading:false
	          })
	          message.info("删除成功啦")
	        },2000)
	          
	      })
	    })
	 }
	handleCancel=()=>{
	  this.setState({
	    visible:false
	  })
	}
  componentDidMount(){
      this.getData(1,10);
  }
  page=(page,pageSize)=>{
    this.getData(page,pageSize);
  }
  getData(page,pageSize){
      getPageList(page,pageSize).then((res)=>{
          if(res.data.status===0){
            var data= res.data.list.map((item)=>{
              return {
                key:item._id,
                name:item.name,
                age:item.age
              }
            })
            this.setState({
              data,
              count:res.data.count
            })
          }
          
      })
  }
	add=()=>{
	  this.props.history.push("/home/add")
	}
  render() {
    return (
      <div>
					<Modal
					 maskClosable={false}
					  title="Basic Modal"
					  visible={this.state.visible}
					  onOk={this.handleOk}
					  onCancel={this.handleCancel}
					  confirmLoading={this.state.loading}
					>
					  <p>确定要删除吗?</p>
					</Modal>
					共{this.state.count}条
          <Card bordered={false} title="学生列表" extra={<Button onClick={this.add}>添加</Button>}>
          <Table columns={this.state.columns} dataSource={this.state.data}
           pagination={{total:this.state.count,pageSize:4,onChange:this.page}}/>
           </Card>
      </div>
    )
  }
}
