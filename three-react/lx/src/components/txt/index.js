import React, { Component } from 'react'
import {connect} from 'react-redux';
import actionCreator from './actionCreator';
class Txt extends Component {
    componentDidMount(){
        this.props.get()
    }   
    render() {
        // console.log(this.props.txt.list)
        return (
            <div>
                txt
                <ul>
                    {
                        this.props.txt.list.length>0 && this.props.txt.list.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => state,actionCreator)(Txt)