import React, { Component } from 'react'
import './rank1.scss'
import Header from '../public/header';
import Footer from '../public/footer';
import {NavLink} from 'react-router-dom';
export default class rank extends Component {
    render() {
        return (
            <div>
                <Header title="排行" />
                <div>
                    <ul className="rank-ul">
                        <li className="bktouch">
                            <NavLink to="/rank/list" >
                                <div className="rank-icon"></div>
                                <div className="rank-info">
                                    <h3>精品畅销榜</h3>
                                    <p>全站最畅销，内容丰富超有料</p>
                                </div>
                            </NavLink>
                            <div className="seperator"></div>
                        </li>
                        <li className="bktouch">
                        <NavLink to="/rank/list" >
                                <div className="rank-icon sec"></div>
                                <div className="rank-info">
                                    <h3>狂热点击榜</h3>
                                    <p>最最受小伙伴钟爱的就在这了</p>
                                </div>
                            </NavLink>
                            <div className="seperator"></div>
                        </li>
                        <li className="bktouch">
                        <NavLink to="/rank/list" >
                                <div className="rank-icon thr"></div>
                                <div className="rank-info">
                                    <h3>新书潜力榜</h3>
                                    <p>你想要的这里都有哦</p>
                                </div>
                            </NavLink>
                            <div className="seperator"></div>
                        </li>
                        <li className="bktouch">
                        <NavLink to="/rank/list" >
                                <div className="rank-icon for"></div>
                                <div className="rank-info">
                                    <h3>大神力作榜</h3>
                                    <p>最热爽文这边看</p>
                                </div>
                            </NavLink>
                            <div className="seperator"></div>
                        </li>
                        <li className="bktouch">
                        <NavLink to="/rank/list" >
                                <div className="rank-icon fif"></div>
                                <div className="rank-info">
                                    <h3>经典完结榜</h3>
                                    <p>红文热文，本本超神</p>
                                </div>
                            </NavLink>
                            <div className="seperator"></div>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}
