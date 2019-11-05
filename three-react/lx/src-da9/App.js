import React from 'react';
import './App.css';
import Test from './components/test';
import Todo from './components/todo/index';
import Txt from './components/txt/index';
function App() {
  return (
    <div className="App">
      计数
      <Test />
      <hr/>
      todo
      <Todo />
      <hr/>
      <Txt />
    </div>
  );
}

export default App;
