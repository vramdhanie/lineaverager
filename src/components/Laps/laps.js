import React, { Component } from 'react';
import { connect } from 'react-redux';
import './laps.css';
import Lap from '../Lap/lap';
import { ListGroup } from "reactstrap";

export class Laps extends Component {

    render(){

        const laps = this.props.laps.map(lap => <Lap key={lap.number} {...lap}/>);

        return (
            <ListGroup className="laps">
                {laps}
            </ListGroup>
        )
    }
}

const mapStateToProps = (state) => ({
   laps: state.laps
});

export default connect(mapStateToProps)(Laps);