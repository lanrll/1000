import React, { Component } from 'react'
import './header.scss'
import {NavLink,Route} from 'react-router-dom';
export default class Header extends Component {
    back(){
        window.history.go(-1)
    }
    render() {
        return (
            <div>
                <div className="nav-bar fixed">
                    <div className="container">
                        <div>
                            <a className="icon back" onClick={this.back.bind(this)}></a>
                        </div>
                        <div className="title ellipsis">{this.props.title}</div>
                        <div>
                            <NavLink to="/home" className="icon home"></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
