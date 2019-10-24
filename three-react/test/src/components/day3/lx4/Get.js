import React, { Component } from 'react'
import axios from 'axios';
// node作为中间层实现跨域请求
export default class Get extends Component {
    componentDidMount(){
        
    }
    get(){
        axios('http://47.100.93.47:1996/data').then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.get.bind(this)}>get</button>
            </div>
        )
    }
}
