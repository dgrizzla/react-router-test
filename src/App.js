import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import About from './About.js'
import Repos from './Repos.js'
import Main from './Main.js'

const obj = {};

obj.render = function () {  
  return <div className="App">    
    <Router history={hashHistory}>
      <Route path="/" component={Main}>        
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </div>
};

const App = React.createClass(obj);

export default App;

