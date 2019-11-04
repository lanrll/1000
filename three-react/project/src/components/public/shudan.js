import React, { Component } from 'react'
import  './shudan.scss'
import {NavLink} from 'react-router-dom';
export default class book extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                < ul className="sdlist-ul" >
                    {
                        this.props.data.map((item) => {
                            return (
                                <li className="sdlist-li">
                                    <NavLink to="/book/list">
                                        <div className="sdwrap">
                                            <div className="sdlist-info">
                                                <h3>{item.title}</h3>
                                                <p>{item.sdesc}</p>
                                                <div className="book-tag">
                                                    {
                                                        item.tags.split(',').map((i) => {
                                                            return <span>{i}</span>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="sdlist-cove">
                                                <div className="bg1">
                                                    <img className="book-cover-img" src={item.items[0].cover} />
                                                </div>
                                                <div className="bg2">
                                                    <img className="book-cover-img" src={item.items[1].cover} />
                                                </div>
                                                <div className="bg3">
                                                    <img className="book-cover-img" src={item.items[2].cover} />
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
