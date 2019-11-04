import React, { Component } from 'react'
import axios from 'axios'
import ShuDan from '../public/shudan'
import Header from '../public/header';
import Footer from '../public/footer';
export default class book extends Component {
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
        axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1572832789015").then((res) => {
            this.setState({
                list: res.data.data
            })
            // console.log(this.state.list)
        })
    }
    render() {
        return (
            <>
                <Header title="书单" />
                <ShuDan data = {this.state.list} />
                <Footer />
            </>
        )
    }
}
