// import React from 'react';
// import './App.css';
import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import {subRoutes} from './router';
import Layout from './components/layout';
import { Button } from 'antd';

export default class  Home extends Component {
  render() {
    return (
      <div >
       {/* <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button> */}
        <Layout>
          <Switch>
            {
              subRoutes.map(item => {
                return <Route path={item.path} key={item.path} component={item.component} />
              })
            }
            <Redirect from="/home" to ="/home/list" exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

// export default App;
