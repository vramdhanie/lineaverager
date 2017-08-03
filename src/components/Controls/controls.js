import React, { Component } from 'react';

import './controls.css';
import { startTimer } from "../../actions/index"

export default class Controls extends Component {
    constructor(props){
        super(props);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onLap = this.onLap.bind(this);
    }

    onStart(){
        this.props.dispatch( startTimer() );
    }

    onStop(){
        this.props.dispatch( stopTimer() );
    }

    onLap(){}

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