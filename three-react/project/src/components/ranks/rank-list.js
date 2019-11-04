import React, { Component } from 'react'
import './rank-list.scss'
import axios from 'axios'
import Header from '../public/header'

export default class rankList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            title: '新书排行'
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5=&_=1572836934219").then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="contain">
                    <ul className="tabs">
                        <li className="tab-item on">男生</li>
                        <li className="tab-item">女生</li>
                    </ul>
                </div>
                <div className="block">
                    <div className="ul-container">
                        <ul className="listsmall-ul">
                            {
                                this.state.list.map((item) => {
                                    return <li>
                                        <a className="sc-sjzs">
                                            <div className="big-wrap">
                                                <div className="listbook-cove">
                                                    <img className="book-cover-img" src={item.cover} />
                                                </div>
                                                <div className="listbook-info">
                                                    <h3 className="title">{item.title}</h3>
                                                    <div className="author_wrap">
                                                        <div className="authorinfo">
                                                            <p className="author">{item.author}</p>
                                                        </div>
                                                        <span className="view"><span className="views"></span>{Math.ceil(item.words / 10000)}万</span>
                                                    </div>
                                                    <div className="book-tag">
                                                        {item.status === 1 ? <span className="wj">完结</span> : <span className="lz">连载</span>}
                                                        {
                                                            item.tags.split(',').map((i) => {
                                                                return <span>{i}</span>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
