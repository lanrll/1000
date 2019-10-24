import React, { Component } from 'react'

export default class List extends Component {
    constructor(){
        super();
        this.state = {
            sign: null
        }
    }
    edit(val){
        // console.log(val,this.state.sign)
        // if(val == this.state.sign){
        //     // this.setState({
        //     //     sign: null
        //     // })
        //     this.props.preser(val)
        // }else{
        //     this.setState({
        //         sign: val
        //     })
            this.props.edit(val)
        // }
    }
    render() {
        let {list} = this.props
        return (
            <ul>
                {
                    list.map(item => {
                        return <li key={item.id} >{item.id}----{item.text}-----
                        <input type="button" value="修改"  onClick={this.edit.bind(this,item.id)}/>-----
                        <input type="button" value="删除" onClick={this.props.del.bind(this,item.id)}/></li>
                    })
                }
            </ul>
        )
    }
}
