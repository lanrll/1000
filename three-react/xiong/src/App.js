import React from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Footer from './components/all/Footer';
import Home from './components/home/home';
import Clas from './components/class/clas';
import Shop from './components/shop/shop';
import My from './components/my/my';

function App() {
  return (
    <div className="App">
      <footer>
        <NavLink to="/home">
          <span className="fa fa-home"></span>
          <br/>
          home
        </NavLink>
        <NavLink to="/clas">
        <span className="fa fa-bars"></span>
          <br/>
          clas</NavLink>
        <NavLink to="/shop">
        <span className="fa fa-shopping-cart"></span>
          <br/>
          shop</NavLink>
        <NavLink to="/my">
        <span className="fa fa-user-o"></span>
          <br/>
          my</NavLink>
      </footer>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/clas" component={Clas} />
        <Route path="/shop" component={Shop} />
        <Route path="/my" component={My} />
        <Redirect from="/" to="/home" exact />
      </Switch>
    </div>
  );
}

export default App;
