import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCount from "../itemcount/ItemCount";
import EstimatedTime from "../estimatedtime/estimatedtime";
import Timer from "../Timer/timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Line Averager</h2>
            <p className="App-intro">
                Estimate the time to get to the head of a line!
            </p>
        </div>
          <div className="content">
              <div className="row">
                  <ItemCount/>
                  <EstimatedTime/>
                  <Timer/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
