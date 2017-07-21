import React, { Component } from 'react';
import './estimatedtime.css';

export default class EstimatedTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            eta: "13:56:12"
        }
    }

    render(){
        return (
            <div className="EstimatedTime">
                <div className="EstimatedTime__subtle">Estimated Time of Arrival</div>
                <div className="EstimatedTime__eta">{this.state.eta}</div>
            </div>
        );
    }
}
