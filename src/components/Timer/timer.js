import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './timer.css';

export class Timer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="timer">
                <div className="timer__time">{moment(this.props.time).format('mm:ss:SS')}</div>
            </div>
        )
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

}

const mapStateToProps = state => ({
    time: state.time
});

export default connect(mapStateToProps)(Timer);