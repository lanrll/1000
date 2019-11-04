import React from 'react';
import './App.css';
import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import Classify from './components/classifys/index'
import ClassifyList from './components/classifys/classifyList'
import Detail from './components/details/detail'
import Rank from './components/ranks/rank'
import RankList from './components/ranks/rank-list'

import Book from './components/lists/book'
import BookList from './components/lists/bookList'
import UserInfo from './components/login/userInfo'
import Home from './components/home/index'
import Girl from './components/girl/index'
import Boy from './components/boy/index'
import Search from './components/search/Search'
class App extends React.Component {
  render (){
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} exact/>
  
          <Route path="/classify" component={Classify} exact/>
          <Route path="/classify/classlist" component={ClassifyList} exact/>
  
          <Route path="/rank" component={Rank} exact/>
          <Route path="/rank/list" component={RankList} exact/>
  
          <Route path="/girl" component={Girl} />
          <Route path="/boy" component={Boy} />
  
          <Route path="/book" component={Book} exact/>
          <Route path="/book/list" component={BookList} exact/>
  
          <Route path="/user/login" component={UserInfo} exact/>
  
          <Route path="/detail" component={Detail} exact/>
          <Route path="/search" component={Search} exact/>
  
          <Redirect from="/" to="/home" exact />
        </Switch>
        </div>
      );
    }
}

export default withRouter(App);
