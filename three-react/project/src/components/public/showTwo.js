import React, { Component } from 'react'
import './showOne.scss'
import {NavLink} from 'react-router-dom';
export default class showTwo extends Component {
    render() {
        let {data} = this.props
        // console.log(this.props)
        return (
            <div className="showContainer"  >
                <div className="title">
                    <p>{data.m_s_name}</p>
                </div>
                <div className="content">
                    {
                        data.content.map((i,index) => {
                            return (
                                    index < 4 ? 
                                    <NavLink to="/detail" key={i.bid} >
                                        <div>
                                            <img src={i.book_cover} />
                                        </div>
                                        <p>{i.bookname}</p>
                                        <p>{i.author_name}</p>
                                    </NavLink> : ''
                            )
                        })
                    }
                </div>
                <div className="contentList">
                    {
                        data.content.map((i,index) => {
                            return (
                                index > 3 ?
                                <NavLink to="/deatil" key={i.bid} >
                                    <div>
                                        <span>{i.bookname}</span>
                                        <div>
                                            <span>{i.stat_name}</span>
                                            <span>{i.class_name}</span>
                                        </div>
                                    </div>
                                    <p>{i.book_info}</p>
                                </NavLink> : ''
                            )
                        })
                    }
                </div>
                <div className="exchange" onClick={this.props.changeData}>
                    <span>换一换</span><span className="fa fa-refresh"></span>
                </div>
            </div>
        )
    }
}
