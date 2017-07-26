import React, { Component } from 'react';
import './laps.css';
import Lap from '../Lap/lap';

export default class Laps extends Component {

    constructor(props){
        super(props);
        this.state = {
            laps:[]
        }
        this.laps = this.state.laps.map(lap=><Lap number={lap.number} time={lap.time} duration={lap.duration}/>);
    }

    render(){
        return (
            <div className="laps">
                {this.laps}
            </div>
        )
    }
}