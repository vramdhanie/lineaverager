import React, { Component } from 'react';
import moment from 'moment';

import './timer.css';

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:0
        }
    }

    render(){
        return (
            <div className="timer">
                <div className="timer__time">{moment(this.state.time).format('mm:ss:SS')}</div>
            </div>
        )
    }

    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(), 100);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            time: this.state.time + 100
        });
    }
}