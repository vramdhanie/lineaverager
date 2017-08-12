import React, { Component } from 'react';
import './ItemCount.css';
import {connect} from "react-redux";
import { incrementCount, decrementCount } from "../../actions/index";
import upArrow from './up.svg';
import downArrow from './down.svg';

class ItemCount extends Component {

    constructor(props){
        super(props);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    up(){
        this.props.dispatch( incrementCount() );
    }

    down(){
        this.props.dispatch( decrementCount() );
    }

    render() {

        const dn = this.props.count?(
            <div className="ItemCount__controls-down" onClick={this.down}>
                <img src={downArrow} className="ItemCount__controls-down-arrow" alt="DN" />
            </div>):''

        return (
            <div className="ItemCount">
                <div className="ItemCount_inner">
                    <div className="ItemCount__mainbox">
                        <div className="ItemCount__count">{this.props.count}</div>
                        <div className="ItemCount__controls">
                            <div className="ItemCount__controls-up" onClick={this.up}>
                                <img src={upArrow} className="ItemCount__controls-up-arrow" alt="UP" />
                            </div>
                            {dn}
                        </div>
                    </div>

                    <div className="ItemCount__subtle">{ this.props.label }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  count: state.count
})


export default connect(mapStateToProps)(ItemCount);