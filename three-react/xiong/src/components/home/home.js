import React, { Component } from 'react'
import './home.css'
export default class home extends Component {
    render() {
        return (
            <div className="content">
                <div className="home-search">
                    <input type="text" placeholder="search" />
                    <span className="fa fa-search"></span>
                </div>
                <div className="kvBanner">
                    
                </div>
                <div className="bannerContent">
                    <div className="back">
                        
                    </div>
                    <div className="wyBanner">
                        
                    </div>
                </div>
            </div>
        )
    }
}
