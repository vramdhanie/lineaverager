import React, { Component } from 'react';
import './ItemCount.css';
import {connect} from "react-redux";
import { setCount } from "../../actions/index";

class ItemCount extends Component {

    constructor(props){
        super(props);
        this.state = {
            edit:false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(){
        this.setState((prev)=>({
            edit: !prev.edit
        }))
    }

    onChange(count){
        this.props.dispatch( setCount(count) );
    }


    render() {
        let elem;
        if(this.state.edit){
            elem = (<div className="ItemCount__count">
                <input className="ItemCount__count-input" type="number" step="1" defaultValue={this.props.count} onChange={event => this.onChange(event.target.value)}/>
                <button onClick={this.toggleEdit}>Save</button>
            </div>)
        }else{
            elem = <div className="ItemCount__count" onClick={this.toggleEdit}>{this.props.count}</div>
        }
        return (
            <div className="ItemCount">
                <div className="ItemCount_inner">
                    {elem}
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