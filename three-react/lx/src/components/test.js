import React, { Component } from 'react'
import store from '../store/index';
import actionsCreator from './actionCreator'
import {connect} from 'react-redux';
class Counter extends Component {
    render(){
        return ( <div>
            <input placeholder="base!!!" onChange={this.props.CH.bind(this)}/>
            <br/>
            <button onClick={this.props.DEL}>-</button>
            {this.props.a}{this.props.pj}
            <button onClick={this.props.INC}>+</button>
        </div>)
    }
}
let {inc:INC,del:DEL,change:CH} = actionsCreator
let mapState = (state) => {
    return {
        a: state.test.a,
        pj: state.test.a >30 ? ":)":"请充值！！！"
    }
}
export default connect(mapState ,{INC,DEL,CH})(Counter)
// export default class test extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             a: store.getState().test.a,
//             base: 1
//         }
//         store.subscribe(() => {
//             this.setState({
//                 a:store.getState().test.a
//             })
//         })
//     }
//     inc = () => {
//         store.dispatch(actionsCreator.inc(this.state.base))
//     }
//     del = () => {
//         store.dispatch(actionsCreator.del(this.state.base))
//     }
//     change = (e) => {
//         if(e.target.value.length>0){
//             this.setState({
//                 base:Number(e.target.value)
//             })
//         }
//     }
//     render() {
//         // console.log(this.state.a)
//         return (
//            <Counter  a={this.state.a} change={this.change} inc={this.inc} del={this.del} />
//         )
//     }
// }
