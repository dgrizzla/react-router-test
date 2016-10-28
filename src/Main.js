// modules/Main.js
import React from 'react'
import logo from './logo.svg';
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <br/>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>        
          {this.props.children}
        </div>
    </div>
  }
})