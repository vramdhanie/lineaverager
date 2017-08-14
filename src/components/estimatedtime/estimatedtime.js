import React, { Component } from 'react';
import { connect } from 'react-redux';
import './estimatedtime.css';
import moment from 'moment';

export class EstimatedTime extends Component{

    render(){
        return (
            <div className="EstimatedTime">
                <div className="EstimatedTime__subtle">Estimated Time of Arrival</div>
                <div className="EstimatedTime__eta">
                    {this.props.eta?moment(this.props.eta).format('HH:mm:ss'):''}
                </div>
                <div className="EstimatedTime__subtle">
                    {moment(this.props.mean).format('mm:ss:SS')} average x {this.props.count}
                    = {moment(this.props.mean * this.props.count).format('mm:ss:SS')} wait.
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    laps: state.laps,
    eta: state.eta,
    mean: state.mean,
    count: state.count
});

export default connect(mapStateToProps)(EstimatedTime);
