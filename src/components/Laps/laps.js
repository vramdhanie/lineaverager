import React, { Component } from 'react';
import { connect } from 'react-redux';
import './laps.css';
import Lap from '../Lap/lap';

export class Laps extends Component {

    render(){

        const laps = this.props.laps.map(lap => <Lap key={lap.number} {...lap}/>);

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