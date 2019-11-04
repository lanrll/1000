import React, { Component } from 'react'
import S from './s.scss'
import Header from '../public/header'
import Footer from '../public/footer'
import axios from 'axios'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_payreco&id=8000000&qtf=shuqiApp&qtn=cpSearchReplace_sug&nums=8&shuqi_h5=&_=1572861048979").then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
    change = () => {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_payreco&id=8000000&qtf=shuqiApp&qtn=cpSearchReplace_sug&nums=8&shuqi_h5=&_=1572861048700").then((res) => {
            this.setState({
                list: res.data.data
            })
        })
    }
    search = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <Header title="搜素" />
                <div className="schHead">
                    <div className="schBlock">
                        <span className="search_icon"></span>
                        <input className="schInner" placeholder="书名/作者/关键词" onKeyUp={this.search}/>
                    </div>
                </div>
                <div className="hotrecomm_wrap">
                    <ul className="hotrecomm">
                        {
                            this.state.list.map((item) => {
                                return <li><div className="ellipsis">{item.title}</div></li>
                            })
                        }
                    </ul>
                </div>
                <div className="modular-link">
                    <span className="modular-text" onClick={this.change}>换一换</span>
                    <span className="refresh"></span>
                </div>
                <Footer />
            </div>
        )
    }
}
