import React, { Component } from 'react'
import axios from 'axios';
import './index.scss';
export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            topData:[],
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572609460&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=13C5962199EB53E237F4415D7B51BF1E&key=shuqiapi&_=1572609460516').then(res => {
            console.log(res)
            this.setState({
                topData: res.data.data.module
            })
        })
    }
    render() {
        if(this.state.topData.length == 0) return <h1>未找到！！！</h1>
        console.log(this.state.topData[0].icon_img_url)
        let list = this.state.topData
        let base = 0.775
        return (
            <>
                <header>
                    <a>
                        <img src={require("./logo192.png")} />
                    </a>
                    <a>
                        <span>懒人小说</span>
                    </a>
                    <a >
                        <img src={require("./logo192.png")} />
                    </a>
                    <a><span className="fa fa-book"></span></a>
                    <a><span className="fa fa-search"></span></a>
                </header>
                <nav>
                    {
                        list[0].content.map((item,index) => {
                            return ( <a key={item.url}>
                                        <div>
                                            <img src={list[0].icon_img_url} style={{top:-index*base+'rem'}}/>
                                        </div>
                                        <p>{item.title}</p>
                                    </a>)
                        })
                    }
                   
                    {/* <a>
                        <div>
                            <img src={img} style={{top: -1*base+'rem'}}/>
                        </div>
                        <p>分类</p>
                    </a>
                    <a>
                        <div>
                            <img src={img} style={{top: -2*base+'rem'}}/>
                        </div>
                        <p>分类</p>
                    </a>
                    <a>
                        <div>
                            <img src={img} style={{top: -3*base+'rem'}}/>
                        </div>
                        <p>分类</p>
                    </a>
                    <a>
                        <div>
                            <img src={img}style={{top: -4*base+'rem'}}/>
                        </div>
                        <p>分类</p>
                    </a> */}
                </nav>
                <div className="banner">
                    <a>banner</a> 
                </div>
                <div className="showContainer">
                    <div className="title">
                        <p>meidasd</p>
                    </div>
                    <div className="content">
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                    </div>
                    <div className="exchange">
                        <span>换一换</span><span className="fa fa-refresh"></span>
                    </div>
                </div>
                <div className="showContainer">
                <div className="title">
                        <p>meidasd</p>
                    </div>
                    <div className="content">
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                        <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a>
                    </div>
                    <div className="contentList">
                        <a>
                            <div>
                                <span>aafsrgeath</span>
                                <div>
                                    <span>连载</span>
                                    <span>现代言情</span>
                                </div>
                            </div>
                            <p>aoksmvoifaslkgoasdfngajsvponaosidjgviasjmdvma;simviazhsdkfvchnzsdgh cilaj,sdf;o cj,asodcfoash</p>
                        </a>
                        <a>
                            <div>
                                <span>aafsrgeath</span>
                                <div>
                                    <span>连载</span>
                                    <span>现代言情</span>
                                </div>
                            </div>
                            <p>aoksmvoifaslkgoasdfngajsvponaosidjgviasjmdvma;simviazhsdkfvchnzsdgh cilaj,sdf;o cj,asodcfoash</p>
                        </a>
                        <a>
                            <div>
                                <span>aafsrgeath</span>
                                <div>
                                    <span>连载</span>
                                    <span>现代言情</span>
                                </div>
                            </div>
                            <p>aoksmvoifaslkgoasdfngajsvponaosidjgviasjmdvma;simviazhsdkfvchnzsdgh cilaj,sdf;o cj,asodcfoash</p>
                        </a>
                    </div>
                    <div className="exchange">
                        <span>换一换</span><span className="fa fa-refresh"></span>
                    </div>
                </div>

            </>
        )
    }
}
