import React, { Component } from 'react'
import Detail from './detail';
import {NavLink} from 'react-router-dom';
export default class showThree extends Component {
    render() {
        let {data} = this.props
        return (
            <div className="showContainer">
                <div className="title">
                    <p>{data.m_s_name}</p>
                </div>
                <Detail data={this.props.data.content[0]} />
                {
                    data.content.map((item,index) => {
                        return (
                            <div className="contentList" key={item.bid}>
                                <NavLink to="/deatil" >
                                    <div>
                                        <span>{item.bookname}</span>
                                        <div>
                                            <span>{item.stat_name}</span>
                                            <span>{item.class_name}</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
                 <div className="exchange" onClick={this.props.changeData}>
                    <span>查看跟多</span>
                </div>
            </div>
        )
    }
}
