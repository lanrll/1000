import React, { Component } from 'react'
import axios from 'axios';
// import fetch from 'fetch';
import './index.scss';
export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            topData:[],
            qualityRecommendation:[],
            sex:[]
        }
    }
    componentDidMount(){
        this.getTopData()
    }
    getTopData(){
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572609460&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=13C5962199EB53E237F4415D7B51BF1E&key=shuqiapi&_=1572609460516',).then(res => {
            console.log(res)
            let data = res.data.data.module
            this.setState({
                topData: data,
                qualityRecommendation: data[3]
            })
        })
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572660313&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=5093EF14E93CE838427C2FA83FC37A34&key=shuqiapi&_=1572660313824').then(res => {
            // console.log(res)
            let data = res.data.data.module
            this.setState({
                sex:[data[3],data[8]]
            })
        })
    }
    changeData(){
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572660884&type=2&resetcache=&func_id=19&orderid=6&mid=6&lmkTxt=index&sign=E12EC27DE65DF28D94D2DD5D332AD732&key=shuqiapi&_=1572660884964').then(res => {
            console.log(res)
            this.setState({
                // topData: res.data.data.module,
                qualityRecommendation:res.data.data.module[0]
            })
        })

    }
    render() {
        if(this.state.topData.length == 0 || this.state.sex.length ==0) return <h1>未找到！！！</h1>
        // console.log(this.state.qualityRecommendation)
        let topData = this.state.topData
        let sex = this.state.sex
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
                        topData[0].content.map((item,index) => {
                            return ( <a key={item.url}>
                                        <div>
                                            <img src={topData[0].icon_img_url} style={{top:-index*base+'rem'}}/>
                                        </div>
                                        <p>{item.title}</p>
                                    </a>)
                        })
                    }
                </nav>
                <div className="banner">
                    <a><img src={topData[1].content[0].image_url} /></a> 
                </div>
                <div className="showContainer">
                    <div className="title">
                        <p>{this.state.qualityRecommendation.m_s_name}</p>
                    </div>
                    <div className="content" >
                        {
                            this.state.qualityRecommendation.content.map(item => {
                                return(
                                        <a key={item.bid}>
                                            <div>
                                                <img src={item.book_cover} />
                                            </div>
                                            <p>{item.bookname}</p>
                                            <p>{item.author_name}</p>
                                        </a>
                                )
                            })
                        }
                        {/* <a>
                            <div>
                                <img src={require("./logo192.png")} />
                            </div>
                            <p>asdfafsdgadf</p>
                            <p>asg</p>
                        </a> */}
                    </div>
                    <div className="exchange" onClick={this.changeData.bind(this)} >
                        <span>换一换</span><span className="fa fa-refresh"></span>
                    </div>
                </div>
                {
                    sex.map(item => {
                        return (
                            <>
                            <div className="showContainer" key={item.id} >
                                <div className="title">
                                        <p>{item.m_s_name}</p>
                                    </div>
                                    <div className="content">
                                        {
                                            item.content.map((i,index) => {
                                                return (
                                                        index < 4 ? 
                                                        <a key={i.bid} >
                                                            <div>
                                                                <img src={i.book_cover} />
                                                            </div>
                                                            <p>{i.bookname}</p>
                                                            <p>{i.author_name}</p>
                                                        </a> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="contentList">
                                        {
                                            item.content.map((i,index) => {
                                                return (
                                                    index > 3 ?
                                                    <a key={i.bid} >
                                                        <div>
                                                            <span>{i.bookname}</span>
                                                            <div>
                                                                <span>{i.stat_name}</span>
                                                                <span>{i.class_name}</span>
                                                            </div>
                                                        </div>
                                                        <p>{i.book_info}</p>
                                                    </a> : ''
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="exchange">
                                        <span>换一换</span><span className="fa fa-refresh"></span>
                                    </div>
                            </div>
                            </>
                        )
                    })
                }

            </>
        )
    }
}
