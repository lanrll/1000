import React, { Component } from 'react'
import axios from 'axios'
export default class detal extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            type:''
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        let type = this.props.match.params.type
        this.getData(type)
    }
    componentDidUpdate(){
        // console.log(this.props.match.params)
        let type = this.props.match.params.type
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
