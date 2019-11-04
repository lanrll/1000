import React, { Component } from 'react'
import Shudan from './shudan';
export default class showThree extends Component {
    render() {
        let {data} = this.props
        return (
            <div className="showContainer">
                <div className="title">
                    <p>{data.m_s_name}</p>
                </div>
                 <Shudan data={data.content.data}/>
                 <div className="exchange" onClick={this.props.changeData}>
                    <span>查看更多</span>
                </div>
            </div>
        )
    }
}
