import React from 'react';
import './App.css';
import Test from './components/test';
import Todo from './components/todo/index';
function App() {
  return (
    <div className="App">
      计数
      <Test />
      <hr/>
      todo
      <Todo />
    </div>
  );
}

export default App;
