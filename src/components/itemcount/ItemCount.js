import React, { Component } from 'react';
import './ItemCount.css';

class ItemCount extends Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }

    }

    render() {
        return (
            <div className="ItemCount">
                <div className="ItemCount_inner">
                    <div className="ItemCount__count">{this.state.count}</div>
                    <div className="ItemCount__subtle">{ this.props.label }</div>
                </div>
            </div>
        );
    }
}



export default ItemCount;