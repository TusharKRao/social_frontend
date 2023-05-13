//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;


import React from 'react';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Preferences from './components/Preferences/Preferences';

function App() {

  return (
    <>
    <Dashboard/>
    <Preferences/>
    </>

  );

}

export default App;