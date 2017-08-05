import React, { Component } from 'react';
import { connect } from 'react-redux';

import './controls.css';
import {incrementTime, startTimer, stopTimer} from "../../actions/index"

export class Controls extends Component {
    constructor(props){
        super(props);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onLap = this.onLap.bind(this);
    }

    onStart(){
        this.props.dispatch( startTimer() );
        this.timerId = setInterval(()=>this.tick(), 30);
    }

    onStop(){
        this.props.dispatch( stopTimer() );
        clearInterval(this.timerId);
    }

    onLap(){}

    tick(){
        this.props.dispatch( incrementTime(this.props.time + 30) );
    }

    render(){
        return (
            <div className="controls">
                <a className="start btn" onClick={this.onStart}>Start</a>
                <a className="lapBtn btn" onClick={this.onLap}>Lap</a>
                <a className="stop btn" onClick={this.onStop}>Stop</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    time: state.time
});

export default connect(mapStateToProps)(Controls);