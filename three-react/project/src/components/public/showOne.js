import React, { Component } from 'react'
import './showOne.scss'
import {NavLink,withRouter} from 'react-router-dom';
 class showOne extends Component {
    constructor(props) {
        super(props);
    }
    give(val){
        console.log(val)
        this.props.history.push({pathname:'/detail',state:{...val}})
    }
    render() {
        return (
            <div className="showContainer">
                <div className="title">
                    <p>{this.props.data.m_s_name}</p>
                </div>
                <div className="content" >
                    {
                        this.props.data.content.map(item => {
                            return(
                                    <a onClick={this.give.bind(this,item)} key={item.bid} >
                                        <div>
                                            <img src={item.book_cover} />
                                        </div>
                                        <p>{item.bookname}</p>
                                        <p>{item.author_name}</p>
                                    </a>
                            )
                        })
                    }
                </div>
                <div className="exchange" onClick={this.props.changeData} >
                    <span>换一换</span><span className="fa fa-refresh"></span>
                </div>
            </div>
        )
    }
}

export default withRouter(showOne)