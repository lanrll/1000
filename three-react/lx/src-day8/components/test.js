import React, { Component } from 'react'
import store from '../store/index';
import actionsCreator from './actionCreator'
export default class test extends Component {
    constructor(props){
        super(props);
        this.state ={
            a: store.getState().test.a,
            base: 1
        }
        store.subscribe(() => {
            this.setState({
                a:store.getState().test.a
            })
        })
    }
    inc = () => {
        store.dispatch(actionsCreator.inc(this.state.base))
    }
    del = () => {
        store.dispatch(actionsCreator.del(this.state.base))
    }
    change = (e) => {
        if(e.target.value.length>0){
            this.setState({
                base:Number(e.target.value)
            })
        }
    }
    render() {
        // console.log(this.state.a)
        return (
            <div>
                <input placeholder="base!!!" onChange={this.change}/>
                <br/>
                <button onClick={this.del}>-</button>
                {this.state.a}
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}
