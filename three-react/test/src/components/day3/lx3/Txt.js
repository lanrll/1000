import React, { Component } from 'react'

export default class Txt extends Component {
    constructor(props){
        super(props);
        this.state = {
            str: ''
        }
    }
    add = (e) => {
        if(e.keyCode === 13){
            this.props.add(this.state.str)
            this.setState({
                str: ''
            })
        }else{
			this.props.search(this.state.str)
		}
	}
	modifOk = () => {
		this.props.modifyFinish(this.props.id,this.props.str)
		this.setState({
			str: ''
		})
	}
    init(e){
		if(!this.props.id){
			this.setState({
				str: e.target.value
			})
		}else{
			this.props.modifyStr(e.target.value)
		}
	}
	// search(){
	// 	this.props.search(this.state.str)
		// this.setState({
		// 	str: ''
		// })
	// }
    render() {
        let {str,id} = this.props
        // console.log(text)
        return (
            <div>
                <input type="text" placeholder="请输入！" onKeyUp={this.add} value={id ? str : this.state.str} onChange={this.init.bind(this)}/>
                {/* <input type="button" value="搜索" onClick={this.search.bind(this)} /> */}
                <input type="button" value="修改完成"  onClick={this.modifOk} />
            </div>
        )
    }
}
