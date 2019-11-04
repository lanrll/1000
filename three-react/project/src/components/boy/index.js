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
        axios('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1572854023&type=2&resetcache=&sign=323D2A31EAD3ABA27B0039D8FA2A724B&key=shuqiapi&_=1572854023090').then(res => {
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
               <Header title="男频" />
               <ShowTwo data={this.state.list1}  />
               <ShowTwo data={this.state.list2} />
               <ShowThree data={this.state.list3} />
               <Footer />
            </>
        )
    }
}

