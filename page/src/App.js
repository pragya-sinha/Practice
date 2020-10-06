import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import banner from './images/bg12.jpg';
import {Main} from './components/Main';

class App extends Component {


  render() {
    return (
      <div className="card w-100">
      <div className="banner">
      <img src={logo} className="logo" alt="logo"/>
        <a href="#" className="btn btn-success">Account</a>
        <a href="#" className="btn btn-success">Help</a>
        <p className="banner-tag">WE WANT TO MEET YOUR FRIENDS AND FAMILY</p>
        <p className="banner-tag1">REFER AND EARN</p>
      </div>
      <Main />
    </div>
    );
  }
}

export default App;
