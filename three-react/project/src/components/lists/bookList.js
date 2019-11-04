import React, { Component } from 'react'
import  './bookList.scss'
import axios from 'axios'
import Header from '../public/header';
import Footer from '../public/footer';
export default class bookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            info: ''
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sddetail&sdid=27826&p=1&shuqi_h5=&onlyCpBooks=1&_=1572834890666").then((res) => {
            this.setState({
                list: res.data.data,
                info: res.data.info.sdesc
            })
            console.log(this.state.list, this.state.info)
        })
    }
    render() {
        return (
            <div>
                <Header title=""/>
                <section className="sdlistbox">
                    <div className="sdinofbox">
                        <p className="js_sdinfo sdinfo clamp5">{this.state.info}</p>
                    </div>
                    <ul className="listsmall-ul">
                        {
                            this.state.list.map((item) => {
                                return <li className="listBig-li">
                                    <a>
                                        <div className="big-wrap">
                                            <div className="listbook-cove">
                                                <img className="book-cover-img" src={item.cover} />
                                            </div>
                                            <div className="listbook-info">
                                                <h3>{item.title}</h3>
                                                <p>{item.author}</p>
                                                <div className="book-tag">
                                                    {item.status === 0 ? <span className="wj">完结</span> : <span className="lz">连载</span>}<span>{Math.ceil(item.words / 10000)}万字</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <p className="js_sdtext sddisc clamp3">{item.desc}<i className="arr show"></i></p>
                                </li>
                            })

                        }
                    </ul>
                </section>
                <Footer />
            </div>
        )
    }
}
