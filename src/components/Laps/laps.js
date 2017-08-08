import React, { Component } from 'react';
import { connect } from 'react-redux';
import './laps.css';
import Lap from '../Lap/lap';

export class Laps extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const laps = this.props.laps.map((lap, i)=><Lap key={i} number={i + 1} time={lap} duration={lap}/>);

        return (
            <div className="laps">
                {laps}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   laps: state.laps
});

export default connect(mapStateToProps)(Laps);