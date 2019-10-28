import React, { Component } from 'react'
import axios from 'axios'
import Hoc from './hoc'

class detal extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            type:''
        }
    }
    componentDidMount(){
        if(this.props.location.state){
            let type = this.props.location.state.type
            this.getData(type)
        }
    }
    componentDidUpdate(){
        // console.log(this.props.match.params)
        if(!this.props.location.state) return
        let type = this.props.location.state.type
        if(this.state.type !== type){
            this.getData(type)
        }
    }
    getData(type){
        axios('https://jsonplaceholder.typicode.com/'+type).then(res => {
            // console.log(res.data)
            this.setState({
                list: res.data,
                type:type
            })
        })
    }
    render() {
        // if(this.state.list == null) return
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default  Hoc(detal)