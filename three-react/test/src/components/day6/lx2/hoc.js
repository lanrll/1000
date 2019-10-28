import React from 'react'
export default (Hoc) => {
    return class extends React.Component{
        render(){
            return <div> 2019 &copy; zyq <Hoc {...this.props}/></div>
        }
    }
}