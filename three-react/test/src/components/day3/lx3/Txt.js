import React, { Component } from 'react'

export default class Txt extends Component {
    constructor(props){
        super(props);
        this.state = {
            str:this.props.text
        }
        // console.log(this.props)
    }
    componentWillReceiveProps(){
        console.log(111,this.props.text)
        // this.setState({
        //     str: this.props.text
        // })
    }
    componentDidMount(){
        //  this.setState({
        //     str: this.props.text
        // })
    }
    componentWillUpdate(){
        console.log(222,this.props.text)
    }
    componentDidUpdate(){
        console.log(333,this.props.text)
        // this.init()
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
    init(e){
        // console.log(text,e)
        if(this.props.text){
            this.setState({
                str: this.props.text
            })
        }
        this.setState({
            str: e.target.value
        })
    }
    render() {
        // let {text} = this.props
        // console.log(text)
        return (
            <input type="text" onKeyUp={this.add} value={this.state.str} onChange={this.init.bind(this)}/>
        )
    }
}
