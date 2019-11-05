import React, { Component } from 'react'
import axios from 'axios'
import CL from './CL.scss'
import Header from '../public/header'
import {NavLink} from 'react-router-dom';

export default class classifyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            flag: 0,
            flag1: 0,
            flag2: 0
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572838148715").then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
    getA=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572838148715").then((res) => {
            this.setState({
                list: res.data.data,
                flag: 0
            })
        }) 
    }
    getB=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E5%94%AF%E7%BE%8E%E7%AB%A5%E8%AF%9D&sort=monthHot&_=1572848955324").then((res) => {
            this.setState({
                list: res.data.data,
                flag: 1
            })
        }) 
    }
    getC=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E6%82%B2%E6%83%85%E8%99%90%E6%96%87&sort=monthHot&_=1572852696434").then((res) => {
            this.setState({
                list: res.data.data,
                flag: 2
            })
        }) 
    }
    getD=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%BD%91%E7%BB%9C%E6%83%85%E7%BC%98&sort=monthHot&_=1572852758416").then((res) => {
            this.setState({
                list: res.data.data,
                flag: 3
            })
        }) 
    }
    getE=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E6%80%BB%E8%A3%81&sort=monthHot&_=1572852773280").then((res) => {
            this.setState({
                list: res.data.data,
                flag: 4
            })
        }) 
    }
    getF=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E5%AE%9D%E5%AE%9D&sort=monthHot&_=1572852787902").then((res) => {
            this.setState({
                list: res.data.data,
                flag:5
            })
        }) 
    }
    getG=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E7%88%BD%E6%96%87&sort=monthHot&_=1572852802560").then((res) => {
            this.setState({
                list: res.data.data,
                flag:6
            })
        }) 
    }
    getH=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E5%AE%A0%E6%96%87&sort=monthHot&_=1572852815366").then((res) => {
            this.setState({
                list: res.data.data,
                flag:7
            })
        }) 
    }
    getI=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E8%85%B9%E9%BB%91&sort=monthHot&_=1572852830460").then((res) => {
            this.setState({
                list: res.data.data,
                flag:8
            })
        }) 
    }
    getJ=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E6%83%85%E6%84%9F&sort=monthHot&_=1572852842641").then((res) => {
            this.setState({
                list: res.data.data,
                flag:9
            })
        }) 
    }
    getK=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&tag=%E7%8E%B0%E4%BB%A3&sort=monthHot&_=1572852854052").then((res) => {
            this.setState({
                list: res.data.data,
                flag:10
            })
        }) 
    }
    getL=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=1&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572852906254").then((res) => {
            this.setState({
                list: res.data.data,
                flag1:1
            })
        }) 
    }
    getM=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=2&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572853037680").then((res) => {
            this.setState({
                list: res.data.data,
                flag1:2
            })
        }) 
    }
    getN=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=3&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572853058896").then((res) => {
            this.setState({
                list: res.data.data,
                flag1:3
            })
        }) 
    }
    getO=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=updateTime&_=1572853139223").then((res) => {
            this.setState({
                list: res.data.data,
                flag2:1
            })
        }) 
    }
    getP=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&status=2&_=1572853161775").then((res) => {
            this.setState({
                list: res.data.data,
                flag2:2
            })
        }) 
    }
    getQ=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572838148715").then((res) => {
            this.setState({
                list: res.data.data,
                flag1: 0
            })
        }) 
    }
    getR=() => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1572838148715").then((res) => {
            this.setState({
                list: res.data.data,
                flag2: 0
            })
        }) 
    }
    render() {
        return (
            <div className="box2">
                <Header />
                <div className="filters">
                    <div className="tags-wrapper">
                    <ul className="tags">
                        <li className={this.state.flag === 0 ? "active" : ""} onClick={this.getA}>全部</li>
                        <li className={this.state.flag === 1 ? "active" : ""} onClick={this.getB}>唯美童话</li>
                        <li className={this.state.flag === 2 ? "active" : ""} onClick={this.getC}>虐文</li>
                        <li className={this.state.flag === 3 ? "active" : ""} onClick={this.getD}>网游</li>
                        <li className={this.state.flag === 4 ? "active" : ""} onClick={this.getE}>总裁</li>
                        <li className={this.state.flag === 5 ? "active" : ""} onClick={this.getF}>宝宝</li>
                        <li className={this.state.flag === 6 ? "active" : ""} onClick={this.getG}>爽文</li>
                        <li className={this.state.flag === 7 ? "active" : ""} onClick={this.getH}>宠文</li>
                        <li className={this.state.flag === 8 ? "active" : ""} onClick={this.getI}>腹黑</li>
                        <li className={this.state.flag === 9 ? "active" : ""} onClick={this.getJ}>情感</li>
                        <li className={this.state.flag === 10 ? "active" : ""} onClick={this.getK}>现代</li>
                    </ul>
                    </div>
                    <div className="tags-wrapper">
                        <ul className="words">
                            <li className={this.state.flag1 === 0 ? "active" : ""} onClick={this.getQ}>全部</li>
                            <li className={this.state.flag1 === 1 ? "active" : ""} onClick={this.getL}>20万字</li>
                            <li className={this.state.flag1 === 2 ? "active" : ""} onClick={this.getM}>20-100万字</li>
                            <li className={this.state.flag1 === 3 ? "active" : ""} onClick={this.getN}>100万字以上</li>
                        </ul>
                    </div>
                    <div className="states-wrapper">
                        <ul className="states">
                            <li className={this.state.flag2 === 0 ? "active" : ""} onClick={this.getR}>最热</li>
                            <li className={this.state.flag2 === 1 ? "active" : ""} onClick={this.getO}>最新</li>
                            <li className={this.state.flag2 === 2 ? "active" : ""} onClick={this.getP}>完结</li>
                        </ul>
                    </div>
                </div>
                <ul className="list-ul">
                    {
                        this.state.list.map((item) => {
                            return <li className="list-li">
                                <NavLink to="/detail">
                                    <div className="big-wrap">
                                        <div className="listbook-cove">
                                            <img className="book-cover-img" src={item.cover} />
                                        </div>

                                        <div className="listbook-info">
                                            <h3>{item.title}</h3>
                                            <p>{item.author}</p>
                                            <p className="text">{item.desc}</p>
                                            <div className="book-tag">
                                                {item.status === 1 ? <span className="wj">完结</span> : <span className="lz">连载</span>}
                                                <span>{Math.ceil(item.words / 10000)}万字</span>
                                                {
                                                    item.tags.split(',').map((i) => {
                                                        return <span>{i}</span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        })

                    }
                </ul>
            </div>
        )
    }
}
