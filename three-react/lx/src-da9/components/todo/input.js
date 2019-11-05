import React, { Component } from 'react'
import actionsCreator from './actionCreator'
import store from '../../store/index'
export default class input extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:store.getState().todo.text
        }
        store.subscribe(() => {
            this.setState({
                value: store.getState().todo.text,
                k:true
            })
        })
    }
    init(e){
        this.setState({
            value: e.target.value
        })
    }
    add(e){
        // console.log(this.state.k)
        if(e.keyCode === 13){
            if(this.state.k){
                store.dispatch(actionsCreator.editOk(this.state.value))
            }else{
                store.dispatch(actionsCreator.add(this.state.value))
            }
            this.setState({
                value:'',
                k:false
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text"  value={this.state.value} onChange={this.init.bind(this)} onKeyUp={this.add.bind(this)}/>
            </div>
        )
    }
}
