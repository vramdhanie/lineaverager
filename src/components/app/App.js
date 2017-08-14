import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import logo from './logo.svg';
import './App.css';
import ItemCount from "../itemcount/ItemCount";
import EstimatedTime from "../estimatedtime/estimatedtime";
import Timer from "../Timer/timer";
import Controls from "../Controls/controls";
import Laps from "../Laps/laps";

class App extends Component {

  constructor(props){
      super(props);
      this.history = createHistory();
  }

  render() {
      const controls = this.props.count > 0?<Controls/>:'';
      const eta = this.props.eta ? <EstimatedTime/>:'';

    return (
        <Router history={this.history}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
              <div className="content">
                  <div className="row">
                      <ItemCount label="in queue"/>
                      {eta}
                      <Timer/>
                      {controls}
                      <Laps/>
                  </div>
              </div>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
    return { ...state };
}

export default connect(mapStateToProps)(App);