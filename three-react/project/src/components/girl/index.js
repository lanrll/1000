import React, { Component } from 'react'
import axios from 'axios';
import Header from '../public/header';
import ShowTwo from '../public/showTwo';
import ShowThree from '../public/showThree';
import Footer from '../public/footer';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            list1:[]
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572849257&type=2&resetcache=&sign=40BC14AEFCE5C3C149B9CD30A05FB7F2&key=shuqiapi&_=1572849257872').then(res => {
            let data = res.data.data.module
            console.log(data)
            this.setState({
                list1:data[1],
                list2:data[11],
                list3:data[16],
            })
        })
    }
    render() {
        if(this.state.list1.length ==0) return ''
        return (
            <>
               <Header  title="女频" />
               <ShowTwo data={this.state.list1} />
               <ShowTwo data={this.state.list2} />
               <ShowThree data={this.state.list3} />
               <Footer />
            </>
        )
    }
}

