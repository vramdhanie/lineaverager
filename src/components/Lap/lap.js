import React , { Component } from 'react';

import './lap.css';

export default class Lap extends Component {
    render(){
        return (
            <div className="lap">
                <div className="lap__number">{ this.props.number }</div>
                <div className="lap__time">{ this.props.time }</div>
                <div className="lap__duration">{ this.props.duration }</div>
            </div>
        )
    }
}