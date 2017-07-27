import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCount from "../itemcount/ItemCount";
import EstimatedTime from "../estimatedtime/estimatedtime";
import Timer from "../Timer/timer";
import Controls from "../Controls/controls";
import Laps from "../Laps/laps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div className="content">
              <div className="row">
                  <ItemCount label="in queue"/>
                  <EstimatedTime/>
                  <Timer/>
                  <Controls/>
                  <Laps/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
