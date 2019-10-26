import React, { Component } from 'react'
import axios from 'axios'
import './clas.css'
import Show from './show'
export default class clas extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            id:null,
            item:null
        }
    }
    componentDidMount(){
        axios('https://shopapi.smartisan.com/mobile/classify').then(res => {
            console.log(res)
            this.setState({
                list: res.data.data,
                item: res.data.data[0],
                id: res.data.data[0].classifyId
            })
        })
    }
    change(id){
        let arr = this.state.list.filter(item => item.classifyId === id)
        console.log(arr)
        this.setState({
            id:id,
            item: arr[0]
        })
    }
    render() {
        let {id,item} = this.state
        return (
           <div className="content">
               <div className="search">
                  <input type="text" placeholder="search" />
                  <span className="fa fa-search"></span>
               </div>
               <div className="main">
                   <div className="nav">
                       <ul>
                           {
                               this.state.list.map(item => {
                                   return <li key={item.classifyId} >
                                   <span key={item.classifyId} onClick={this.change.bind(this,item.classifyId)} className={item.classifyId === id ? 'ac': ''}>{item.classifyName}</span>
                                   </li>
                               })
                           }  
                       </ul>
                   </div>
                   <div className="show">
                      <Show item={item}/>
                   </div>
               </div>
           </div>
        )
    }
}
