import React, { Component } from 'react';

import './controls.css';

export default class Controls extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="controls">
                <button className="start">Start</button>
                <button className="lap">Lap</button>
                <button className="stop">Stop</button>
            </div>
        )
    }
}