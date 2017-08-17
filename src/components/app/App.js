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
import {Container, Row, Col, Jumbotron} from 'reactstrap';

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
            <Jumbotron>
              <img src={logo} className="App-logo" alt="logo" />
            </Jumbotron>
              <Container>
                  <Row>
                      <Col>
                        <ItemCount label="in queue"/>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        {eta}
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Timer/>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        {controls}
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Laps/>
                      </Col>
                  </Row>
              </Container>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
    return { ...state };
}

export default connect(mapStateToProps)(App);