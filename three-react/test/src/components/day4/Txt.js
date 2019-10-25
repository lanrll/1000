import React, { Component } from 'react'

export default class Txt extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    add(e){
        if(e.keyCode === 13){
            this.props.add(this.state.value)
            if(this.props.id) return
            this.setState({
                value:''
            })
        }
    }
    init(e) {
        if(this.props.id){
            this.props.changeText(e.target.value)
        }
            this.setState({
                value:e.target.value
            })
    }
    changeTextOk(){
        this.props.changeTextOk(this.props.id,this.state.value)
        this.setState({
            value: ''
        })
    }
    render() {
        // console.log(this.props)
        let {id,text} = this.props
        return (
            <div>
                <input type="text" value={id ? text : this.state.value} onKeyUp={this.add.bind(this)} onChange={this.init.bind(this)}/>
                {/* <input type="button" value="添加"/> */}
                {/* <input type="button" value="搜索"/> */}
                <input type="button" value="修改完成" onClick={this.changeTextOk.bind(this)}/>
            </div>
        )
    }
}
