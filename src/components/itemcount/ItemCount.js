import React, { Component } from 'react';
import './ItemCount.css';
import {connect} from "react-redux";
import { incrementCount, decrementCount } from "../../actions/index";

class ItemCount extends Component {

    constructor(props){
        super(props);
        this.state = {
            edit:false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }

    toggleEdit(){
        this.setState((prev)=>({
            edit: !prev.edit
        }))
    }

    onChange(count){
        this.props.dispatch( setCount(count) );
    }

    up(){
        this.props.dispatch( incrementCount() );
    }

    down(){
        this.props.dispatch( decrementCount() );
    }



    render() {
        let elem;
        if(this.state.edit){
            elem = (<div className="ItemCount__count">
                <input
                    className="ItemCount__count-input"
                    type="number" step="1"
                    defaultValue={this.props.count}
                    onChange={event => this.onChange(event.target.value)}/>
                <button onClick={this.toggleEdit}>Save</button>
            </div>)
        }else{
            elem = <div className="ItemCount__count" onClick={this.toggleEdit}>{this.props.count}</div>
        }
        return (
            <div className="ItemCount">
                <div className="ItemCount_inner">
                    <div className="ItemCount__mainbox">
                        <div className="ItemCount__count" onClick={this.toggleEdit}>{this.props.count}</div>
                        <div className="ItemCount__controls">
                            <div className="ItemCount__controls-up" onClick={this.up}>UP</div>
                            <div className="ItemCount__controls-down" onClick={this.down}>DN</div>
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