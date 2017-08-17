import React, { Component } from 'react';
import { connect } from 'react-redux';

import './controls.css';
import {
    incrementTime,
    startTimer,
    stopTimer,
    lap,
    decrementCount,
    setMean,
    setEta
    } from "../../actions/index";
import { STATE } from '../../reducers/index';
import moment from 'moment';
import { Button } from 'reactstrap';

export class Controls extends Component {
    constructor(props){
        super(props);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onLap = this.onLap.bind(this);
    }

    onStart(){
        if(this.props.timer_state !== STATE.RUNNING) {
            this.props.dispatch(startTimer());
            this.timerId = setInterval(() => this.tick(), 30);
        }
    }

    onStop(){
        this.props.dispatch( stopTimer() );
        clearInterval(this.timerId);
    }

    onLap(){
        if(this.props.timer_state === STATE.RUNNING) {
            let currentTime = this.props.time;
            let previousTime = this.props.laps.length?this.props.laps[this.props.laps.length - 1].time:0;
            let number = this.props.laps.length + 1;
            this.props.dispatch(lap({time:currentTime, duration:currentTime - previousTime, number: number}));
            this.props.dispatch( decrementCount() );

            const avg = currentTime / (this.props.laps.length + 1);
            this.props.dispatch( setMean(avg) );

            const wait = avg * (this.props.count - 1);
            const eta = moment().add(wait, 'ms');

            this.props.dispatch( setEta(eta) );

        }
    }

    componentWillUnmount(){
        this.props.dispatch( stopTimer() );
        clearInterval(this.timerId);
    }

    tick(){
        this.props.dispatch( incrementTime(this.props.time + 30) );
    }

    render(){
        const action_btn = 'start btn' + (this.props.timer_state === STATE.RUNNING ? ' disable' : '');
        const lap_btn = 'lapBtn btn' + (this.props.timer_state === STATE.RUNNING ? '' : ' disable');
        return (
            <div className="controls">
                <Button outline color="primary" onClick={this.onStart}>Start</Button>
                <Button outline onClick={this.onLap}>Lap</Button>
                <Button outline onClick={this.onStop}>Stop</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Controls);