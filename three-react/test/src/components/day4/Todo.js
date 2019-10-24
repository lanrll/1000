import React, { Component } from 'react'
import Txt from './Txt';
import List from './List';
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state ={
            list:[
                {
                    id: 1,
                    text: "nishuo",
                    flag: true
                }
            ],
            modelId: 1,
            item: {},
            all: true
        }
        this.changes = this.changes.bind(this)
    }
    componentDidMount(){
        // this.changeAll()
    }
    add(text){
        this.setState({
            list:[...this.state.list,{
                id: ++this.state.modelId,
                text: text,
                flag: this.state.all
            }]
        })
    }
    changeText(text){
        this.state.item.text = text
        this.setState({
            item:this.state.item
        })
    }
    changeTextOk(id,text){
        let arr= [...this.state.list]
        arr.forEach(item => {
            if(item.id === id){
                item.text = text
            }
        })
        this.setState({
            list: arr,
            item: {}
        })
    }
    changeAll(){
        let arr = [...this.state.list]
        this.setState({
            all: !this.state.all
        },() => {
            arr.forEach(item => item.flag = this.state.all)
            this.setState({
                list: arr 
            })
        })
        
    }
    changes(){
        let arr = [...this.state.list]
        let length = arr.filter(item => item.flag===true)
        // console.log(arr.length,length)
        if(arr.length === length.length){
            this.setState({
                all: true
            })
        }else{
            this.setState({
                all: false
            })
        }
    }
    change(id){
        let arr = [...this.state.list]
        arr.forEach(item => {
            if(item.id === id){
                item.flag =!item.flag
            }
        })
        this.setState({
            list: arr
        },() => {
            this.changes()
        })
    }
    modify(id){
        let arr = [...this.state.list]
        arr = arr.filter(item => item.id === id)
        arr = JSON.parse(JSON.stringify(arr))
        this.setState({
            item: arr[0]
        })
    }
    del(id){
        let index = null
        let arr = [...this.state.list]
        for(let i = 0; i<arr.length; i++){
            if(arr[i].id === id){
                index = i
                break;
            }
        }
        arr.splice(index,1)
        this.setState({
            list:arr
        },()=>{
            this.changes()
        })
    }
    render() {
        return (
            <div>
                <Txt add={this.add.bind(this)} {...this.state.item} changeText={this.changeText.bind(this)} changeTextOk={this.changeTextOk.bind(this)}/>     
                <List list={this.state.list} all={this.state.all} changeAll={this.changeAll.bind(this)} change={this.change.bind(this)} modify={this.modify.bind(this)} del={this.del.bind(this)}/>     
            </div>
        )
    }
}
