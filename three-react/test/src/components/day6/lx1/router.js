import React, { Component } from 'react'
import {Route,Switch,NavLink,Redirect} from 'react-router-dom';
import Detal from './detal'
export default class router extends Component {
    render() {
        return (
            <div>
                <NavLink to="/list/albums">one</NavLink>
                <NavLink to="/list/posts">two</NavLink>
                <Switch>
                    <Route path="/list/:type"  component={Detal} />
                    <Redirect from="/" to="/list/albums" exact />
                </Switch>
                {/* <Detal /> */}
            </div>
        )
    }
}
