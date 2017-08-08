import React , { Component } from 'react';
import moment from 'moment';

import './lap.css';

export default class Lap extends Component {
    render(){
        return (
            <div className="lap">
                <div className="lap__number">{ this.props.number }</div>
                <div className="lap__time">{moment(this.props.time).format('mm:ss:SS')}</div>
                <div className="lap__duration">{moment(this.props.duration).format('mm:ss:SS')}</div>
            </div>
        )
    }
}