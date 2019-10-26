import React, { Component } from 'react'
import './show.css'
export default class show extends Component {
    constructor(props){
        super(props)
    }
    // getDerivedStateFromProps(np,ns){
    //     console.log(np,ns)
    // }
    shouldComponentUpdate(props,state){
        console.log(props,state)
        return props
    }
    render() {
        let {item} = this.props
        console.log(item)
        if(!item) return ''
        if(item.banner == null){
            item.banner = []
        }
        return (
            <div className="right">
                {
                    item.banner.length > 0 ? <div className="img"><img src={item.banner[0].image}/></div> : ''
                }
                {
                    item.second.map(res => {
                        return    <div className="clas" key={res.classifyId}>
                            <h1 >{res.classifyName}</h1>
                            <div className="showS" >
                                {
                                    res.third.map(i => {
                                        return    <div key={i.classifyId}>
                                            <div >
                                                <img src={i.image}  />
                                            </div>
                                            <p >{i.classifyName}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                
            </div>
        )
    }
}
