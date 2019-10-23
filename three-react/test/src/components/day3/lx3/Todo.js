import React, { Component } from 'react'
import List from './List'
import Txt from './Txt'
import axios from 'axios'
export default class Todo extends Component {
    constructor(){
        super();
        this.state= {
            list: [],
            id:null,
            text: ''
        }
        this.add = this.add.bind(this)
        this.del = this.del.bind(this)
        this.search = this.search.bind(this)
        this.edit = this.edit.bind(this)
        this.preser = this.preser.bind(this)
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        axios("http://localhost:4000/list").then(res => {
            // console.log(res)
            this.setState({
                list:res.data
            })
        })
    }
    add(val){
        console.log(val)
        axios({
            url: "http://localhost:4000/list",
            method: "POST",
            headers:{
               "Content-Type":'application/json' 
            },
            data:{
                "text": val
            }
        }).then(res => {
            this.getData()
            // console.log(res)
        })
    }
    search(val){
        axios(`http://localhost:4000/list?q=${val}`).then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    del(val){
        // console.log(val)
        axios.delete(`http://localhost:4000/list/${val}`).then(res => {
            // console.log(res)
            this.getData()
        })
    }
    edit(val){
        // console.log(val)
        axios(`http://localhost:4000/list/${val}`).then(res => {
            this.setState({
                text: res.data.text
            })
            // console.log(this.state.text)
        })
    }
    preser(val){
        console.log(val)
    }
    render() {
        return (
            <div>
                <Txt add={this.add} search={this.search} text={this.state.text}/>      
                <List list={this.state.list} del={this.del} edit={this.edit} preser={this.preser}/>      
            </div>
        )
    }
}
