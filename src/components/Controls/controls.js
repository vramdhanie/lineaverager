import React, { Component } from 'react';

import './controls.css';

export default class Controls extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="controls">
                <a className="start btn">Start</a>
                <a className="lapBtn btn">Lap</a>
                <a className="stop btn">Stop</a>
            </div>
        )
    }
}