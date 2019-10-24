import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let {list,all} = this.props
        return (
            <div>
                <div>
                    <input type="checkbox" checked={all} onChange={this.props.changeAll}></input>
                </div>
            <ul>
               {    
                   list.map(item => {
                       return <li key={item.id}>
                       <input type="checkbox" checked={item.flag} onChange={this.props.change.bind(this,item.id)}/>-----
                       {item.id}-----{item.text}------
                       <input type="button" value="修改" onClick={this.props.modify.bind(this,item.id)}/>-----
                       <input type="button" value="删除" onClick={this.props.del.bind(this,item.id)}/>
                       </li>
                   })
               } 
            </ul>
            </div>
        )
    }
}
