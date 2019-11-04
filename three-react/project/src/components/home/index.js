import React, { Component } from 'react'
import axios from 'axios';
import ShowOne from '../public/showOne';
import ShowTwo from '../public/showTwo';
import ShowThree from '../public/showThree';
import ShowFore from '../public/showFore';
import ShowFive from '../public/showFive';
import Footer from '../public/footer';
import './index.scss';
import {NavLink} from 'react-router-dom';
const rotue = ['classify','rank','girl','boy','book'] 
export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            topData:[],
            qualityRecommendation:[],
            // sex:[],
            girl:[],
            boy:[],
            newBook:[],
            rank:[],
            bookList:[],
            interest:[]
        }
    }
    componentDidMount(){
        this.getTopData()
    }
    getTopData(){
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572609460&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=13C5962199EB53E237F4415D7B51BF1E&key=shuqiapi&_=1572609460516',).then(res => {
            // console.log(res)
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
                // sex:[data[3],data[8]],
                girl:data[3],
                boy:data[8]
            })
        })
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572834862&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=0FDB68D342B49846AE37491EAC0688CB&key=shuqiapi&_=1572834862952').then(res => {
            // console.log(res)
            let data = res.data.data.module
            this.setState({
               newBook:data[3],
               rank:data[8],
            })
        })
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572838945&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=9D06D5427B57370423704EA35E0AFFFC&key=shuqiapi&_=1572838945494').then(res => {
            // console.log(res)
            let data = res.data.data.module
            this.setState({
               bookList: data[3],
               interest: data[8],
            })
        })
    }
    changeData(val){
        switch(val){
            case 1: 
                axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572660884&type=2&resetcache=&func_id=19&orderid=6&mid=6&lmkTxt=index&sign=E12EC27DE65DF28D94D2DD5D332AD732&key=shuqiapi&_=1572660884964').then(res => {
                    // console.log(res)
                    this.setState({
                        // topData: res.data.data.module,
                        qualityRecommendation:res.data.data.module[0]
                    })
                })
                break
            case 2: 
                axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572847818&type=2&resetcache=&func_id=19&orderid=11&mid=12&lmkTxt=index&sign=0FD2E7C461107A4B457AA5B5776A5AF6&key=shuqiapi&_=1572847818181').then(res => {
                    console.log(res)
                    let data = res.data.data.module
                    this.setState({
                        girl:data[0],
                    })
                })
                break
            case 3: 
                axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572848323&type=2&resetcache=&func_id=19&orderid=16&mid=17&lmkTxt=index&sign=C65B8961AEDA67757EDABC9020169080&key=shuqiapi&_=1572848323225').then(res => {
                    let data = res.data.data.module
                    this.setState({
                        boy:data[0]
                    })
                })
                break
            case 4:
                this.props.history.push('/rank/list')
                break
            case 5:
                this.props.history.push('/book')
                break
        }
    }
    render() {
        if(this.state.topData.length == 0 || this.state.girl.length ==0 || this.state.newBook.length == 0 || this.state.bookList.length == 0) return <h1>未找到！！！</h1>
        // console.log(this.state.qualityRecommendation)
        let topData = this.state.topData
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
                    <NavLink to="/user/login">
                        <img src={require("./logo192.png")} />
                    </NavLink>
                    <a><span className="fa fa-book"></span></a>
                    <NavLink to="/search"><span className="fa fa-search"></span></NavLink>
                </header>
                <nav>
                    {
                        topData[0].content.map((item,index) => {
                            return ( <NavLink to={rotue[index]} key={item.url}>
                                        <div>
                                            <img src={topData[0].icon_img_url} style={{top:-index*base+'rem'}}/>
                                        </div>
                                        <p>{item.title}</p>
                                    </NavLink>)
                        })
                    }
                </nav>
                <div className="banner">
                    <a><img src={topData[1].content[0].image_url} /></a> 
                </div>
                <ShowOne  data={this.state.qualityRecommendation} changeData={this.changeData.bind(this,1)} />
                <ShowTwo  data={this.state.girl} changeData={this.changeData.bind(this,2)} />    
                <ShowTwo  data={this.state.boy} changeData={this.changeData.bind(this,3)} />    
                <ShowThree data={this.state.newBook} changeData={this.changeData.bind(this,4)} />
                <ShowThree data={this.state.rank} changeData={this.changeData.bind(this,4)} />
                <ShowFore data={this.state.bookList} changeData={this.changeData.bind(this,5)} />
                <ShowFive data={this.state.interest}  />
                <Footer />
            </>
        )
    }
}
