import React, { Component } from 'react'
import store from '../../store/index';
import actionCreator from './actionCreator';
export default class list extends Component {
    constructor(props){
        super(props);
        this.state ={
            list: store.getState().todo.list ,
            all:store.getState().todo.all
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().todo.list,
                all:store.getState().todo.all
            })
        })
    }
    del(id){
        store.dispatch(actionCreator.del(id))
        console.log(id)
    }
    edit(id){
        store.dispatch(actionCreator.edit(id))
    }
    change(id){
        store.dispatch(actionCreator.change(id))
        
    }
    changeAll(){
        store.dispatch(actionCreator.changeAll())
    }
    render() {
        return (
            <ul>
                <li><input type="checkbox" checked={this.state.all} onChange={this.changeAll.bind(this)}/></li>
                {
                    this.state.list.map(item => {
                        return <li key={item.id}>
                        <input type="checkbox" checked={item.flag} onChange={this.change.bind(this,item.id)}/>
                        ----{item.text}-----
                        <input type="button" value="修改" onClick={this.edit.bind(this,item.id)}/>-----
                        <input type="button" value="删除" onClick={this.del.bind(this,item.id)}/>
                        </li>
                    })
                }
            </ul>
        )
    }
}
