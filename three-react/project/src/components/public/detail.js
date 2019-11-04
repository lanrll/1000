import React, { Component } from 'react'
import detail1 from './detail.scss'
import {NavLink} from 'react-router-dom';
export default class Detail extends Component {
    render() {
        let {data} = this.props 
        return (
            <div className="box2">
                <ul className="list-ul">
                    <li className="list-li">
                        <NavLink to="/detail">
                            <div className="big-wrap">
                                <div className="listbook-cove">
                                    <img className="book-cover-img" src={data.book_cover} />
                                </div>
                            <div className="listbook-info">
                                <h3>{data.bookname}</h3>
                                <p>{data.author_name}</p>
                                <p className="text">{data.book_info}</p>
                                <div className="book-tag">
                                    <span className="wj">{data.stat_name}</span>
                                    <span>{Math.ceil(data.size / 10000)}万字</span>
                                    <span>{data.tag[0]}</span>
                                    <span>{data.tag[1]}</span>
                                </div>
                            </div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
