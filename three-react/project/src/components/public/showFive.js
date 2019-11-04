import React, { Component } from 'react'
import Detail from './detail';

export default class showThree extends Component {
    render() {
        let {data} = this.props
        // console.log(data)
        return (
            <div className="showContainer">
                <div className="title">
                    <p>{data.m_s_name}</p>
                </div>
                {
                    data.content.map((item,index) => {
                        return (
                            index <10 ? <Detail data={item} /> : ''
                        )
                    })
                }
            </div>
        )
    }
}

