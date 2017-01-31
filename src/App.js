import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
       <Board rows={5} columns={5}/>
      </div>
    );
  }
}

export default App;
