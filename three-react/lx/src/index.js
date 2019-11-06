import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import {mainRoutes} from './router'
// import {Provider} from 'react-redux';
// import store from './store/index';

ReactDOM.render(
    // <Provider store={store}>
    <Router>
        <Switch>
            {
               mainRoutes.map((item)=>{
                   console.log(item)
                return <Route key={item.path} path={item.path} component={item.component} />
                })
                
            }
            <Redirect from='/' to="/home" exact />
            <Redirect to="/404" />
            {/* // <App /> */}
        </Switch>
            
    </Router>
    // </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
