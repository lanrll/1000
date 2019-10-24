import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Todo from './components/day3/lx3/Todo'
// import Get from './components/day3/lx4/Get'
import Todo from './components/day4/Todo'

function App() {
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
      <Todo />
      {/* <Get /> */}
    </div>
  );
  
}

export default App;
