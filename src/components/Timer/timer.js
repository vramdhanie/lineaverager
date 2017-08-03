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
        this.timerId = setInterval(()=>this.tick(), 30);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState(prevstate => ({
            time: prevstate.time + 30
        }));
    }
}