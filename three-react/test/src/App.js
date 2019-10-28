import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Todo from './components/day3/lx3/Todo'
// import Get from './components/day3/lx4/Get'
// import Todo from './components/day4/Todo'
// import Router from './components/day6/lx1/router'
import {Route,Switch,NavLink,Redirect,withRouter} from 'react-router-dom';
// import Detal from './components/day6/lx2/detal'
// import {withRouter} from 'react-router-dom'
import Home from './components/day6/lx3/home'
import News from './components/day6/lx3/news'
import My from './components/day6/lx3/my'
import Login from './components/day6/lx3/login'

class App extends React.Component {
  constructor(props){
    super(props);
    this.props.history.listen(res => {
      this.changeR(res)
    })
  }
  changeR(name){
    // console.log(name)
  }
  go(type){
    let n=0
    // this.props.history.listen((res) => console.log(res,n++))
    this.props.history.push('/list',{type});
  }
  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
  
        {/* <Todo /> */}
  
        {/* <Get /> */}
  
        {/* day6/lx1 */}
        {/* <NavLink to="/list/albums">one</NavLink>
                  <NavLink to="/list/posts">two</NavLink>
                  <Switch>
                      <Route path="/list/:type"  component={Detal} />
                      <Redirect from="/" to="/list/albums" exact />
                  </Switch>
                  <Detal /> */}
        
        {/* <Router /> */}
                  
        {/* <button onClick={this.go.bind(this,'albums')}>one</button>
        <button onClick={this.go.bind(this,'photos')}>two</button>
        <Route path="/list" component={Detal}  /> */}

        <NavLink to="/home" >home</NavLink>
        <br/>
        <NavLink to="/news" >news</NavLink>  
        <br/>
        <NavLink to="/my" >my</NavLink>  
        <br/>
        <NavLink to="/login" >login</NavLink>  
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/my" render={props => { return localStorage.getItem('token') ? <My /> :<Redirect to="/login"/>}} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/home" exact />
        </Switch>
      </div>
    );
  }
  
}

export default withRouter(App);
