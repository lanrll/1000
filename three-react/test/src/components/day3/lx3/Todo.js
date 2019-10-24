import React, { Component } from 'react'
import List from './List'
import Txt from './Txt'
import axios from 'axios'
export default class Todo extends Component {
    constructor(){
        super();
        this.state= {
            list: [],
            id: '',
            str: ''
        }
        this.add = this.add.bind(this)
        this.del = this.del.bind(this)
        this.search = this.search.bind(this)
        this.edit = this.edit.bind(this)
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
    modifyStr =(str) => {
        this.setState({
            str: str 
        })
    }
    modifyFinish=(id,str)=>{
        axios.patch("http://localhost:4000/list/"+id,{
            text:str
        },{
            headers:{
                "Content-type":"application/json"
            }
        }).then(() => {
            this.setState({
                str:'',
                id:''
            })
            // this.modifyStr('')
            this.getData();
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
        axios.delete(`http://localhost:4000/list/${val}`).then(res => {
            this.getData()
        })
    }
    edit(id){
        // console.log(val)
        // axios(`http://localhost:4000/list/${val}`).then(res => {
        //     this.setState({
        //         text: res.data.text
        //     })
        //     // console.log(this.state.text)
        // })
        var arr = this.state.list.filter(item => {
            return item.id === id
        })
        this.setState({
            str: arr[0].text,
            id: arr[0].id
        })
    }
    render() {
        let {list,str,id} = this.state
        return (
            <div>
                <Txt add={this.add} search={this.search} str={str} id={id} modifyStr={this.modifyStr} modifyFinish={this.modifyFinish}/>      
                <List list={list} del={this.del} edit={this.edit} />      
            </div>
        )
    }
}
